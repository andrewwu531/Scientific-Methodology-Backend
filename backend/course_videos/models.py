from django.db import models

class Course(models.Model):
    class Course_Category(models.TextChoices):
        ALL = "1", "Academics_Language_Learning"
        HL = "2", "Health & Lifestyle"
        SE = "3", "Social & Entertainment"
        CF = "4", "Career & Finance"

    course_name = models.CharField(max_length=100)
    course_category = models.CharField(max_length=2, choices=Course_Category.choices, default=Course_Category.ALL)
    course_title = models.CharField(max_length=100, default="default_title")
    course_banner = models.ImageField(upload_to='course_image', null=True, default='course_image/Muscle_Building_Image_1.jpg')
    def _str_(self):
        return self.course_name
    
    class Meta:
        verbose_name_plural = "Course"

class Videos(models.Model):
    class Video_Subscription_Type(models.TextChoices):
        FREE = "1", "Free"
        BASIC = "2", "Basic"
        PREMIUM = "3", "Premium"
        ONEOFF = "4", "One Off"

    course_name = models.ForeignKey(Course, on_delete=models.CASCADE)
    video_title = models.CharField(max_length=100, default="default_title")
    video_subscription_type = models.CharField(max_length=2, choices=Video_Subscription_Type.choices, default=Video_Subscription_Type.FREE)
    video_series_name = models.CharField(max_length=20, default="default_series_name")
    video_series = models.CharField(max_length=2, default="0")
    video_episode = models.CharField(max_length=2, default="0")
    video_image = models.ImageField(upload_to='video_image', null=True, default='video_image/Muscle_Building_Image_2.jpg')
    video_video = models.FileField(upload_to='video_video', null=True, default='video_video/Muscle_Building_Video_1.mp4')
    video_essay = models.TextField(default="default_video_essay")         
    def _str_(self):
        return self.video_title
    
    class Meta:
        verbose_name_plural = "Videos"

class FAQs(models.Model):

    course_name = models.ForeignKey(Course, on_delete=models.CASCADE)
    faq_question_num = models.CharField(max_length=2, default="0")
    faq_question = models.CharField(max_length=100, default="default_faq_question")
    faq_answer = models.CharField(max_length=500, default="default_faq_answer")
    def _str_(self):
        return self.course_name
    
    class Meta:
        verbose_name_plural = "FAQs"