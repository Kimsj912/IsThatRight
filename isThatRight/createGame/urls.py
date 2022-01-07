from django.urls import path

from . import views

urlpatterns = [
    path('', views.selectGameType, name='selectGameType'),
    path('makeTTGame/', views.makeTTGame, name='makeTTGame'),
    path('makeeITGame/', views.makeITgame, name='makeITGame'),
    path('makeISGame/', views.makeISgame, name='makeISGame'),
    path('makeTSGame/', views.makeTSgame, name='makeTSGame'),
]