const displayArea = document.getElementById('display');

const btn01 = document.getElementById('first');

const btn02 = document.getElementById('second');

let count = 0;

function increase(){
    if(count===10){
        displayArea.innerText = 'You have reached the limit';
        return count;

    }
    count = count+ 1;
    displayArea.innerText = count;
    
}

function decrease(){
    if(count<=0){
        displayArea.innerText = 'Can not be negative';
        return count;

    }
    count = count - 1;
    displayArea.innerText = count;
}

btn01.addEventListener('click', increase);
btn02.addEventListener('click', decrease);


