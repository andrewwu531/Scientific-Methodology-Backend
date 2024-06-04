from rest_framework import serializers
from .models import Course, Videos, FAQs

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ('course_name', 'course_url', 'course_category', 'course_title', 'course_banner')


class VideosSerializer(serializers.ModelSerializer):
    
    course_name = serializers.SerializerMethodField()
    class Meta:
        model = Videos
        fields = ('course_name', 'video_title', 'video_subscription_type', 'video_series_name' 
                  , 'video_series', 'video_episode', 'video_icon', 'video_video', 'video_essay')

    def get_course_name(self, obj):
        return obj.course_name.course_name
class FAQsSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQs
        fields = ('course_name', 'faq_question_num', 'faq_question', 'faq_answer')

