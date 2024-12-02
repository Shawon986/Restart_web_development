const firstInput = document.getElementById('inputField');
const Calculatebutton = document.getElementById('button');

const displayArea = document.getElementById('display');

function showResult(){
    const inputValue = parseInt(firstInput.value);
    if(inputValue>=80){
        displayArea.innerText = "A+"
    }else{
        displayArea.innerText = "Fail"
    }
}

Calculatebutton.addEventListener('click', showResult);