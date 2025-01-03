const firstValue = document.getElementById('valueOne');
const secondValue = document.getElementById('valueTwo');
const compareButton = document.getElementById('first');
const resultShow = document.getElementById('showResult');
const resetButton = document.getElementById('second');





function compare(){

    const number1 = parseInt(firstValue.value);
    const number2 = parseInt(secondValue.value);

    if(number1>number2){
        resultShow.innerText = 'Number one is greater than Number two';
    }else if(number1<number2){
        resultShow.innerText = 'Number two is greater than Number one';
    }else if(number1==number2){
        resultShow.innerText = 'Number one and Number one are equal';
    }

}

function reset(){
    firstValue.value = '';
    secondValue.value = '';
    resultShow.innerHTML= '';
}

resetButton.addEventListener('click', reset);

compareButton.addEventListener('click',compare);