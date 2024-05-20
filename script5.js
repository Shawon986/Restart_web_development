const buttons = document.getElementById("generate");
const tableTopRow = document.getElementById("topRow");
const tableBottomRow = document.getElementById("bottomRow");

function createTableFor(input){
    const table = document.createElement('table');
    table.className = 'w-full border border-collapse text-center';

    for(let i = 1;i<=10;i++){
        const tableRow = document.createElement('tr');
        tableRow.className = 'border-b'

        const leftCell = document.createElement('td');
        leftCell.style.border = '1px solid black'
        leftCell.innerText = (`${input}*${i} =`);

        const rightCell = document.createElement('td');
        rightCell.style.border = '1px solid black'
        rightCell.innerText = (`${input*i}`);
        
        tableRow.appendChild(leftCell);
        tableRow.appendChild(rightCell);

        table.appendChild(tableRow)  

    }
    return table ;
}

function generateTable(){
    tableTopRow.innerText = '';
    tableBottomRow.innerText = '';
    for(let input =1; input<=10; input ++){
    const table = createTableFor(input);

        if(input<=5){
            tableTopRow.appendChild(table) 

        }else{
            tableBottomRow.appendChild(table)
        }
         
    }
}

buttons.addEventListener('click',generateTable);
