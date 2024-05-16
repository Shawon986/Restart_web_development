let count = 0;
const counterDisplay = document.getElementById("counter");
const plusButton = document.getElementById("increment");
const minusButton = document.getElementById("decrement");

function incrementCount(){
    count +=1 ;
    counterDisplay.innerText = count;
}

function decrementCount(){
    count -=1 ;
    counterDisplay.innerText = count;
}

plusButton.addEventListener('click',incrementCount);
minusButton.addEventListener('click',decrementCount);