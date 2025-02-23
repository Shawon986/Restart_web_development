const generateButton = document.getElementById('generate');
const resetButton = document.getElementById('reset');
const topRow = document.getElementById('top_row');
const bottomRow = document.getElementById('bottom_row');


generateButton.addEventListener('click',function(){
    topRow.innerHTML='';
    bottomRow.innerHTML = '';
    
    for(let num = 1; num<=10 ; num++){
        const numberTable = getTable(num)
        
        if(num<=5){
            topRow.appendChild(numberTable)
        }else{
            bottomRow.appendChild(numberTable);
        }
        
    }

})

function getTable(num){
    const numberTable = document.createElement('table');
    const tableBody = document.createElement('tbody');

    for (let row = 1; row<=10; row++){

        const tableRow = getTableRow(num,row)
        tableBody.appendChild(tableRow);
    }
    
    numberTable.appendChild(tableBody);
    return numberTable;
    
}

function getTableRow(num,row){
    const cells = [];
    for (let i = 1; i<=5; i++){
        const cell = document.createElement('td');
        cells.push(cell);
    }

    cells[0].innerText = num;
    cells[1].innerText = "x";
    cells[2].innerText = row;
    cells[3].innerText = "=";
    cells[4].innerText = num*row;

    const tableRow = document.createElement('tr');

    for(let i = 0; i<cells.length; i++){
        tableRow.appendChild(cells[i]);
    }

    return tableRow;
}

resetButton.addEventListener('click', function(){
    topRow.innerHTML = '';
    bottomRow.innerHTML = '';

})