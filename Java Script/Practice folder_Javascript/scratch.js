const inputOne = document.getElementById('number');
const bnuttonOne = document.getElementById('reset');
const buttonTwo = document.getElementById('calculate');
const display = document.getElementById('display');




buttonTwo.addEventListener('click', calculate);

function calculate() {
    const number = parseInt(inputOne.value);
    if(!number){
        alert('Please enter a valid number');
        return;
    }
    if(number<0 || number>100) {
        display.innerText = 'Invalid number';
        
    }else if(number>=80){
        display.innerText = 'A+';
    }else if(number>=70){
        display.innerText = 'A';
    }else if(number>=60){
        display.innerText = 'A-';   
    }else if(number>=50){
        display.innerText = 'B';
    }else if(number>=40){
        display.innerText = 'C';
    }else if(number>=33){
        display.innerText = 'D';
    }else{
        display.innerText = 'F';
    }
};


bnuttonOne.addEventListener('click', reset);

function reset() {
    display.innerText = '';
    inputOne.value = '';
}








