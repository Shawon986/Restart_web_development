let count = 0;
const counterDisplay = document.getElementById("counter");
const plusButton = document.getElementById("increment");
const minusButton = document.getElementById("decrement");

function incrementCount(){

    if(count>=10){
        alert("You have reached the maximum limit");
        return count;
    }
    count +=1 ;
    counterDisplay.innerText = count;
}

function decrementCount(){

    if(count<=0){
        alert("You have reached the minimum limit");
        return count;
    }

    count -=1 ;
    counterDisplay.innerText = count;
}

plusButton.addEventListener('click',incrementCount);
minusButton.addEventListener('click',decrementCount);