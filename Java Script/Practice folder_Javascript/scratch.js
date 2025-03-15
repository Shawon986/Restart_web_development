const inputOne = document.getElementById('number');
const bnuttonOne = document.getElementById('reset');
const buttonTwo = document.getElementById('calculate');
const display = document.getElementById('display');




bnuttonOne.addEventListener('click',reset);

function reset(){
    inputOne.value = '';
    display.innerText = '';
};








