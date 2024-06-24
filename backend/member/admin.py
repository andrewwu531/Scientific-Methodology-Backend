from django.contrib import admin
from .models import Member

class MemberAdmin(admin.ModelAdmin):
    list_display = ('pk', 'email_address', 'recurring_subscription','payment_dates', 'monthly_courses_duration')

# Register your models here.

admin.site.register(Member, MemberAdmin)