let count = 0;
const incrementButton = document.getElementById("increment");
const counterShow = document.getElementById('counter');
const decrementButton =document.getElementById('decrement');


function incrementCount(){
    count = count + 1 ;
    counterShow.innerText = count ;

};

function decrementCount(){
    count = count - 1 ;
    counterShow.innerText = count ;
}

incrementButton.addEventListener('click', incrementCount);

decrementButton.addEventListener('click', decrementCount);


