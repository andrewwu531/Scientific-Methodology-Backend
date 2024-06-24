import logging
import json
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import render, get_object_or_404
from rest_framework import generics
from .serializers import CourseSerializer, VideosSerializer, FAQsSerializer
from django.utils.encoding import force_bytes, force_str
from .models import Course, Videos, FAQs
from django.core.mail import send_mail
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.template.loader import render_to_string
from django.contrib.auth.tokens import default_token_generator
from django.template.exceptions import TemplateDoesNotExist
from django.contrib.auth import get_user_model

User = get_user_model()
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
                return JsonResponse({"success": False, "error": "Both email address and password are required!"}, status=400)
            user = authenticate(request, username=email, password=password)
            if user is not None:
                login(request, user)
                return JsonResponse({"success": True})
            else:
                return JsonResponse({"success": False, "error": "Login credentials do not exist!"})
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
            if not email or not password:
                return JsonResponse({"success": False, "error": "Both email address and password are required!"}, status=400)

            if len(password) <= 7:
                return JsonResponse({"success": False, "error": "Password length must exceed 7 characters!"}, status=400)

            if User.objects.filter(username=email).exists():
                return JsonResponse({"success": False, "error": "This email has already been registered!"}, status=400)

            user = User.objects.create_user(username=email, email=email, password=password)
            user.save()
            return JsonResponse({"success": True})

        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON"}, status=400)
    return JsonResponse({"error": "Invalid request method"}, status=405)

@csrf_exempt
def password_reset_request(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            email = data.get("email")
            if not email:
                return JsonResponse({"success": False, "error": "Email address is required!"}, status=400)
            user = User.objects.get(email=email)
            token = default_token_generator.make_token(user)
            uid = urlsafe_base64_encode(force_bytes(user.pk))
            password_reset_link = f"http://127.0.0.1:8000/reset-password/{uid}/{token}/"

            subject = "Password Reset Requested"
            message = render_to_string('password_reset_email.html', {
                'user': user,
                'password_reset_link': password_reset_link,
            })
            send_mail(subject, message, 'andrewwu0531@outlook.com', [user.email])

            return JsonResponse({"success": True, "message": "Password reset email sent!"})
        except User.DoesNotExist:
            return JsonResponse({"success": False, "error": "User with this email does not exist!"}, status=400)
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON"}, status=400)
    return JsonResponse({"error": "Invalid request method"}, status=405)

def password_reset_confirm(request, uidb64, token):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            password = data.get("password")
            if not password or len(password) <= 7:
                return JsonResponse({"success": False, "error": "Password must be longer than 7 characters!"}, status=400)
            
            uid = force_str(urlsafe_base64_decode(uidb64))
            user = get_object_or_404(User, pk=uid)

            if default_token_generator.check_token(user, token):
                user.set_password(password)
                user.save()
                return JsonResponse({"success": True, "message": "Password reset successful!"})
            else:
                return JsonResponse({"success": False, "error": "Invalid token!"}, status=400)
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON"}, status=400)
    return render(request, "password_reset_confirm.html", {"uidb64": uidb64, "token": token})

@csrf_exempt
def logout_view(request):
    if request.method == "POST":
        logout(request)
        return JsonResponse({"success": True})
    return JsonResponse({"error": "Invalid request method"}, status=405)
