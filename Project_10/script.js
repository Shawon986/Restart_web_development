let count = 0;
const incrementButton = document.getElementById("increment");
const counterShow = document.getElementById('counter');

function incrementCount(){
    count = count + 1 ;
    counterShow.innerText = count ;

};

incrementButton.addEventListener('click', incrementCount);


