from django.urls import path

from . import views

urlpatterns = [
    path('makeTTGame/', views.makeTTgame, name='createGame'),
]