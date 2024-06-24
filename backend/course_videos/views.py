import logging
import json
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import generics
from .serializers import CourseSerializer, VideosSerializer, FAQsSerializer
from .models import Course, Videos, FAQs
from django.contrib.auth import logout

logger = logging.getLogger(__name__)

class CourseListCreateView(generics.ListCreateAPIView):
    serializer_class = CourseSerializer
    queryset = Course.objects.all()

@api_view(['GET'])
def get_course_videos(request, course_url):
    try:
        videos = Videos.objects.filter(course_url__course_url=course_url)
        serializer = VideosSerializer(videos, many=True)
        return Response(serializer.data)
    except Exception as e:
        logger.error(f"Error getting course videos: {e}")
        return Response({"error": "Internal server error"}, status=500)

@api_view(['GET'])
def get_course_faqs(request, course_url):
    try:
        faqs = FAQs.objects.filter(course_url__course_url=course_url)
        serializer = FAQsSerializer(faqs, many=True)
        return Response(serializer.data)
    except Exception as e:
        logger.error(f"Error getting course FAQs: {e}")
        return Response({"error": "Internal server error"}, status=500)

@csrf_exempt
def login_view(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            email = data.get("email")
            password = data.get("password")
            if not email or not password:
                return JsonResponse({"success": False, "error": "Both email address and password are required"}, status=400)
            user = authenticate(request, username=email, password=password)
            if user is not None:
                login(request, user)
                return JsonResponse({"success": True})
            else:
                return JsonResponse({"success": False, "error": "Invalid login credentials"})
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON"}, status=400)
    return JsonResponse({"error": "Invalid request method"}, status=405)

@csrf_exempt
def register_view(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            email = data.get("email")
            password = data.get("password")
            logger.debug(f"Received registration request with email: {email}")
            if not email or not password:
                logger.error("Email and password are required")
                return JsonResponse({"success": False, "error": "Email and password are required"}, status=400)
            if User.objects.filter(username=email).exists():
                logger.error("Email already registered")
                return JsonResponse({"success": False, "error": "Email already registered"}, status=400)
            try:
                user = User.objects.create_user(username=email, email=email, password=password)
                user.save()
                logger.info("User created successfully")
                return JsonResponse({"success": True})
            except Exception as e:
                logger.error(f"Error creating user: {e}")
                return JsonResponse({"success": False, "error": "Internal server error: " + str(e)}, status=500)
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON"}, status=400)
    logger.error("Invalid request method")
    return JsonResponse({"error": "Invalid request method"}, status=405)


@csrf_exempt
def logout_view(request):
    if request.method == "POST":
        logout(request)
        return JsonResponse({"success": True})
    return JsonResponse({"error": "Invalid request method"}, status=405)