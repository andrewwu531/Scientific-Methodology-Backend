from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
import os
from moviepy.editor import VideoFileClip


class Course(models.Model):
    class Course_Category(models.TextChoices):
        AE = "1", "Academics Excellence"
        EL = "2", "English Language"
        BE = "3", "Business English"
        GK = "4", "General Knowledge"
        PK = "5", "Professional Knowledge"
        S = "6", "Sports"
        HW = "7", "Health & Wellness"
        FD = "8", "Food & Drinks"
        HBF = "9", "Health, Beauty & Fashion"
        CVIT = "10", "CV & Interview Techniques"
        EI = "11", "Entrepreurship & Investing"


    course_url = models.CharField(max_length=20)
    course_author = models.CharField(max_length=100, default="default_course_author")
    course_category = models.CharField(max_length=2, choices=Course_Category.choices, default=Course_Category.EL)
    course_title = models.CharField(max_length=100, default="default_title")
    course_descriptions = models.CharField(max_length=1000, default="default_descriptions")
    course_banner = models.ImageField(upload_to='Muscle_Building/Course_Banner', null=True, default='Muscle_Building/Course_Banner/Muscle_Building_Course_Banner_1.jpg')
    course_main_banner = models.ImageField(upload_to='Muscle_Building/Course_Main_Banner', null=True, default='Muscle_Building/Course_Main_Banner/Muscle_Building_Course_Banner_1.jpg')


    def __str__(self):
        return self.course_url

    @property
    def course_banner_url(self):
        if self.course_banner:
            return self.course_banner.url
        return ''

    class Meta:
        verbose_name_plural = "Course"

class Videos(models.Model):
    class Video_Subscription_Type(models.TextChoices):
        FREE = "1", "Free"
        BASIC = "2", "Basic"
        PREMIUM = "3", "Premium"

    course_url = models.ForeignKey(Course, on_delete=models.CASCADE)
    video_title = models.CharField(max_length=100, default="default_title")
    video_subscription_type = models.CharField(max_length=2, choices=Video_Subscription_Type.choices, default=Video_Subscription_Type.FREE)
    video_series_name = models.CharField(max_length=20, default="default_series_name")
    video_series = models.CharField(max_length=2, default="0")
    video_episode = models.CharField(max_length=2, default="0")
    video_icon = models.ImageField(upload_to='Muscle_Building/Video_Icon', default='Muscle_Building/Video_Icon/Muscle_Building_Video_Icon_2.jpg')
    video_video = models.FileField(upload_to='Muscle_Building/Video_Video', null=True, default='Muscle_Building/Video_Video/Muscle_Building_Video_Video_1.mp4')
    video_duration = models.CharField(max_length=5, null=True, blank=True)  # Add this field to store MM:SS format

    def __str__(self):
        return self.video_title

    class Meta:
        verbose_name_plural = "Videos"


class FAQs(models.Model):
    course_url = models.ForeignKey(Course, on_delete=models.CASCADE)
    faq_question_num = models.CharField(max_length=2, default="0")
    faq_question = models.CharField(max_length=100, default="default_faq_question")
    faq_answer = models.CharField(max_length=500, default="default_faq_answer")

    def __str__(self):
        return f"{self.faq_question_num}: {self.faq_question}"

    class Meta:
        verbose_name_plural = "FAQs"