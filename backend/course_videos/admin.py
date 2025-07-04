from django.contrib import admin
from .models import Course, Videos, FAQs

class CourseAdmin(admin.ModelAdmin):
    list_display = ('pk', 'course_url', 'course_author', 'course_category', 'course_title',
                     'course_descriptions', 'course_banner')

class VideosAdmin(admin.ModelAdmin):
    list_display = ('pk', 'get_course_url', 'video_title', 'video_subscription_type', 'video_series_name' 
                  , 'video_series', 'video_episode', 'video_icon', 'video_video', 'video_duration')
    
    def get_course_url(self, obj):
        return obj.course_url.course_url
    
    get_course_url.admin_order_field = 'course_url'
    get_course_url.short_description = 'Course Url' 

class FAQsAdmin(admin.ModelAdmin):
    list_display = ('pk','get_course_url', 'faq_question_num', 'faq_question', 'faq_answer')

    def get_course_url(self, obj):
        return obj.course_url.course_url
    
    get_course_url.admin_order_field = 'course_url'
    get_course_url.short_description = 'Course Url' 

admin.site.register(Course, CourseAdmin)
admin.site.register(Videos, VideosAdmin)
admin.site.register(FAQs, FAQsAdmin)

