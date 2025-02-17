const resultNnumber = document.getElementById('result_display');
const plusButton = document.getElementById('increament');
const minusButton = document.getElementById('decreament');

let count = 0;

function increase(){
    count = count+1 ;
    resultNnumber.innerText = count;
}
plusButton.addEventListener('click', increase);

