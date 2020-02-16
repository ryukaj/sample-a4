"""a4-portal URL Configuration
"""
from django.urls import path
from . import views

app_name = 'portal'

urlpatterns = [
    path('', views.index, name='index'),
    path('policy/', views.policy, name='policy')
]   