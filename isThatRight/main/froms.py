from attr import field
from django import forms
from .models import  Game

class GameForm(forms.ModelForm) :
    class Meta :
        model = Game
        field = ['title', 'questionType', 'answerType' ] 