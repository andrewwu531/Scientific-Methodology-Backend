from django.contrib import admin
from .models import Course

class CourseAdmin(admin.ModelAdmin):
    list_display = ('id', 'course_name', 'course_category', 'course_title', 'course_image', 'course_sub_image', 'course_video')

# Register your models here.

admin.site.register(Course, CourseAdmin)