const inputValue = document.getElementById("firstValue");
const showButton = document.getElementById("btns");
const resultPlace = document.getElementById("result");

// resultPlace.innerText = '';

function showTable(){
    const input = parseInt(inputValue.value) ;
    for(let i=1; i<=10; i++){
        const tableRow = document.createElement("h4")
        tableRow.innerText = `${input}*${i} = ${input*i}`;
        resultPlace.appendChild(tableRow);
    }
    
};

showButton.addEventListener('click',showTable);