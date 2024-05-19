const markInput = document.getElementById("firstValue");
const calculateButton = document.getElementById("btns");
const displayGrade = document.getElementById("result");

let mark = '';
function calculate(){
    const mark = parseInt(markInput.value);
    if(mark <= 0 || mark >100){
        displayGrade.innerText = "Invalid mark"
        return;
    }else if (mark>=80 && mark<=100){
        displayGrade.innerText = "A+" 
    }else if (mark>=70 && mark<=79){
        displayGrade.innerText = "A" 
    }else if (mark>=60 && mark<=69){
        displayGrade.innerText = "A-" 
    }else if (mark>=50 && mark<=59){
        displayGrade.innerText = "B" 
    }else if (mark>=40 && mark<=49){
        displayGrade.innerText = "C" 
    }else if (mark>=33 && mark<=39){
        displayGrade.innerText = "D" 
    }else{
        displayGrade.innerText = "Fail"
    }
    
}

calculateButton.addEventListener('click',calculate);