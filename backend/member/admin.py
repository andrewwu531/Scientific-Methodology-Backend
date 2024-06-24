# member/admin.py
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Member, CustomUser
from .forms import CustomUserCreationForm, CustomUserChangeForm

class MemberAdmin(admin.ModelAdmin):
    list_display = ('pk', 'email_address', 'recurring_subscription', 'payment_dates', 'monthly_courses_duration')

class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = ['email', 'username', 'is_staff']

admin.site.register(Member, MemberAdmin)
admin.site.register(CustomUser, CustomUserAdmin)
