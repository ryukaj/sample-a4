"""a4-user_create URL Configuration
"""
from django.urls import path
from . import views

app_name = 'user_create'

urlpatterns = [
    path('signup/', views.signup, name='signup'),
    path('confirm/', views.confirm, name='confirm')
]   