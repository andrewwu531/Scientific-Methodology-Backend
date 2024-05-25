from django.db import models

# Create your models here.

class Course(models.Model):
    course_name = models.CharField(max_length=100)
    course_category = models.CharField(max_length=50, default="default_category")
    course_title = models.CharField(max_length=100, default="default_title")
    course_image = models.ImageField(upload_to='course_image', null=True, default='course_image/Muscle_Building_Image_1.jpg')
    course_sub_image = models.ImageField(upload_to='course_sub_image', null=True, default='course_image/Muscle_Building_Image_3.jpg')
    course_video = models.FileField(upload_to='course_video', null=True, default='course_video/Muscle_Building_Video_1.mp4')

    def _str_(self):
        return self.course_name
    
