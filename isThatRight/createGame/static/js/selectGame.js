// constant -------------------------

// Dom Element -------------------------
const selectTypeInputs = document.querySelectorAll("input[name='selectType']");
const imageFileInputs =document.querySelectorAll(".textQuestion input[type='file']");
const addQnaBtn =document.querySelector(".addQnaButton");
const qnaTable = document.querySelector(".qnaTable")
// Variable --------------------------
let questionType = document.querySelector("input[name='selectQType']:checked").value.slice(1);
let AnswerType = document.querySelector("input[name='selectAType']:checked").value.slice(1);
let qnaCount = 1;

// initialize -------------------------
// game type
selectTypeInputs.forEach(radio => radio.addEventListener('click',function(){
    let selected = document.querySelector("input[name='selectType']:checked").value;
    makeGameParts.forEach(p=> p.classList.add('hidden'));
    makeGameParts[gameType.indexOf(selected)].classList.remove('hidden');
}));
imageFileInputs.forEach(uploader => uploader.addEventListener('change',function(e){
    const selectedLabel = document.querySelector(`.textQuestion label[for='${e.target.id}']`);
    selectedLabel.innerHTML = e.target.files[0].name;
}));
addQnaBtn.addEventListener("click",function(e){
    qnaCount++;
    addQna();
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



function addQna(){
    let retVal = "";
    retVal+=`<div class="qnaSet"><tr><th rowspan="2">${qnaCount}</th>`;
    if(questionType==='text'){
        retVal+=`<td class="textQuestion"><input type="text" class="w-100" placeholder="만들고자하는 문제 내용을 입력하세요."></td>`;
    } else if(questionType === 'image'){
        retVal+=`<td class="textQuestion">
        <div class="custom-file">
            <input type="file" name="imageFile" id="imageFile${qnaCount}">
            <label class="custom-file-label" for="imageFile${qnaCount}">이미지를 선택하세요</label>
        </div>
    </td>`;
    }
    retVal+=`</tr><tr>`;
    if(AnswerType==='text'){
        retVal+=`<td class="textAnswer"><input type="text" class="w-100" placeholder="정답을 입력하세요"></td>`;
    } else if(AnswerType === 'select'){
        retVal +=`<td class="selectAnswer">
        <div>
            <span id='1'>1</span>
            <input type="text" placeholder="정답을 입력하세요">
        </div>    
        <div>
            <span id='2'>2</span>
            <input type="text" placeholder="정답을 입력하세요">
        </div>
        <div>
            <span id='3'>3</span>
            <input type="text" placeholder="정답을 입력하세요">
        </div>
        <div>
            <span id='4'>4</span>
            <input type="text"placeholder="정답을 입력하세요">
        </div>
    </td>`;
    }
    retVal+=`</tr></div>`;
    qnaTable.innerHTML+=retVal;
}