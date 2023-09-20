from django.urls import path, include

from main.api import views

urlpatterns = [
    path('applications/add/', views.add),
]