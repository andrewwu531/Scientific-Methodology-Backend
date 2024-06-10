from rest_framework import generics
from .serializers import CourseSerializer, VideosSerializer, FAQsSerializer
from .models import Course, Videos, FAQs
from rest_framework.exceptions import NotFound


# 1. Create a new course + list all courses

class CourseListCreateView(generics.ListCreateAPIView):             # 1.
    serializer_class = CourseSerializer
    queryset = Course.objects.all()


class CourseVideosListCreateView(generics.ListCreateAPIView):             # 1. + Filtered by course_url
    serializer_class = VideosSerializer
    queryset = Videos.objects.all()

    def get_queryset(self):
        course_url = self.kwargs['course_url']
        try:
            course = Course.objects.get(course_url=course_url)
        except Course.DoesNotExist:
            raise NotFound(detail="Course not found")
        return Videos.objects.filter(course_url=course)

    def perform_create(self, serializer):
        course_url = self.kwargs['course_url']
        try:
            course = Course.objects.get(course_url=course_url)
        except Course.DoesNotExist:
            raise NotFound(detail="Course not found")
        serializer.save(course_url=course)
    
class CourseFAQsListCreateView(generics.ListCreateAPIView):             # 1. + Filtered by course_url
    serializer_class = FAQsSerializer
    queryset = FAQs.objects.all()

    def get_queryset(self):
        return self.queryset.filter(course_url=self.kwargs['pk'])