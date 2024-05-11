let count = 0;

const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const displayElement = document.getElementById("counter");

incrementButton.addEventListener("click",incrementCount);

function incrementCount(){
    if(count>=20){
        alert("You have reached the maximum value")
        displayElement.innerText = count ;
        return count;
    }else{
        count +=1;
        displayElement.innerText = count ;

    }

}

decrementButton.addEventListener("click",decrementCount);
function decrementCount(){
    count -= 1;
    displayElement.innerText = count ;

}
