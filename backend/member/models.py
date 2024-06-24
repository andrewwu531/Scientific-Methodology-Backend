from django.db import models

class Member(models.Model):
    email_address = models.EmailField(unique=True, default="error@example.com")
    recurring_subscription = models.BooleanField(default=False)
    payment_dates = models.JSONField(default=list)
    monthly_courses_duration = models.JSONField(default=dict)

    def __str__(self):
        return self.email_address
