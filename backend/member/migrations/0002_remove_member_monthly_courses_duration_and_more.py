# Generated by Django 5.0.2 on 2024-07-19 10:17

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('member', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='member',
            name='monthly_courses_duration',
        ),
        migrations.RemoveField(
            model_name='member',
            name='payment_dates',
        ),
        migrations.RemoveField(
            model_name='member',
            name='recurring_subscription',
        ),
        migrations.AddField(
            model_name='member',
            name='payment_date',
            field=models.DateField(default=datetime.date.today),
        ),
        migrations.AddField(
            model_name='member',
            name='subscription_status',
            field=models.CharField(choices=[('1', 'Free'), ('2', 'Basic')], default='2', max_length=2),
        ),
    ]
