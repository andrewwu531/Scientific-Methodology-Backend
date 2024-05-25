from django.contrib import admin
from .models import Course, Video

class CourseAdmin(admin.ModelAdmin):
    list_display = ('id', 'course_name', 'course_category', 'course_title', 'course_image', 'course_sub_image')

class VideosAdmin(admin.ModelAdmin):
    list_display = ('id', 'course_name', 'video_title', 'video_essay', 'video_series', 'video_episode', 'video_image', 'video_video', 'video_watched_duration_current_month_minutes', 'video_watched_duration_last_month_minutes')


# Register your models here.

admin.site.register(Course, CourseAdmin)
admin.site.register(Video, VideosAdmin)