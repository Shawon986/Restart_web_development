let count = 0;

const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const displayElement = document.getElementById("counter");

incrementButton.addEventListener("click",incrementCount);

function incrementCount(){
    if(count>=20){
        alert("You have reached the maximum value")
    
    }else{
        count +=1;
        displayElement.innerText = count ;

    }

}

decrementButton.addEventListener("click",decrementCount);
function decrementCount(){
    if(count<=0){
        alert("You have reached the minimum limit")

    }else{
        count -= 1;
        displayElement.innerText = count ;
    }
    

}
