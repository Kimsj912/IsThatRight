const questionBoxes = document.querySelectorAll(".qnaSetBox");
const buttonBucket = document.querySelectorAll(".buttonBucket");

// initialize 
questionBoxes.forEach(box =>{
    const prevButton = box.querySelector('.prevButton');
    const nextButton = box.querySelector('.nextButton');
    const submitButton = box.querySelector('.submitButton');

    if(prevButton!==null) prevButton.addEventListener('click', prevBtnClicked);
    if (nextButton!==null) nextButton.addEventListener('click', nextBtnClicked)
    if (submitButton!==null) submitButton.addEventListener('click', submitBtnClicked)

    if(box!==questionBoxes[0]) box.classList.add('hidden');
})

// Variable
let page = 0;

// event functions
function btnClicked(qname, num){
    const qlabels = document.querySelectorAll(`label[for^='${qname}_']`);
    qlabels.forEach(ql => {
        ql.classList.remove('checkedBtn');
    });
    selected = document.querySelector(`label[for='${qname}_${num}']`);
    selected.classList.add("checkedBtn");
}
function prevBtnClicked(e){
    questionBoxes[page].classList.add('hidden');
    questionBoxes[--page].classList.remove('hidden');
}
function nextBtnClicked(e){
    questionBoxes[page].classList.add('hidden');
    questionBoxes[++page].classList.remove('hidden');
}
function submitBtnClicked(e){
    alert("제출한다!");
    // 체점하기
    let ansCount = 0; // 맞은 개수
    for(idx=0;idx<questionBoxes.length;idx++){
        const box = questionBoxes[idx];
        const inputs = box.querySelectorAll(`input[name='q${idx+1}']`);
        const aib = box.querySelector(".answerInnerBox");
        let ans = aib.getAttribute('value');

        if(inputs.length===1) {
            console.log(inputs[0].value);
            console.log(ans);
            console.log(inputs[0].value==ans);
            if(inputs[0].value==ans) ansCount++;
        } else{
            for(inner = 0;inner<4;inner++){
                if(inputs[inner].checked){
                    if(inner+1 ===  Number(ans)) ansCount++;
                }
            }
        }
    }
    
    // 문제 모습 삭제
    questionBoxes[page].classList.add("hidden");
    // 체점 결과 표시
    const answerCountDisplay = document.querySelector(".answerCount");
    answerCountDisplay.innerHTML = ansCount;

    const resultPage = document.querySelector(".resultPage");
    resultPage.classList.remove("hidden");
}