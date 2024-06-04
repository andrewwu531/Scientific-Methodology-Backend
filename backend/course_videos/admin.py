from django.contrib import admin
from .models import Course, Videos, FAQs

class CourseAdmin(admin.ModelAdmin):
    list_display = ('pk', 'course_name', 'course_url', 'course_category', 'course_title', 'course_banner')

class VideosAdmin(admin.ModelAdmin):
    list_display = ('get_course_name', 'video_title', 'video_subscription_type', 'video_series_name' 
                  , 'video_series', 'video_episode', 'video_icon', 'video_video', 'video_essay')
    
    def get_course_name(self, obj):
        return obj.course_name.course_name
    
    get_course_name.admin_order_field = 'course_name'
    get_course_name.short_description = 'Course Name' 

class FAQsAdmin(admin.ModelAdmin):
    list_display = ('course_name', 'faq_question_num', 'faq_question', 'faq_answer')

admin.site.register(Course, CourseAdmin)
admin.site.register(Videos, VideosAdmin)
admin.site.register(FAQs, FAQsAdmin)