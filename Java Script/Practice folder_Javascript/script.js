const firstInputField = document.getElementById('inputOne');
const secondInputField = document.getElementById('inputTwo');
const resultArea = document.getElementById('resultDisplay');
const compareBtn = document.getElementById('compare');
const resetBtn = document.getElementById('reset');


function isValid(){

    

    if(!firstInputField.value){
        alert ('Enter a number at first input');
        return false;
    }else if(!secondInputField.value){
        alert ('Enter a number at second input');
        return false;
    }
    return true;
}


compareBtn.addEventListener('click', function(){

    if(!isValid()){
        return;
    }
    
    const valueOne = parseFloat(firstInputField.value);
    const valueTwo = parseFloat(secondInputField.value);

    if(valueOne>valueTwo){
        resultArea.innerText = 'First number is bigger than Second number'
    } else if (valueOne<valueTwo){
        resultArea.innerText = 'Second number is bigger than First number'
    } else if(valueOne===valueTwo){
        resultArea.innerText = 'Both numbers are equal'
    } 
    
})

resetBtn.addEventListener('click', function(){
    firstInputField.value = '';
    secondInputField.value = '';
    resultArea.innerText = '';
})