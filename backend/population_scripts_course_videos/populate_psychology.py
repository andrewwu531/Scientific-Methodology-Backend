import os
# os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
import sys

sys.path.append(os.path.abspath(os.path.join(__file__, *[os.pardir] * 2)))

os.environ['DJANGO_SETTINGS_MODULE'] = 'backend.settings'


import django
django.setup()

from course_videos.models import Course, Videos

def read_video_essay(file_path):
    with open(file_path, 'r', encoding="utf8") as file:
        return file.read().strip()

def populate_course_psychology():
    
    essays_directory = 'video_essays_docs/Psychology'

    data = {
        'Psychology': {
            'course_url': 'psychology',
            'course_category': Course.Course_Category.HL,
            'course_title': 'The Leading Psychology & Mind Programme by Jordon Peterson',
            'course_banner': 'Psychology/Course_Banner/Muscle_Building_Course_Banner.jpg',
            'videos': [
                {
                    'video_title': 'Accents Qualifications & Professional Career',
                    'video_subscription_type': Videos.Video_Subscription_Type.FREE,
                    'video_series_name': 'Introduction',
                    'video_series': '1',
                    'video_episode': '1',
                    'video_icon': 'Psychology/Video_Icon/Muscle_Building_Video_Icon_1_1.jpg',
                    'video_video': 'Psychology/Video_Video/Muscle_Building_Video_Video_1_1.mp4',
                    'video_essay': read_video_essay(os.path.join(essays_directory, 'Muscle_Building_Video_1_1.txt')),
                },
                {
                    'video_title': 'Before & After Bodybuilding Transformations',
                    'video_subscription_type': Videos.Video_Subscription_Type.FREE,
                    'video_series_name': 'Introduction',
                    'video_series': '1',
                    'video_episode': '2',
                    'video_icon': 'Psychology/Video_Icon/Muscle_Building_Video_Icon_1_2.jpg',
                    'video_video': 'Psychology/Video_Video/Muscle_Building_Video_Video_1_2.mp4',
                    'video_essay': read_video_essay(os.path.join(essays_directory, 'Muscle_Building_Video_1_2.txt')),
                },
                {
                    'video_title': 'How Easy Is The Diet',
                    'video_subscription_type': Videos.Video_Subscription_Type.FREE,
                    'video_series_name': 'Introduction',
                    'video_series': '1',
                    'video_episode': '3',
                    'video_icon': 'Psychology/Video_Icon/Muscle_Building_Video_Icon_1_3.jpg',
                    'video_video': 'Psychology/Video_Video/Muscle_Building_Video_Video_1_3.mp4',
                    'video_essay': read_video_essay(os.path.join(essays_directory, 'Muscle_Building_Video_1_3.txt')),
                },
                {
                    'video_title': 'How This Programme Stands Out From Other Leading Courses',
                    'video_subscription_type': Videos.Video_Subscription_Type.FREE,
                    'video_series_name': 'Introduction',
                    'video_series': '1',
                    'video_episode': '4',
                    'video_icon': 'Psychology/Video_Icon/Muscle_Building_Video_Icon_1_4.jpg',
                    'video_video': 'Psychology/Video_Video/Muscle_Building_Video_Video_1_4.mp4',
                    'video_essay': read_video_essay(os.path.join(essays_directory, 'Muscle_Building_Video_1_4.txt')),
                },
                {
                    'video_title': 'Social Media',
                    'video_subscription_type': Videos.Video_Subscription_Type.FREE,
                    'video_series_name': 'Introduction',
                    'video_series': '1',
                    'video_episode': '5',
                    'video_icon': 'Psychology/Video_Icon/Muscle_Building_Video_Icon_1_5.jpg',
                    'video_video': 'Psychology/Video_Video/Muscle_Building_Video_Video_1_5.mp4',
                    'video_essay': read_video_essay(os.path.join(essays_directory, 'Muscle_Building_Video_1_5.txt')),
                },
                {
                    'video_title': 'Bodybuilding is 80%% diet and 20% workout',
                    'video_subscription_type': Videos.Video_Subscription_Type.FREE,
                    'video_series_name': 'Nutrition Theory',
                    'video_series': '2',
                    'video_episode': '1',
                    'video_icon': 'Psychology/Video_Icon/Muscle_Building_Video_Icon_2_1.jpg',
                    'video_video': 'Psychology/Video_Video/Muscle_Building_Video_Video_2_1.mp4',
                    'video_essay': read_video_essay(os.path.join(essays_directory, 'Muscle_Building_Video_2_1.txt')),
                },
                {
                    'video_title': 'Why the medium calories, medium carbs, low fat and high protein diet',
                    'video_subscription_type': Videos.Video_Subscription_Type.BASIC,
                    'video_series_name': 'Nutrition Theory',
                    'video_series': '2',
                    'video_episode': '2',
                    'video_icon': 'Psychology/Video_Icon/Muscle_Building_Video_Icon_2_2.jpg',
                    'video_video': 'Psychology/Video_Video/Muscle_Building_Video_Video_2_2.mp4',
                    'video_essay': read_video_essay(os.path.join(essays_directory, 'Muscle_Building_Video_2_2.txt')),
                },
                {
                    'video_title': 'Calculating your personalised recommended calories, protein, carbohydrates and fat intake',
                    'video_subscription_type': Videos.Video_Subscription_Type.BASIC,
                    'video_series_name': 'Nutrition Theory',
                    'video_series': '2',
                    'video_episode': '3',
                    'video_icon': 'Psychology/Video_Icon/Muscle_Building_Video_Icon_2_3.jpg',
                    'video_video': 'Psychology/Video_Video/Muscle_Building_Video_Video_2_3.mp4',
                    'video_essay': read_video_essay(os.path.join(essays_directory, 'Muscle_Building_Video_2_3.txt')),
                },
                {
                    'video_title': 'The importance of food choices: meat, pasta, veg, sauce and oil',
                    'video_subscription_type': Videos.Video_Subscription_Type.BASIC,
                    'video_series_name': 'Nutrition Theory',
                    'video_series': '2',
                    'video_episode': '4',
                    'video_icon': 'Psychology/Video_Icon/Muscle_Building_Video_Icon_2_4.jpg',
                    'video_video': 'Psychology/Video_Video/Muscle_Building_Video_Video_2_4.mp4',
                    'video_essay': read_video_essay(os.path.join(essays_directory, 'Muscle_Building_Video_2_4.txt')),
                },
                {
                    'video_title': 'Carb cycling & the front-heavy approach dieting',
                    'video_subscription_type': Videos.Video_Subscription_Type.BASIC,
                    'video_series_name': 'Nutrition Theory',
                    'video_series': '2',
                    'video_episode': '5',
                    'video_icon': 'Psychology/Video_Icon/Muscle_Building_Video_Icon_2_5.jpg',
                    'video_video': 'Psychology/Video_Video/Muscle_Building_Video_Video_2_5.mp4',
                    'video_essay': read_video_essay(os.path.join(essays_directory, 'Muscle_Building_Video_2_5.txt')),
                },
                {
                    'video_title': 'Sarcoplasmic vs Myofibrillar Hypertrophy',
                    'video_subscription_type': Videos.Video_Subscription_Type.BASIC,
                    'video_series_name': 'Weightlifting Mechanisms',
                    'video_series': '3',
                    'video_episode': '1',
                    'video_icon': 'Psychology/Video_Icon/Muscle_Building_Video_Icon_3_1.jpg',
                    'video_video': 'Psychology/Video_Video/Muscle_Building_Video_Video_3_1.mp4',
                    'video_essay': read_video_essay(os.path.join(essays_directory, 'Muscle_Building_Video_3_1.txt')),
                },
                {
                    'video_title': 'Powerlifting vs Bodybuilding',
                    'video_subscription_type': Videos.Video_Subscription_Type.PREMIUM,
                    'video_series_name': 'Weightlifting Mechanisms',
                    'video_series': '3',
                    'video_episode': '2',
                    'video_icon': 'Psychology/Video_Icon/Muscle_Building_Video_Icon_3_2.jpg',
                    'video_video': 'Psychology/Video_Video/Muscle_Building_Video_Video_3_2.mp4',
                    'video_essay': read_video_essay(os.path.join(essays_directory, 'Muscle_Building_Video_3_2.txt')),
                },
                {
                    'video_title': 'Tempo: The Concentric & Eccentric Motions',
                    'video_subscription_type': Videos.Video_Subscription_Type.PREMIUM,
                    'video_series_name': 'Weightlifting Mechanisms',
                    'video_series': '3',
                    'video_episode': '3',
                    'video_icon': 'Psychology/Video_Icon/Muscle_Building_Video_Icon_3_3.jpg',
                    'video_video': 'Psychology/Video_Video/Muscle_Building_Video_Video_3_3.mp4',
                    'video_essay': read_video_essay(os.path.join(essays_directory, 'Muscle_Building_Video_3_3.txt')),
                },
                {
                    'video_title': 'The Range of Motion',
                    'video_subscription_type': Videos.Video_Subscription_Type.PREMIUM,
                    'video_series_name': 'Weightlifting Mechanisms',
                    'video_series': '3',
                    'video_episode': '4',
                    'video_icon': 'Psychology/Video_Icon/Muscle_Building_Video_Icon_3_4.jpg',
                    'video_video': 'Psychology/Video_Video/Muscle_Building_Video_Video_3_4.mp4',
                    'video_essay': read_video_essay(os.path.join(essays_directory, 'Muscle_Building_Video_3_4.txt')),
                },
                {
                    'video_title': 'Other Weightlifting Techniques',
                    'video_subscription_type': Videos.Video_Subscription_Type.PREMIUM,
                    'video_series_name': 'Weightlifting Mechanisms',
                    'video_series': '3',
                    'video_episode': '5',
                    'video_icon': 'Psychology/Video_Icon/Muscle_Building_Video_Icon_3_5.jpg',
                    'video_video': 'Psychology/Video_Video/Muscle_Building_Video_Video_3_5.mp4',
                    'video_essay': read_video_essay(os.path.join(essays_directory, 'Muscle_Building_Video_3_5.txt')),
                },
                {
                    'video_title': 'A Sample Workout Drill',
                    'video_subscription_type': Videos.Video_Subscription_Type.PREMIUM,
                    'video_series_name': 'Weightlifting Mechanisms',
                    'video_series': '3',
                    'video_episode': '6',
                    'video_icon': 'Psychology/Video_Icon/Muscle_Building_Video_Icon_3_6.jpg',
                    'video_video': 'Psychology/Video_Video/Muscle_Building_Video_Video_3_6.mp4',
                    'video_essay': read_video_essay(os.path.join(essays_directory, 'Muscle_Building_Video_3_6.txt')),
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
            add_video(course_name=course, **video_data)

    print('Starting Project M Psychology population script...')

def add_video(course_name, video_title, video_subscription_type, video_series_name, 
              video_series, video_episode, video_icon, video_video, video_essay):
    v = Videos.objects.get_or_create(course_name=course_name, video_title=video_title)[0]
    v.video_subscription_type = video_subscription_type
    v.video_series_name = video_series_name
    v.video_series = video_series
    v.video_episode = video_episode
    v.video_icon = video_icon
    v.video_video = video_video
    v.video_essay = video_essay
    v.save()
    return v

def add_course(course_name, course_url, course_category, course_title, course_banner):
    c = Course.objects.get_or_create(course_name=course_name)[0]
    c.course_url=course_url
    c.course_category = course_category
    c.course_title = course_title
    c.course_banner = course_banner
    c.save()
    return c

# Start execution here!
if __name__ == '__main__':
    populate_course_psychology()
