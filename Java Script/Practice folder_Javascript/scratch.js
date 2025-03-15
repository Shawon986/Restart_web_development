const inputOne = document.getElementById('num1');
const inputTwo = document.getElementById('num2');
const bnuttonOne = document.getElementById('reset');
const buttonTwo = document.getElementById('compare');
const display = document.getElementById('display');


buttonTwo.addEventListener('click',compare);

function compare(){
    const num1 = parseInt(inputOne.value);
    const num2 = parseInt(inputTwo.value);

    if(num1 > num2){
        display.innerText = `${num1} is greater than ${num2}`;
    }if(num1 < num2){
        display.innerText = `${num1} is less than ${num2}`;
    }if(num1 === num2){
        display.innerText = `${num1} is equal to ${num2}`;
    }
    

};

bnuttonOne.addEventListener('click',reset);

function reset(){
    inputOne.value = '';
    inputTwo.value = '';
    display.innerText = '';
};








