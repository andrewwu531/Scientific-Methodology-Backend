import os
import sys
from moviepy.editor import VideoFileClip

sys.path.append(os.path.abspath(os.path.join(__file__, *[os.pardir] * 2)))
os.environ['DJANGO_SETTINGS_MODULE'] = 'backend.settings'

import django
django.setup()

from course_videos.models import Course, Videos

def populate_course_weight_loss():

    data = {
        'Weight Loss': {
            'course_url': 'weight_loss',
            'course_category': Course.Course_Category.HL,
            'course_title': 'The Professional Weight Loss Programme',
            'course_banner': 'Weight_Loss/Course_Banner/Muscle_Building_Course_Banner.jpg',
            'videos': [
                {
                    'video_title': 'Weight Loss - Qualifications & Professional Career',
                    'video_subscription_type': Videos.Video_Subscription_Type.FREE,
                    'video_series_name': 'Introduction',
                    'video_series': '1',
                    'video_episode': '1',
                    'video_icon': 'Muscle_Building/Video_Icon/Muscle_Building_Video_Icon_1_1.jpg',
                    'video_video': 'Muscle_Building/Video_Video/Muscle_Building_Video_Video_1_1.mp4',
                },
                {
                    'video_title': 'Before & After Bodybuilding Transformations',
                    'video_subscription_type': Videos.Video_Subscription_Type.FREE,
                    'video_series_name': 'Introduction',
                    'video_series': '1',
                    'video_episode': '2',
                    'video_icon': 'Muscle_Building/Video_Icon/Muscle_Building_Video_Icon_1_2.jpg',
                    'video_video': 'Muscle_Building/Video_Video/Muscle_Building_Video_Video_1_2.mp4',
                },
                {
                    'video_title': 'How Easy Is The Diet',
                    'video_subscription_type': Videos.Video_Subscription_Type.FREE,
                    'video_series_name': 'Introduction',
                    'video_series': '1',
                    'video_episode': '3',
                    'video_icon': 'Muscle_Building/Video_Icon/Muscle_Building_Video_Icon_1_3.jpg',
                    'video_video': 'Muscle_Building/Video_Video/Muscle_Building_Video_Video_1_3.mp4',
                },
                {
                    'video_title': 'How This Programme Stands Out From Other Leading Courses',
                    'video_subscription_type': Videos.Video_Subscription_Type.FREE,
                    'video_series_name': 'Introduction',
                    'video_series': '1',
                    'video_episode': '4',
                    'video_icon': 'Muscle_Building/Video_Icon/Muscle_Building_Video_Icon_1_4.jpg',
                    'video_video': 'Muscle_Building/Video_Video/Muscle_Building_Video_Video_1_4.mp4',
                },
                {
                    'video_title': 'Social Media',
                    'video_subscription_type': Videos.Video_Subscription_Type.FREE,
                    'video_series_name': 'Introduction',
                    'video_series': '1',
                    'video_episode': '5',
                    'video_icon': 'Muscle_Building/Video_Icon/Muscle_Building_Video_Icon_1_5.jpg',
                    'video_video': 'Muscle_Building/Video_Video/Muscle_Building_Video_Video_1_5.mp4',
                },
                {
                    'video_title': 'Bodybuilding is 80% diet and 20% workout',
                    'video_subscription_type': Videos.Video_Subscription_Type.FREE,
                    'video_series_name': 'Nutrition Theory',
                    'video_series': '2',
                    'video_episode': '1',
                    'video_icon': 'Muscle_Building/Video_Icon/Muscle_Building_Video_Icon_2_1.jpg',
                    'video_video': 'Muscle_Building/Video_Video/Muscle_Building_Video_Video_2_1.mp4',
                },
                {
                    'video_title': 'Why the medium calories, medium carbs, low fat and high protein diet',
                    'video_subscription_type': Videos.Video_Subscription_Type.BASIC,
                    'video_series_name': 'Nutrition Theory',
                    'video_series': '2',
                    'video_episode': '2',
                    'video_icon': 'Muscle_Building/Video_Icon/Muscle_Building_Video_Icon_2_2.jpg',
                    'video_video': 'Muscle_Building/Video_Video/Muscle_Building_Video_Video_2_2.mp4',
                },
                {
                    'video_title': 'Calculating your personalised recommended calories, protein, carbohydrates and fat intake',
                    'video_subscription_type': Videos.Video_Subscription_Type.BASIC,
                    'video_series_name': 'Nutrition Theory',
                    'video_series': '2',
                    'video_episode': '3',
                    'video_icon': 'Muscle_Building/Video_Icon/Muscle_Building_Video_Icon_2_3.jpg',
                    'video_video': 'Muscle_Building/Video_Video/Muscle_Building_Video_Video_2_3.mp4',
                },
                {
                    'video_title': 'The importance of food choices: meat, pasta, veg, sauce and oil',
                    'video_subscription_type': Videos.Video_Subscription_Type.BASIC,
                    'video_series_name': 'Nutrition Theory',
                    'video_series': '2',
                    'video_episode': '4',
                    'video_icon': 'Muscle_Building/Video_Icon/Muscle_Building_Video_Icon_2_4.jpg',
                    'video_video': 'Muscle_Building/Video_Video/Muscle_Building_Video_Video_2_4.mp4',
                },
                {
                    'video_title': 'Carb cycling & the front-heavy approach dieting',
                    'video_subscription_type': Videos.Video_Subscription_Type.BASIC,
                    'video_series_name': 'Nutrition Theory',
                    'video_series': '2',
                    'video_episode': '5',
                    'video_icon': 'Muscle_Building/Video_Icon/Muscle_Building_Video_Icon_2_5.jpg',
                    'video_video': 'Muscle_Building/Video_Video/Muscle_Building_Video_Video_2_5.mp4',
                },
                {
                    'video_title': 'Sarcoplasmic vs Myofibrillar Hypertrophy',
                    'video_subscription_type': Videos.Video_Subscription_Type.BASIC,
                    'video_series_name': 'Weightlifting Mechanisms',
                    'video_series': '3',
                    'video_episode': '1',
                    'video_icon': 'Muscle_Building/Video_Icon/Muscle_Building_Video_Icon_3_1.jpg',
                    'video_video': 'Muscle_Building/Video_Video/Muscle_Building_Video_Video_3_1.mp4',
                },
                {
                    'video_title': 'Powerlifting vs Bodybuilding',
                    'video_subscription_type': Videos.Video_Subscription_Type.PREMIUM,
                    'video_series_name': 'Weightlifting Mechanisms',
                    'video_series': '3',
                    'video_episode': '2',
                    'video_icon': 'Muscle_Building/Video_Icon/Muscle_Building_Video_Icon_3_2.jpg',
                    'video_video': 'Muscle_Building/Video_Video/Muscle_Building_Video_Video_3_2.mp4',
                },
                {
                    'video_title': 'Tempo: The Concentric & Eccentric Motions',
                    'video_subscription_type': Videos.Video_Subscription_Type.PREMIUM,
                    'video_series_name': 'Weightlifting Mechanisms',
                    'video_series': '3',
                    'video_episode': '3',
                    'video_icon': 'Muscle_Building/Video_Icon/Muscle_Building_Video_Icon_3_3.jpg',
                    'video_video': 'Muscle_Building/Video_Video/Muscle_Building_Video_Video_3_3.mp4',
                },
                {
                    'video_title': 'The Range of Motion',
                    'video_subscription_type': Videos.Video_Subscription_Type.PREMIUM,
                    'video_series_name': 'Weightlifting Mechanisms',
                    'video_series': '3',
                    'video_episode': '4',
                    'video_icon': 'Muscle_Building/Video_Icon/Muscle_Building_Video_Icon_3_4.jpg',
                    'video_video': 'Muscle_Building/Video_Video/Muscle_Building_Video_Video_3_4.mp4',
                },
                {
                    'video_title': 'Other Weightlifting Techniques',
                    'video_subscription_type': Videos.Video_Subscription_Type.PREMIUM,
                    'video_series_name': 'Weightlifting Mechanisms',
                    'video_series': '3',
                    'video_episode': '5',
                    'video_icon': 'Muscle_Building/Video_Icon/Muscle_Building_Video_Icon_3_5.jpg',
                    'video_video': 'Muscle_Building/Video_Video/Muscle_Building_Video_Video_3_5.mp4',
                },
                {
                    'video_title': 'A Sample Workout Drill',
                    'video_subscription_type': Videos.Video_Subscription_Type.PREMIUM,
                    'video_series_name': 'Weightlifting Mechanisms',
                    'video_series': '3',
                    'video_episode': '6',
                    'video_icon': 'Muscle_Building/Video_Icon/Muscle_Building_Video_Icon_3_6.jpg',
                    'video_video': 'Muscle_Building/Video_Video/Muscle_Building_Video_Video_3_6.mp4',
                }
            ]
        }
    }

    for course_name, course_data in data.items():
        course = add_course(
            course_name=course_name,
            course_url=course_data['course_url'],
            course_category=course_data['course_category'],
            course_title=course_data['course_title'],
            course_banner=course_data['course_banner']
        )
        for video_data in course_data['videos']:
            add_video(course_url=course, **video_data)

    print('Starting Project M Weight Loss population script...')

def add_video(course_url, video_title, video_subscription_type, video_series_name, 
              video_series, video_episode, video_icon, video_video):
    v = Videos.objects.get_or_create(course_url=course_url, video_title=video_title)[0]
    v.video_subscription_type = video_subscription_type
    v.video_series_name = video_series_name
    v.video_series = video_series
    v.video_episode = video_episode
    v.video_icon = video_icon
    v.video_video = video_video

    # Compute video duration in MM:SS format
    base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), os.pardir, os.pardir))
    video_path = os.path.join(base_dir, 'backend', 'static', 'media', video_video)
    try:
        with VideoFileClip(video_path) as clip:
            duration_seconds = int(clip.duration)
            minutes, seconds = divmod(duration_seconds, 60)
            minutes_str = f"{minutes}"
            seconds_str = f"{seconds:02}"
            if minutes_str.startswith('0'):
                minutes_str = minutes_str[1:]
            v.video_duration = f"{minutes_str}:{seconds_str}"
    except Exception as e:
        print(f"Error computing duration for {video_title}: {e}")

    v.save()
    return v

def add_course(course_name, course_url, course_category, course_title, course_banner):
    c = Course.objects.get_or_create(course_url=course_url)[0]
    c.course_name = course_name
    c.course_category = course_category
    c.course_title = course_title
    c.course_banner = course_banner
    c.save()
    return c

# Start execution here!
if __name__ == '__main__':
    populate_course_weight_loss()
