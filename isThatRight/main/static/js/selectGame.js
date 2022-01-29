// constant -------------------------

// Dom Element -------------------------
const selectTypeInputs = document.querySelectorAll("input[name='selectType']");
const imageFileInputs =document.querySelectorAll(".QimageFile");
const addQnaBtn =document.querySelector(".addQnaButton");
const qnaTable = document.querySelector(".qnaTable")
const qnaCounter = document.querySelector("input[name=qnaCount]")
// Variable --------------------------
let questionType = document.querySelector("input[name='selectQType']:checked").value.slice(1);
let AnswerType = document.querySelector("input[name='selectAType']:checked").value.slice(1);
let qnaCount = 1;

// initialize -------------------------
addQna();

// game type
selectTypeInputs.forEach(radio => radio.addEventListener('click',function(){
    let selected = document.querySelector("input[name='selectType']:checked").value;
    makeGameParts.forEach(p=> p.classList.add('hidden'));
    makeGameParts[gameType.indexOf(selected)].classList.remove('hidden');
}));
addQnaBtn.addEventListener("click",function(e){
    if(qnaCount==20) alert("더이상 항목을 추가할 수 없습니다.");
    else{
        qnaCount++;
        addQna();
    }   
});
document.querySelectorAll('.selectTypeRadio').forEach((elem) => {
    elem.addEventListener("change", function(event) {
        var item = event.target.value;
        console.log(item[0]);


        if(item[0]==='Q'){
            questionType = item.slice(1);
        } else {
            AnswerType = item.slice(1);
        }

        // set qnaTable
        // reinitailize qnaTable data
        qnaTable.innerHTML ="";
        qnaCount = 1;

        addQna();

        console.log(questionType , AnswerType);
    });
});

// functions ---------------------------------
function imageNamePreviewer(self){
    const selectedLabel = document.querySelector(`label[for='${self.id}']`);
    selectedLabel.innerHTML = self.files[0].name;
}
function addQna(){
    let retVal = "";
    retVal+=`<div class="qnaSet"><tr><th rowspan="2">${qnaCount}</th>`;
    if(questionType==='text'){
        retVal+=`<td class="textQuestion"><input name="QText${qnaCount}" type="text" class="w-100" placeholder="만들고자하는 문제 내용을 입력하세요."></td>`;
    } else if(questionType === 'image'){
        retVal+=`<td class="textQuestion">
        <div class="custom-file">
            <input type="file" name="imageFile${qnaCount}" id="imageFile${qnaCount}" class="QimageFile" onchange="imageNamePreviewer(this)">
            <label class="custom-file-label" for="imageFile${qnaCount}">이미지를 선택하세요</label>
        </div>
    </td>`;
    }
    retVal+=`</tr><tr>`;
    if(AnswerType==='text'){
        retVal+=`<td class="textAnswer"><input name="AText${qnaCount}" type="text" class="w-100" placeholder="정답을 입력하세요"></td>`;
    } else if(AnswerType === 'select'){
        retVal +=`<td class="selectAnswer">
        <div>
        <span id='answer'>정답 </span>
        <input name="AText${qnaCount}" type="text" placeholder="정답을 입력하세요">
        </div>
        <div>
            <span id='num1'>1</span>
            <input name="answerList${qnaCount}num1" type="text" placeholder="정답을 입력하세요">
        </div>    
        <div>
            <span id='num2'>2</span>
            <input name="answerList${qnaCount}num2" type="text" placeholder="정답을 입력하세요">
        </div>
        <div>
            <span id='num3'>3</span>
            <input name="answerList${qnaCount}num3" type="text" placeholder="정답을 입력하세요">
        </div>
        <div>
            <span id='num4'>4</span>
            <input name="answerList${qnaCount}num4" type="text" placeholder="정답을 입력하세요">
        </div>
    </td>`;
    }
    retVal+=`</tr></div>`;
    qnaTable.innerHTML+=retVal;
    qnaCounter.value=qnaCount;
}