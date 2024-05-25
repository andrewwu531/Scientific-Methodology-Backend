from django.db import models

# Create your models here.

class Course(models.Model):
    course_name = models.CharField(max_length=100)
    course_category = models.CharField(max_length=50, default="default_category")
    course_title = models.CharField(max_length=100, default="default_title")
    course_image = models.ImageField(upload_to='course_image', null=True, default='course_image/Muscle_Building_Image_1.jpg')
    course_sub_image = models.ImageField(upload_to='course_sub_image', null=True, default='course_image/Muscle_Building_Image_4.jpg')
    def _str_(self):
        return self.course_name
    

class Video(models.Model):
    course_name = models.ForeignKey(Course, on_delete=models.CASCADE)
    video_title = models.CharField(max_length=100, default="default_title")
    video_essay = models.CharField(max_length=100, default="default_essay")
    video_series = models.CharField(max_length=20, default="default_series")
    video_episode = models.CharField(max_length=20, default="default_episode")
    video_image = models.ImageField(upload_to='video_image', null=True, default='video_image/Muscle_Building_Image_2.jpg')
    video_video = models.FileField(upload_to='video_video', null=True, default='video_video/Muscle_Building_Video_1.mp4')
    video_watched_duration_current_month_minutes = models.CharField(max_length=100, default="0")
    video_watched_duration_last_month_minutes = models.CharField(max_length=100, default="0")

    def _str_(self):
        return self.video_title
    