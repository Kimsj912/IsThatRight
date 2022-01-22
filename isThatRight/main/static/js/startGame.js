const questionBoxes = document.querySelectorAll(".qnaSetBox");

// initialize 
questionBoxes.forEach(box =>{
    const prevButton = box.querySelector('.prevButton');
    const nextButton = box.querySelector('.nextButton');

    if(prevButton===null && nextButton===null){
        box.querySelector(".firstButton").addEventListener('click',nextBtnClicked);
    }else{
        prevButton.addEventListener('click',prevBtnClicked);
        nextButton!==null ? nextButton.addEventListener('click',nextBtnClicked)
        : box.querySelector(".submitButton").addEventListener('click',submitBtnClicked);
    }

    if(box!==questionBoxes[0]) box.classList.add('hidden');
})

// Variable
let page = 0;

// event functions
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
}