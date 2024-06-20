from rest_framework import generics
from .serializers import CourseSerializer, VideosSerializer, FAQsSerializer
from .models import Course, Videos, FAQs
from rest_framework.response import Response
from rest_framework.decorators import api_view

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
