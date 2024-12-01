let count = 0;
const incrementButton = document.getElementById("increment");
const counterShow = document.getElementById('counter');
const decrementButton =document.getElementById('decrement');


function incrementCount(){
    count = count + 1 ;
    counterShow.innerText = count ;

};

function decrementCount(){
     
    if (count<=0){ 
        alert('Numbers can not be negative') ;
        return count;
    }else {
        count = count - 1 ;
        counterShow.innerText = count ;
    }
}

incrementButton.addEventListener('click', incrementCount);

decrementButton.addEventListener('click', decrementCount);


