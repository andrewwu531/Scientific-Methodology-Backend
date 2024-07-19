from django.db import models
import datetime
from django.contrib.auth.models import UserManager, AbstractUser

class Member(models.Model):
    
    class Subscription_Status(models.TextChoices):
        FREE = "1", "Free"
        BASIC = "2", "Basic"

    email_address = models.EmailField(unique=True, default="error@example.com")
    subscription_status = models.CharField(max_length=2, choices=Subscription_Status.choices, default=Subscription_Status.BASIC)
    payment_date = models.DateField(default=datetime.date.today) 

    def __str__(self):
        return self.email_address

class CustomUserManager(UserManager):
    pass

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    objects = CustomUserManager()

