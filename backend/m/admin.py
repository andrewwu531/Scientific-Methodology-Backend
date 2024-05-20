from django.contrib import admin
from .models import Course

class CourseAdmin(admin.ModelAdmin):
    list_display = ('course_category', 'course_name')

# Register your models here.

admin.site.register(Course, CourseAdmin)