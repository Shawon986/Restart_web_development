const firstInput = document.getElementById("firstValue");
const secondInput = document.getElementById("secondValue");
const compareButton = document.getElementById("btns");
const resultPlace = document.getElementById("result");


function compare(){
    const number1 = parseInt( firstInput.value);
    const number2 = parseInt(secondInput.value);

    if (number1 === number2){
        resultPlace.innerHTML = "First and Second number is equal";
        
    }else{
        resultPlace.innerHTML = "First and Second number is not equal";
    }
    
}

compareButton.addEventListener('click',compare);