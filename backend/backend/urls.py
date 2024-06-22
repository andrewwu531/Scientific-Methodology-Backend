from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers
from course_videos import views as course_videos_views
from member import views as member_views

router = routers.DefaultRouter()
router.register(r'member', member_views.MemberView, 'member')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/courses/', course_videos_views.CourseListCreateView.as_view(), name="courses"),
    path('api/<str:course_url>/', course_videos_views.get_course_videos, name='get_course_videos'),
    path('api/faq/<str:course_url>/', course_videos_views.get_course_faqs, name='get_course_faqs'),
    path('api/login/', course_videos_views.login_view, name='login'),
    path('api/register/', course_videos_views.register_view, name='register'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
