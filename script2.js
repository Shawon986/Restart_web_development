const firstInput = document.getElementById("firstValue");
const secondInput = document.getElementById("secondValue");

const button = document.getElementById("btns");
const resultDisplay = document.getElementById("result");


function compare(){
    const first = parseInt(firstInput.value);
    const second = parseInt(secondInput.value);
    if(first===second){
        resultDisplay.innerText = "1st number and 2nd number is equal"
    }else if(first>second){
    resultDisplay.innerText = "1st number is greater than 2nd number"
    }else{
        resultDisplay.innerText = "1st number is less than 2nd number"
    }

}

button.addEventListener('click',compare);
