from rest_framework import generics
from .serializers import CourseSerializer, VideosSerializer, FAQsSerializer
from .models import Course, Videos, FAQs
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User

class CourseListCreateView(generics.ListCreateAPIView):             
    serializer_class = CourseSerializer
    queryset = Course.objects.all()

@api_view(['GET'])
def get_course_videos(request, course_url):
    videos = Videos.objects.filter(course_url__course_url=course_url)
    serializer = VideosSerializer(videos, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_course_faqs(request, course_url):
    faqs = FAQs.objects.filter(course_url__course_url=course_url)
    serializer = FAQsSerializer(faqs, many=True)
    return Response(serializer.data)


@csrf_exempt
def login_view(request):
    if request.method == "POST":
        email = request.POST.get("email")
        password = request.POST.get("password")
        user = authenticate(request, username=email, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({"success": True})
        else:
            return JsonResponse({"success": False, "error": "Invalid credentials"})
    return JsonResponse({"error": "Invalid request method"}, status=405)

@csrf_exempt
def register_view(request):
    if request.method == "POST":
        email = request.POST.get("email")
        password = request.POST.get("password")
        if User.objects.filter(username=email).exists():
            return JsonResponse({"success": False, "error": "Email already registered"})
        user = User.objects.create_user(username=email, password=password)
        user.save()
        return JsonResponse({"success": True})
    return JsonResponse({"error": "Invalid request method"}, status=405)