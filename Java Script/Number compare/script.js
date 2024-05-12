const firstInput = document.getElementById("firstValue");
const secondInput = document.getElementById("secondValue");
const compareButton = document.getElementById("btns");
const resultPlace = document.getElementById("result");


function compare(){
    const number1 = parseInt( firstInput.value);
    const number2 = parseInt(secondInput.value);

    if (number1 === number2){
        resultPlace.innerText = "First and Second number is equal";
        
    }else if (number1>number2){
        resultPlace.innerText = "First number is greater than second number";
    }else{
        resultPlace.innerText = "First number is less than second number";
    }
    
}

compareButton.addEventListener('click',compare);