from django.contrib import admin
from .models import Member

class MemberAdmin(admin.ModelAdmin):
    list_display = ('member_full_name', 'member_email_address')

# Register your models here.

admin.site.register(Member, MemberAdmin)