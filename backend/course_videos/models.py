from django.db import models

class Course(models.Model):
    class Course_Category(models.TextChoices):
        ALL = "1", "Academics_Language_Learning"
        HL = "2", "Health & Lifestyle"
        SE = "3", "Social & Entertainment"
        CF = "4", "Career & Finance"

    course_url = models.CharField(max_length=20)
    course_name = models.CharField(max_length=100, default="default_course_name")
    course_category = models.CharField(max_length=2, choices=Course_Category.choices, default=Course_Category.ALL)
    course_title = models.CharField(max_length=100, default="default_title")
    course_banner = models.ImageField(upload_to='Muscle_Building/Course_Banner', null=True, default='Muscle_Building/Course_Banner/Muscle_Building_Course_Banner_1.jpg')
    def _str_(self):
        return self.course_url
    
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
    video_essay = models.TextField(default="default_video_essay")         
    def _str_(self):
        return self.video_title
    
    class Meta:
        verbose_name_plural = "Videos"

class FAQs(models.Model):

    course_url = models.ForeignKey(Course, on_delete=models.CASCADE)
    faq_question_num = models.CharField(max_length=2, default="0")
    faq_question = models.CharField(max_length=100, default="default_faq_question")
    faq_answer = models.CharField(max_length=500, default="default_faq_answer")
    def _str_(self):
        return self.course_url
    
    class Meta:
        verbose_name_plural = "FAQs"