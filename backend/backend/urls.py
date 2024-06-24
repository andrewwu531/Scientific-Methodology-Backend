from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers
from course_videos import views as course_videos_views
from member import views as member_views


router = routers.DefaultRouter()

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/courses/', course_videos_views.CourseListCreateView.as_view(), name="courses"),
    path('api/course/<str:course_url>/', course_videos_views.get_course_videos, name='get_course_videos'),
    path('api/faq/<str:course_url>/', course_videos_views.get_course_faqs, name='get_course_faqs'),
    path('api/login/', course_videos_views.login_view, name='login'),
    path('api/register/', course_videos_views.register_view, name='register'),
    path('api/logout/', course_videos_views.logout_view, name='logout'),

    path('api/members/', member_views.MemberListCreateView.as_view(), name='members-list'),
    path('api/members/<int:pk>/', member_views.MemberDetailView.as_view(), name='member-details'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
