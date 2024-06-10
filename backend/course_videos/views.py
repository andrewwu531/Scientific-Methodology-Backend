from rest_framework import generics
from .serializers import CourseSerializer, VideosSerializer, FAQsSerializer
from .models import Course, Videos, FAQs
from rest_framework.exceptions import NotFound
from django.http import JsonResponse



# 1. Create a new course + list all courses

class CourseListCreateView(generics.ListCreateAPIView):             # 1.
    serializer_class = CourseSerializer
    queryset = Course.objects.all()

from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Videos
from .serializers import VideosSerializer

@api_view(['GET'])
def get_course_videos(request, course_url):
    videos = Videos.objects.filter(course_url__course_url=course_url)
    serializer = VideosSerializer(videos, many=True)
    print(serializer.data)  # Log the serialized data

    return Response(serializer.data)
# class CourseVideosListCreateView(generics.ListCreateAPIView):             # 1. + Filtered by course_url
#     serializer_class = VideosSerializer
#     queryset = Videos.objects.all()

#     def get_courses_by_category(request):
#         category = request.GET.get('category')
#         courses = Course.objects.filter(course_category=category)
        
#         if not courses.exists():
#             return JsonResponse({"error": "No courses found for this category."}, status=404)

#         course_data = []
#         for course in courses:
#             videos = Videos.objects.filter(course_url=course)
#             course_data.append({
#                 "course_title": course.course_title,
#                 "course_name": course.course_name,
#                 "course_banner": course.course_banner.url,
#                 "videos": [{
#                     "video_title": video.video_title,
#                     "video_icon": video.video_icon.url,
#                     "duration": "32:51"  # Example, replace with actual video duration
#                 } for video in videos]
#             })

#         return JsonResponse(course_data, safe=False)

#     def get_queryset(self):
#         course_url = self.kwargs['course_url']
#         try:
#             course = Course.objects.get(course_url=course_url)
#         except Course.DoesNotExist:
#             raise NotFound(detail="Course not found")
#         return Videos.objects.filter(course_url=course)

#     def perform_create(self, serializer):
#         course_url = self.kwargs['course_url']
#         try:
#             course = Course.objects.get(course_url=course_url)
#         except Course.DoesNotExist:
#             raise NotFound(detail="Course not found")
#         serializer.save(course_url=course)
    
# class CourseFAQsListCreateView(generics.ListCreateAPIView):             # 1. + Filtered by course_url
#     serializer_class = FAQsSerializer
#     queryset = FAQs.objects.all()

#     def get_queryset(self):
#         return self.queryset.filter(course_url=self.kwargs['pk'])