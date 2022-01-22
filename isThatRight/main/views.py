from django.shortcuts import render

# Create your views here.
# Main ---------------------------------------------------------------
def home_view(request):
    return render(request, 'index.html')

# Create Game ------------------------------------------------------
def selectGameType(request):
    return render(request,'selectGameType.html/')

# Show Game ------------------------------------------------------
def showGame(request):
    return render(request,'gamePage.html/')