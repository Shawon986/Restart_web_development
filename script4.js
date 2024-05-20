const inputNumber = document.getElementById("input-number");
const buttons = document.getElementById("generate");
const displayArea = document.getElementById("table-container");

function generateTable(){
    const input = parseInt(inputNumber.value);
    const table = document.createElement('table');
    table.className = 'w-full border-collapse text-center'
    displayArea.innerText = ''
    for(let i = 1;i<=10;i++){
        const tableRow = document.createElement('tr');
        tableRow.className = 'border-b'

        const leftCell = document.createElement('td');
        leftCell.innerText = (`${input}*${i}`);

        const rightCell = document.createElement('td');
        rightCell.innerText = (`${input*i}`);
        
        tableRow.appendChild(leftCell);
        tableRow.appendChild(rightCell);

        table.appendChild(tableRow)
        
        

    }
    displayArea.appendChild(table);
}

buttons.addEventListener('click',generateTable);
