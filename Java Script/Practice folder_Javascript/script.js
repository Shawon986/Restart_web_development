const firstInputField = document.getElementById('inputOne');
const secondInputField = document.getElementById('inputTwo');
const resultArea = document.getElementById('resultDisplay');
const compareBtn = document.getElementById('compare');
const resetBtn = document.getElementById('reset');



compareBtn.addEventListener('click', function(){
    const valueOne = parseFloat(firstInputField.value);
    const valueTwo = parseFloat(secondInputField.value);

    if(valueOne>valueTwo){
        resultArea.innerText = 'First number is bigger than Second number'
    } else if (valueOne<valueTwo){
        resultArea.innerText = 'Second number is bigger than First number'
    } else{
        resultArea.innerText = 'Both numbers are equal'
    }
})

resetBtn.addEventListener('click', function(){
    firstInputField.value = 0;
    secondInputField.value = 0;
    resultArea.innerText = '';
})