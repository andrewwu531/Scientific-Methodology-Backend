from rest_framework import serializers
from .models import Member

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ('pk', 'email_address', 'recurring_subscription','payment_dates', 'monthly_courses_duration')
