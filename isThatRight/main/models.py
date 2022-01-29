from django.db import models
# Create your models here.
class Game(models.Model) :
    # Declaration
    QT = 'QT'
    QI = 'QI'
    AT = 'AT'
    AS = 'AS'

    QuestionChoices = [ (QT,'text') , (QI,'image')]
    AnswerChoices = [(AT,'text') , (AS, 'select')]

    # Attributes
    id = models.BigAutoField(help_text="Game ID", primary_key=True)
    title = models.CharField(max_length=100, default="", blank=False)
    questionType = models.CharField( 
        max_length = 2,
        choices =QuestionChoices,
        default=QT,
    )
    answerType  = models.CharField(
        max_length = 2, 
        choices = AnswerChoices,
        default=AT,
    )

    def __str__(self):
        return self.title

class QnaSet(models.Model) :
    id = models.BigAutoField(help_text="qnaSet ID", primary_key=True)
    game_id = models.ForeignKey("Game", related_name="game", on_delete=models.CASCADE, db_column="game_id")
    QText = models.TextField(blank=True, null=True)
    Qimage = models.ImageField(blank = True, null=True, upload_to='question/%Y/%m/%d')
    answer = models.TextField(blank=True)

    answerList1 = models.TextField(blank=True, default="")
    answerList2 = models.TextField(blank=True, default="")
    answerList3 = models.TextField(blank=True, default="")
    answerList4 = models.TextField(blank=True, default="")

    def __str__(self):
        return str(self.game_id)+"의 질문셋 "+str(self.id)
