from django.urls import path

from . import views

urlpatterns = [
    path('', views.home_view, name='home'),
    path('showGame/', views.showGame, name='showGame'),
    path('createGame/', views.selectGameType, name='selectGameType'),

]