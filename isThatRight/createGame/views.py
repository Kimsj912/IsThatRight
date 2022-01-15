from django.shortcuts import render

# Create your views here.
def selectGameType(request):
    return render(request,'selectGameType.html/')