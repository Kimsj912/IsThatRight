from django.shortcuts import render

# Create your views here.
def showGame(request):
    return render(request,'gamePage.html/')