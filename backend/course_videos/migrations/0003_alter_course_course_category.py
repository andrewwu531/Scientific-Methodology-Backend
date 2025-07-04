# Generated by Django 5.0.2 on 2024-07-12 11:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('course_videos', '0002_remove_course_course_name_course_course_author'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='course_category',
            field=models.CharField(choices=[('1', 'Academics Excellence'), ('2', 'English Language Learning'), ('3', 'Career & Interview Preparation'), ('4', 'Entrepreneurship & Investing'), ('5', 'Sports & Athletics'), ('6', 'Business English'), ('7', 'Science & Technology'), ('8', 'Film & TV & Comedy Shows'), ('9', 'Health, Wellness & Fashion'), ('10', 'Community & Government'), ('11', 'Food & Drinks'), ('12', 'Travel & Adventures')], default='2', max_length=2),
        ),
    ]
