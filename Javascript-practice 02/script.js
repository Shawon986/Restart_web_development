const firstValue = document.getElementById('valueOne');
const secondValue = document.getElementById('valueTwo');
const compareButton = document.getElementById('first');
const resultShow = document.getElementById('showResult');
const resetButton = document.getElementById('second');

const ErrorStyle = "border:2px solid red";

function resetErrorStyle(){
    firstValue.style ="";
    secondValue.style = "";
}

function isValid(){

    resetErrorStyle();

    if(!firstValue.value){
        alert ('Enter a number at first input');
        firstValue.style = ErrorStyle;
        return false;
    }else if(!secondValue.value){
        alert ('Enter a number at second input');
        secondValue.style = ErrorStyle;
        return false;
    }
    return true;
}



compareButton.addEventListener('click',function compare(){

    if(!isValid()){
        return;
    }
    const number1 = parseInt(firstValue.value);
    const number2 = parseInt(secondValue.value);

    if(number1>number2){
        resultShow.innerText = 'Number one is greater than Number two';
    }else if(number1<number2){
        resultShow.innerText = 'Number two is greater than Number one';
    }else if(number1==number2){
        resultShow.innerText = 'Number one and Number two are equal';
    }

});


resetButton.addEventListener('click', function reset(){
    firstValue.value = 0;
    secondValue.value = 0;
    resultShow.innerHTML= '';
    resetErrorStyle();
});
