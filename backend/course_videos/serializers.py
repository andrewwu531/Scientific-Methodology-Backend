from rest_framework import serializers
from .models import Course, Video

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ('id', 'course_name', 'course_category', 'course_title', 'course_image', 'course_sub_image')

class VideosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = ('id', 'course_name', 'video_title', 'video_essay', 'video_series', 'video_episode', 'video_image', 'video_video', 'video_watched_duration_current_month_minutes', 'video_watched_duration_last_month_minutes')



