from django.urls import path
from django.conf.urls.static import static
from Rtel import settings

from main import views

urlpatterns = [
    path('', views.index, name='index'),
]