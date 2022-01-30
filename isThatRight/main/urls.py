from django.urls import path

from . import views

urlpatterns = [
    path('', views.home_view, name='home'),
    path('showGame/<int:game_id>', views.showGame, name='showGame'),
    path('createGame/', views.createGame, name='createGame'),

]