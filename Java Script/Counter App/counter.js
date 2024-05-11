let count = 0;

const incrementButton = document.getElementById("increment");
const displayElement = document.getElementById("counter");

incrementButton.addEventListener("click",incrementCount);

function incrementCount(){
    count += 1;
    displayElement.innerText = count ;

}