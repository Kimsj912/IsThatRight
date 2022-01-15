from django.urls import path

from . import views

urlpatterns = [
    path('', views.showGame, name='showGame'),
]