from rest_framework import generics
from .serializers import CourseSerializer, VideosSerializer
from .models import Course, Video

# 1. Create a new course + list all courses

class CourseListCreateView(generics.ListCreateAPIView):             # 1.
    serializer_class = CourseSerializer
    queryset = Course.objects.all()


class CourseVideosListCreateView(generics.ListCreateAPIView):             # 1. + Filtered by course_name
    serializer_class = VideosSerializer
    queryset = Video.objects.all()

    def get_queryset(self):
        return self.queryset.filter(course_name=self.kwargs['pk'])