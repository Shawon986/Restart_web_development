const firstInput = document.getElementById('inputField');
const Calculatebutton = document.getElementById('button');

const displayArea = document.getElementById('display');

function showResult(){
    const inputValue = parseInt(firstInput.value);
    if(inputValue <= 0 || inputValue > 100){
        displayArea.innerText = "Invalid !!!"
        return ;
    }
    else if(inputValue >= 80 && inputValue <= 100){
        displayArea.innerText = "A+"
    }else if(inputValue >= 70 && inputValue <= 79){
        displayArea.innerText = "A"
    }else if(inputValue >= 60 && inputValue <= 69){
        displayArea.innerText = "A-"
    }else if(inputValue >= 50 && inputValue <= 59){
        displayArea.innerText = "B"
    }else if(inputValue >= 40 && inputValue <= 49){
        displayArea.innerText = "C"
    }else if(inputValue >= 33 && inputValue <= 39){
        displayArea.innerText = "D"
    }else{
        displayArea.innerText = 'Fail !!!'
    }
}

Calculatebutton.addEventListener('click', showResult);