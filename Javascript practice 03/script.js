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
    if(mark>=80 && mark<=100){
        displayResult.innerText = 'A+';
    } else if(mark>=70 && mark<=79){
        displayResult.innerText = 'A';
    } else if(mark>=60 && mark<=69){
        displayResult.innerText = 'A-';
    } else if(mark>=50 && mark<=59){
        displayResult.innerText = 'B';
    } else if(mark>=40 && mark<=49){
        displayResult.innerText = 'C';
    } 
    else{
        displayResult.innerText = 'Fail';
    }
    
    
} );





resetButton.addEventListener('click', function(){
    inputValue.value = 0;
    displayResult.innerText = '';
})