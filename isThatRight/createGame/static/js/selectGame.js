// constant -------------------------
const gameType = ['tt','ts','it','is'];

// Dom Element -------------------------
const selectTypeInputs = document.querySelectorAll("input[name='selectType']");
const imageFileInputs =document.querySelectorAll(".textQuestion input[type='file']");
const gameCountSelector = document.querySelector("#gameCountSelector");
const addQnaBtn =document.querySelector(".addQnaButton");
// initialize -------------------------
// add game function
for(let i=1;i<=10;i++){
    let option = document.createElement(`option`);
    option.value = i;
    option.text =`${i}번`;
    gameCountSelector.appendChild(option);
}
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