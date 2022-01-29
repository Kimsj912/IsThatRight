from traceback import print_tb
from django.shortcuts import render
from .models import Game, QnaSet
# Create your views here.
# Main ---------------------------------------------------------------
def home_view(request):
    gameSet = Game.objects.all()
    return render(request, 'index.html')

# Show Game ------------------------------------------------------
def showGame(request):
    return render(request,'gamePage.html/')

# Create Game ------------------------------------------------------
# def selectGameType(request):
#     return render(request,'selectGameType.html/')
def createGame(request):
    if (request.method == 'POST') :
        # BASIC SET
        new_game = Game()
        new_game.title = request.POST['title']

        if(request.POST['selectQType']=='Qtext') :
            new_game.questionType = Game.QT
        else :
            new_game.questionType = Game.QI
        
        if(request.POST['selectAType']=='Atext') :
            new_game.answerType = Game.AT
        else :
            new_game.answerType = Game.AS
        new_game.save()

        print('게임아이디 : '+str(new_game.id))
        # QNA SET
        qnaCount = int(request.POST['qnaCount'])
        for qna in range(1,qnaCount+1):
            qnaSet = QnaSet()
            qnaSet.game_id = new_game
            
            if(new_game.questionType==Game.QT) :
                qnaSet.QText = request.POST['QText'+str(qna)]
            else :
                qnaSet.Qimage = request.POST['imageFile'+str(qna)]
            
            qnaSet.answer = request.POST['AText'+str(qna)]
            if(new_game.answerType==Game.AS) :
                qnaSet.answerList1 = request.POST['answerList'+str(qna)+'num1']
                qnaSet.answerList2 = request.POST['answerList'+str(qna)+'num2']
                qnaSet.answerList3 = request.POST['answerList'+str(qna)+'num3']
                qnaSet.answerList4 = request.POST['answerList'+str(qna)+'num4']
            qnaSet.save()

        gameset = Game.objects.all()
        return render(request, 'index.html', {'gameset':gameset})
    else :
        return render(request,'selectGameType.html/')