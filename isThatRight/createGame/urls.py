from django.urls import path

from . import views

urlpatterns = [
    path('', views.selectGameType, name='selectGameType'),
]