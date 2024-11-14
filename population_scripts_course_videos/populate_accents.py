import os
import sys
from moviepy.editor import VideoFileClip

sys.path.append(os.path.abspath(os.path.join(__file__, *[os.pardir] * 2)))
os.environ['DJANGO_SETTINGS_MODULE'] = 'backend.settings'

import django
django.setup()

from course_videos.models import Course, Videos, FAQs

base_path = 'Accents'

# change 1) base_path 2) course_url & course_category & course_title 3) 2x title == populate_course_xx  4) populate phrases

def populate_course_accents():

    data = {
        'José Diaz': {
            'course_url': 'josé_diaz',
            'course_category': Course.Course_Category.FD,
            'course_title': 'Exploring Spanish Life & Culture through the Regional Cuisine',
            'course_descriptions': """Spanish Michelin-Starred Chef Showcases You the Local's Most-Loved
                                     Ingredients, Spices and Dishes""",
            'course_banner': f'{base_path}/Course_Banner/Muscle_Building_Course_Banner.jpg',
            'faqs': [
                {
                    'faq_question_num': '1',
                    'faq_question': 'Qualifications & Experience',
                    'faq_answer': """With a 1st class masters degree in Biology at the University of Glasgow, 
                                    I possessed the theoretical background in sport nutrition and mechanisms. 
                                    Throughout my 10 year professional career, I have trained over 10k bodybuilders 
                                    and athletics to achieve optimal sport performance.""",
                },
                {
                    'faq_question_num': '2',
                    'faq_question': 'Before & After Bodybuilding Transformations',
                    'faq_answer': """With over 10 year practical training experience, I have achieved
                                    remarkable results for all my clients acorss the globe. You can find the 
                                    success stories of my clients in weightlifting.co.uk.""",
                },
                {
                    'faq_question_num': '3',
                    'faq_question': 'How Easy Is The Diet?',
                    'faq_answer': """Our professional team has carefully designed the dieting and weightligting 
                                    programmes in a way that promotes long term sustainability in terms of taste, cost, 
                                    cooking time and complexity.""",
                },
                {
                    'faq_question_num': '4',
                    'faq_question': 'How This Programme Stands Out from Other Leading Courses?',
                    'faq_answer': """Our team has put significant effort to create a programme that is complete,
                                    accurate and easy to consume. We do not just tell you what to do. We present
                                    each nutrition and weightlifting concept in a way that contains and explains
                                    all the key information.""",
                },
                {
                    'faq_question_num': '5',
                    'faq_question': 'I Have A Question I Want To Ask',
                    'faq_answer': """If you would like to contact us regarding further questions or feedback,
                                    please get in touch with us through the Customer Support channel in the website.""",
                },
            ],
            'videos': [
                {
                    'video_title': 'Qualifications & Professional Career',
                    'video_subscription_type': Videos.Video_Subscription_Type.FREE,
                    'video_series_name': 'Introduction',
                    'video_series': '1',
                    'video_episode': '1',
                    'video_icon': f'{base_path}/Video_Icon/Muscle_Building_Video_Icon_1_1.jpg',
                    'video_video': f'{base_path}/Video_Video/Muscle_Building_Video_Video_1_1.mp4',
                },
                {
                    'video_title': 'Before & After Bodybuilding Transformations',
                    'video_subscription_type': Videos.Video_Subscription_Type.FREE,
                    'video_series_name': 'Introduction',
                    'video_series': '1',
                    'video_episode': '2',
                    'video_icon': f'{base_path}/Video_Icon/Muscle_Building_Video_Icon_1_2.jpg',
                    'video_video': f'{base_path}/Video_Video/Muscle_Building_Video_Video_1_2.mp4',
                },
                {
                    'video_title': 'How Easy Is The Diet',
                    'video_subscription_type': Videos.Video_Subscription_Type.FREE,
                    'video_series_name': 'Introduction',
                    'video_series': '1',
                    'video_episode': '3',
                    'video_icon': f'{base_path}/Video_Icon/Muscle_Building_Video_Icon_1_3.jpg',
                    'video_video': f'{base_path}/Video_Video/Muscle_Building_Video_Video_1_3.mp4',
                },
                {
                    'video_title': 'How This Programme Stands Out From Other Leading Courses',
                    'video_subscription_type': Videos.Video_Subscription_Type.FREE,
                    'video_series_name': 'Introduction',
                    'video_series': '1',
                    'video_episode': '4',
                    'video_icon': f'{base_path}/Video_Icon/Muscle_Building_Video_Icon_1_4.jpg',
                    'video_video': f'{base_path}/Video_Video/Muscle_Building_Video_Video_1_4.mp4',
                },
                {
                    'video_title': 'Social Media',
                    'video_subscription_type': Videos.Video_Subscription_Type.FREE,
                    'video_series_name': 'Introduction',
                    'video_series': '1',
                    'video_episode': '5',
                    'video_icon': f'{base_path}/Video_Icon/Muscle_Building_Video_Icon_1_5.jpg',
                    'video_video': f'{base_path}/Video_Video/Muscle_Building_Video_Video_1_5.mp4',
                },
                {
                    'video_title': 'Bodybuilding is 80% diet and 20% workout',
                    'video_subscription_type': Videos.Video_Subscription_Type.FREE,
                    'video_series_name': 'Nutrition Theory',
                    'video_series': '2',
                    'video_episode': '1',
                    'video_icon': f'{base_path}/Video_Icon/Muscle_Building_Video_Icon_2_1.jpg',
                    'video_video': f'{base_path}/Video_Video/Muscle_Building_Video_Video_2_1.mp4',
                },
                {
                    'video_title': 'Why the medium calories, medium carbs, low fat and high protein diet',
                    'video_subscription_type': Videos.Video_Subscription_Type.BASIC,
                    'video_series_name': 'Nutrition Theory',
                    'video_series': '2',
                    'video_episode': '2',
                    'video_icon': f'{base_path}/Video_Icon/Muscle_Building_Video_Icon_2_2.jpg',
                    'video_video': f'{base_path}/Video_Video/Muscle_Building_Video_Video_2_2.mp4',
                },
                {
                    'video_title': 'Calculating your personalised recommended calories, protein, carbohydrates and fat intake',
                    'video_subscription_type': Videos.Video_Subscription_Type.BASIC,
                    'video_series_name': 'Nutrition Theory',
                    'video_series': '2',
                    'video_episode': '3',
                    'video_icon': f'{base_path}/Video_Icon/Muscle_Building_Video_Icon_2_3.jpg',
                    'video_video': f'{base_path}/Video_Video/Muscle_Building_Video_Video_2_3.mp4',
                },
                {
                    'video_title': 'The importance of food choices: meat, pasta, veg, sauce and oil',
                    'video_subscription_type': Videos.Video_Subscription_Type.BASIC,
                    'video_series_name': 'Nutrition Theory',
                    'video_series': '2',
                    'video_episode': '4',
                    'video_icon': f'{base_path}/Video_Icon/Muscle_Building_Video_Icon_2_4.jpg',
                    'video_video': f'{base_path}/Video_Video/Muscle_Building_Video_Video_2_4.mp4',
                },
                {
                    'video_title': 'Carb cycling & the front-heavy approach dieting',
                    'video_subscription_type': Videos.Video_Subscription_Type.BASIC,
                    'video_series_name': 'Nutrition Theory',
                    'video_series': '2',
                    'video_episode': '5',
                    'video_icon': f'{base_path}/Video_Icon/Muscle_Building_Video_Icon_2_5.jpg',
                    'video_video': f'{base_path}/Video_Video/Muscle_Building_Video_Video_2_5.mp4',
                },
                {
                    'video_title': 'Sarcoplasmic vs Myofibrillar Hypertrophy',
                    'video_subscription_type': Videos.Video_Subscription_Type.BASIC,
                    'video_series_name': 'Weightlifting Mechanisms',
                    'video_series': '3',
                    'video_episode': '1',
                    'video_icon': f'{base_path}/Video_Icon/Muscle_Building_Video_Icon_3_1.jpg',
                    'video_video': f'{base_path}/Video_Video/Muscle_Building_Video_Video_3_1.mp4',
                },
                {
                    'video_title': 'Powerlifting vs Bodybuilding',
                    'video_subscription_type': Videos.Video_Subscription_Type.BASIC,
                    'video_series_name': 'Weightlifting Mechanisms',
                    'video_series': '3',
                    'video_episode': '2',
                    'video_icon': f'{base_path}/Video_Icon/Muscle_Building_Video_Icon_3_2.jpg',
                    'video_video': f'{base_path}/Video_Video/Muscle_Building_Video_Video_3_2.mp4',
                },
                {
                    'video_title': 'Tempo: The Concentric & Eccentric Motions',
                    'video_subscription_type': Videos.Video_Subscription_Type.BASIC,
                    'video_series_name': 'Weightlifting Mechanisms',
                    'video_series': '3',
                    'video_episode': '3',
                    'video_icon': f'{base_path}/Video_Icon/Muscle_Building_Video_Icon_3_3.jpg',
                    'video_video': f'{base_path}/Video_Video/Muscle_Building_Video_Video_3_3.mp4',
                },
                {
                    'video_title': 'The Range of Motion',
                    'video_subscription_type': Videos.Video_Subscription_Type.BASIC,
                    'video_series_name': 'Weightlifting Mechanisms',
                    'video_series': '3',
                    'video_episode': '4',
                    'video_icon': f'{base_path}/Video_Icon/Muscle_Building_Video_Icon_3_4.jpg',
                    'video_video': f'{base_path}/Video_Video/Muscle_Building_Video_Video_3_4.mp4',
                },
                {
                    'video_title': 'Other Weightlifting Techniques',
                    'video_subscription_type': Videos.Video_Subscription_Type.BASIC,
                    'video_series_name': 'Weightlifting Mechanisms',
                    'video_series': '3',
                    'video_episode': '5',
                    'video_icon': f'{base_path}/Video_Icon/Muscle_Building_Video_Icon_3_5.jpg',
                    'video_video': f'{base_path}/Video_Video/Muscle_Building_Video_Video_3_5.mp4',
                },
                {
                    'video_title': 'A Sample Workout Drill',
                    'video_subscription_type': Videos.Video_Subscription_Type.BASIC,
                    'video_series_name': 'Weightlifting Mechanisms',
                    'video_series': '3',
                    'video_episode': '6',
                    'video_icon': f'{base_path}/Video_Icon/Muscle_Building_Video_Icon_3_6.jpg',
                    'video_video': f'{base_path}/Video_Video/Muscle_Building_Video_Video_3_6.mp4',
                }
            ]
        }
    }

    for course_author, course_data in data.items():
        course = add_course(
            course_author=course_author,
            course_url=course_data['course_url'],
            course_category=course_data['course_category'],
            course_title=course_data['course_title'],
            course_descriptions=course_data['course_descriptions'],
            course_banner=course_data['course_banner']
        )
        for video_data in course_data['videos']:
            add_video(course_url=course, **video_data)
        
        for faq_data in course_data['faqs']:
            add_faq(course_url=course, **faq_data)

    print('Completed Accents population script...')

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
    video_path = os.path.join(base_dir, 'Scientific-Methodology-Backend', 'static', 'media', video_video)
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

def add_faq(course_url, faq_question_num, faq_question, faq_answer):
    f = FAQs.objects.get_or_create(course_url=course_url, faq_question=faq_question)[0]
    f.faq_question_num = faq_question_num
    f.faq_answer = faq_answer
    f.save()
    return f


def add_course(course_author, course_url, course_category, course_title, course_descriptions, course_banner):
    c = Course.objects.get_or_create(course_url=course_url)[0]
    c.course_author = course_author
    c.course_category = course_category
    c.course_title = course_title
    c.course_descriptions = course_descriptions
    c.course_banner = course_banner
    c.save()
    return c

# Start execution here!
if __name__ == '__main__':
    populate_course_accents()
