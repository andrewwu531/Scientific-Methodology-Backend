from django.apps import AppConfig

class CourseVideosConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'course_videos'

    # def ready(self):
    #     import course_videos.signals  # Adjust import path to match the app name
