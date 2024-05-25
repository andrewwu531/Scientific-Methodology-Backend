from django.db import models

# Create your models here.

class Member(models.Model):
    member_full_name = models.CharField(max_length=50)
    member_email_address = models.CharField(max_length=100)

    def _str_(self):
        return self.member_full_name