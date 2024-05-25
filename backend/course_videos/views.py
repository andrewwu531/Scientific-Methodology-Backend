from rest_framework import generics
from .serializers import CourseSerializer
from .models import Course

# 1. Create a new course + list all courses

class CourseListCreateView(generics.ListCreateAPIView):             # 1.
    serializer_class = CourseSerializer
    queryset = Course.objects.all()