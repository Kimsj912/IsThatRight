from django.shortcuts import render

# Create your views here.
def selectGameType(request):
    return render(request,'selectGameType.html/')

def makeTTGame(request):
    return render(request,'makeTTgame.html/')

def makeITgame(request):
    return render(request,'makeITgame.html/')

def makeISgame(request):
    return render(request,'makeISgame.html/')

def makeTSgame(request):
    return render(request,'makeTSgame.html/')