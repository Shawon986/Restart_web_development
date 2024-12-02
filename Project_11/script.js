const firstInput = document.getElementById('first');
const secondInput = document.getElementById('second');

const Button = document.getElementById('compare');
const resultDisplay = document.getElementById('result');


function showResult(){
    const one = parseInt(firstInput.value);
    const two = parseInt(secondInput.value);

    if(one===two){
        resultDisplay.innerText = "2 numbers are same"
    }else if(one>two){
        resultDisplay.innerText = "Number 1 is greater than Number 2"
    }else{
        resultDisplay.innerText = "Number 2 is greater than Number 1"
    }
};


Button.addEventListener('click', showResult);