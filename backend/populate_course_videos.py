import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

import django
django.setup()

from course_videos.models import Course, Videos

def populate():
    
    # Create two courses
    course1 = add_course(
        course_name='Muscle Building', 
        course_category=Course.Course_Category.HL, 
        course_title='The Science of Shredded Muscle Building',  
        course_banner='Muscle_Building/Course_Banner/Muscle_Building_Course_Banner_1.jpg'
    )

    course2 = add_course(
        course_name='Weight Loss', 
        course_category=Course.Course_Category.ALL, 
        course_title='The Science of Sustainable Weight Loss', 
        course_banner='Muscle_Building/Course_Banner/Muscle_Building_Course_Banner_1.jpg'
    )

    # Create two videos for each course
    add_video(
        course_name=course1,
        video_title='Bodybuilding is 80%% diet and 20% workout', 
        video_subscription_type=Videos.Video_Subscription_Type.FREE, 
        video_series_name='Nutrition Theory',
        video_series='1', 
        video_episode='1', 
        video_icon='Muscle_Building/Video_Icon/Muscle_Building_Video_Icon_2.jpg', 
        video_video='Muscle_Building/Video_Video/Muscle_Building_Video_Video_1.mp4', 
        video_essay='Hi all!'
    )

    add_video(
        course_name=course1,
        video_title='Why the medium calories, medium carbs, low fat and high protein diet', 
        video_subscription_type=Videos.Video_Subscription_Type.FREE, 
        video_series_name='Nutrition Theory',
        video_series='1', 
        video_episode='2', 
        video_icon='Muscle_Building/Video_Icon/Muscle_Building_Video_Icon_3.jpg', 
        video_video='Muscle_Building/Video_Video/Muscle_Building_Video_Video_2.mp4', 
        video_essay='Welcome to the workout series!'
    )

    add_video(
        course_name=course2,
        video_title='The Weight Loss Macronutrient Calculation', 
        video_subscription_type=Videos.Video_Subscription_Type.FREE, 
        video_series_name='Nutrition Theory',
        video_series='1', 
        video_episode='1', 
        video_icon='Muscle_Building/Video_Icon/Muscle_Building_Video_Icon_3.jpg', 
        video_video='Muscle_Building/Video_Video/Muscle_Building_Video_Video_2.mp4', 
        video_essay='Welcome to the workout series!'
    )

    print('Courses and Videos populated successfully!')

def add_video(course_name, video_title, video_subscription_type, video_series_name, 
              video_series, video_episode, video_icon,  video_video,  video_essay):
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

def add_course(course_name, course_category, course_title, course_banner):
    c = Course.objects.get_or_create(course_name=course_name)[0]
    c.course_category = course_category
    c.course_title = course_title
    c.course_banner = course_banner
    c.save()  
    return c

# Start execution here!
if __name__ == '__main__':
    print('Starting Project M population script...')
    populate()
    
    # import os
# os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

# import django
# django.setup()

# from course_videos.models import Course, Videos


# def populate():
    
#     course_title = ['Academics_Language_Learning', 'Health & Lifestyle'
#                         'Social & Entertainment', 'Career & Finance' ]
    
#     video_subscription_type = ['Free' ,'Basic', 'Premium', 'One Off']


#     course_mb = add_course(course_name='Muscle Building', 
#                             course_category='Health & Lifestyle', 
#                             course_title=course_title[0], 
#                             course_banner='Course_Banner/Muscle_Building_Course_Banner_1.jpg')

#     add_video(course_name=course_mb,
#         video_title='Bodybuilding is 80%% diet and 20% workout', 
#         video_subscription_type=video_subscription_type[0], 
#         video_series_name='Nutrition Theory',
#         video_series='1', 
#         video_episode='1', 
#         video_icon='Muscle_Building/Video_Icon/Muscle_Building_Video_Icon_2.jpg', 
#         video_video='Muscle_Building/Video_Video/Muscle_Building_Video_Video_1.mp4', 
#         video_essay='Hi all!')

#     # add_video(course_name=course_mb,
#     #     title='How to Think like a Computer Scientist',
#     #     url='http://www.greenteapress.com/thinkpython/')

#     # add_video(course_name=course_mb,
#     #     title='Learn Python in 10 Minutes',
#     #     url='http://www.korokithakis.net/tutorials/python/')

#     # django_cat = add_course('Django')

#     # add_page(cat=django_cat,
#     #     title='Official Django Tutorial',
#     #     url='https://docs.djangoproject.com/en/1.5/intro/tutorial01/')


#     # Print out what we have added to the user.
#     # for c in Course.objects.all():
#     #     for v in Videos.objects.filter(course_name=c):
#     #         print(f'- {0} - {1}'.format(str(c), str(v)))


# def add_video(course_name, video_title, video_subscription_type, video_series_name, 
#               video_series, video_episode, video_icon,  video_video,  video_essay):
    
#     v = Videos.objects.get_or_create(course_name=course_name, video_title=video_title)[0]
#     v.video_subscription_type=video_subscription_type
#     v.video_series_name=video_series_name
#     v.video_series=video_series
#     v.video_episode=video_episode
#     v.video_icon=video_icon
#     v.video_video=video_video
#     v.video_essay=video_essay
#     v.save()
#     return v

# def add_course(course_name, course_category, course_title, course_banner):
#     c = Course.objects.get_or_create(course_name=course_name)[0]
#     c.course_category=course_category
#     c.course_title=course_title
#     c.course_banner=course_banner
#     return c

# # Start execution here!
# if __name__ == '__main__':
#     print('Starting Project M population script...')
#     populate()