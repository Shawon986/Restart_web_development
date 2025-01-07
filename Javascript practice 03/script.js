const inputValue = document.getElementById('valueOne');
const calculateButton = document.getElementById('first');
const resetButton = document.getElementById('second');
const displayResult = document.getElementById('showResult');


calculateButton.addEventListener('click',function(){
    
    
    if (inputValue.value <=0 || inputValue.value >100 ){
        displayResult.innerText='Invalid number';
        return;
    }
    
    const mark = parseFloat(inputValue.value);
    
    const number = calculate(mark);

    displayResult.innerText = number;
    
} );

function calculate(mark){
    
    if (mark>=80 && mark<=100){
        return 'A+';
    } if(mark>=70 && mark<=79){
        return 'A';
    } if(mark>=60 && mark<=69){
        return 'A-';
    } if(mark>=50 && mark<=59){
        return 'B';
    } if(mark>=40 && mark<=49){
        return 'C';
    } return 'Fail';

}




resetButton.addEventListener('click', function(){
    inputValue.value = 0;
    displayResult.innerText = '';
})