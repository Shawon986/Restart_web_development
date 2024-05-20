const inputNumber = document.getElementById("input-number");
const buttons = document.getElementById("generate");
const displayArea = document.getElementById("table-container");

function generateTable(){
    const input = parseInt(inputNumber.value);
    
    for(let i = 1;i<=10;i++){
        const tableRow = document.createElement('h4');
        tableRow.innerText = (`${i}*${input}= ${i*input}`);

        displayArea.appendChild(tableRow);

    }
}

buttons.addEventListener('click',generateTable);
