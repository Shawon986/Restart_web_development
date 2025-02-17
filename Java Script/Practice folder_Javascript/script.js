const resultNnumber = document.getElementById('result_display');
const plusButton = document.getElementById('increament');
const minusButton = document.getElementById('decreament');

let count = 0;

function increase(){
    if(count===10){
        alert("Count limit has reached")
    }else{
        count = count+1 ;
        resultNnumber.innerText = count;
    }
    
}
plusButton.addEventListener('click', increase);

function decrease(){
    count = count-1 ;
    resultNnumber.innerText = count;
}
minusButton.addEventListener('click', decrease);