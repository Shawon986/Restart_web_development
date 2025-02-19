const firstInput = document.getElementById('inputOne');
const displayGrade = document.getElementById('resultDisplay');
const calculateButton = document.getElementById('compare');
const resetButton = document.getElementById("reset");

function isValid(){
    if(!firstInput.value){
        alert("Mark cannot be empty")
        return false;
    }
    return true;
    
}

calculateButton.addEventListener('click', function(){

    if(!isValid()){
        return;
    }
    const inputValue = parseFloat(firstInput.value);

    if(inputValue<=0 || inputValue>100){
        displayGrade.innerText = "Enter valid number"
    }else if(inputValue>=80 && inputValue<=100){
        displayGrade.innerText = "Your grade is A+"
    }else if(inputValue>=70 && inputValue<=80){
        displayGrade.innerText = "Your grade is A"
    }else if(inputValue>=60 && inputValue<=70){
        displayGrade.innerText = "Your grade is A-"
    }else if(inputValue>=50 && inputValue<=60){
        displayGrade.innerText = "Your grade is B"
    }else if(inputValue>=40 && inputValue<=50){
        displayGrade.innerText = "Your grade is C"
    }else if(inputValue>=33 && inputValue<=40){
        displayGrade.innerText = "Your grade is D"
    }else{
        displayGrade.innerText = "You are Fail"
    }
})


resetButton.addEventListener('click', function(){
    firstInput.value = '';
    displayGrade.innerText = '';
})