from rest_framework import generics
from .serializers import CourseSerializer, VideosSerializer, FAQsSerializer
from .models import Course, Videos, FAQs

# 1. Create a new course + list all courses

class CourseListCreateView(generics.ListCreateAPIView):             # 1.
    serializer_class = CourseSerializer
    queryset = Course.objects.all()


class CourseVideosListCreateView(generics.ListCreateAPIView):             # 1. + Filtered by course_name
    serializer_class = VideosSerializer
    queryset = Videos.objects.all()

    def get_queryset(self):
        return self.queryset.filter(course_name=self.kwargs['pk'])
    
class CourseFAQsListCreateView(generics.ListCreateAPIView):             # 1. + Filtered by course_name
    serializer_class = FAQsSerializer
    queryset = FAQs.objects.all()

    def get_queryset(self):
        return self.queryset.filter(course_name=self.kwargs['pk'])