from rest_framework import serializers
from .models import Course, Videos, FAQs

class CourseSerializer(serializers.ModelSerializer):
    course_banner = serializers.SerializerMethodField()

    class Meta:
        model = Course
        fields = ('course_url', 'course_name', 'course_category', 'course_title', 'course_banner')
    
    def get_course_banner(self, obj):
        return obj.course_banner.url

    
class VideosSerializer(serializers.ModelSerializer):
    course_url = serializers.SerializerMethodField()
    
    class Meta:
        model = Videos
        fields = ('pk', 'course_url', 'video_title', 'video_subscription_type', 'video_series_name', 
                  'video_series', 'video_episode', 'video_icon', 'video_video', 'video_duration')

    def get_course_url(self, obj):
        return obj.course_url.course_url
    
class FAQsSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQs
        fields = ('pk', 'course_url', 'faq_question_num', 'faq_question', 'faq_answer')

    def get_course_url(self, obj):
        return obj.course_url.course_url





