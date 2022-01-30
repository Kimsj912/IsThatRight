from traceback import print_tb
from django.shortcuts import get_object_or_404, render
from .models import Game, QnaSet
# Create your views here.
# Main ---------------------------------------------------------------
def home_view(request):
    gameSet = Game.objects.all()
    return render(request, 'index.html',{'gameset':gameSet})

# Show Game ------------------------------------------------------
def showGame(request, game_id):
    selected_gameInfo = get_object_or_404(Game, pk=game_id)
    related_qnaSet = QnaSet.objects.filter(game_id=game_id)
    # qnaSet = []
    # for qna in related_qnaSet :
    #     miniset = {qna.game_id, {}}
    #     for i in range(1,5):
    #         qnaSet[2].insert(qna)

    return render(request,'gamePage.html', {'gameInfo':selected_gameInfo, 'qnaSet':related_qnaSet})

# Create Game ------------------------------------------------------
# def selectGameType(request):
#     return render(request,'selectGameType.html/')
def createGame(request):
    if (request.method == 'POST') :
        # BASIC SET
        new_game = Game()
        new_game.title = request.POST['title']

        new_game.questionType = Game.QT if request.POST['selectQType']=='Qtext' else Game.QI
        new_game.answerType = Game.AT if request.POST['selectAType']=='Atext' else Game.AS
        new_game.save()

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

        gameSet = Game.objects.all()
        return render(request, 'index.html', {'gameset':gameSet})
    else :
        return render(request,'selectGameType.html/')