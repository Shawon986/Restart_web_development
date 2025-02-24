const generateButton = document.getElementById('generate');
const resetButton = document.getElementById('reset');
const topRow = document.getElementById('top_row');
const bottomRow = document.getElementById('bottom_row');


generateButton.addEventListener('click',() =>{
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

const getTable = (num) =>{
    const numberTable = document.createElement('table');
    const tableBody = document.createElement('tbody');

    for (let row = 1; row<=10; row++){

        const tableRow = getTableRow(num,row)
        tableBody.appendChild(tableRow);
    }
    
    numberTable.appendChild(tableBody);
    return numberTable;
    
}

const getTableRow = (num,row) => {
    const cells = [];
    const rowData = [num,"x",row,"=",num*row];
    rowData.forEach((data) =>{
        const cell = document.createElement('td');
        cell.innerText = data;
        cells.push(cell);
    })

    const tableRow = document.createElement('tr');

    cells.forEach((cell)=>{
        tableRow.appendChild(cell);
    })
    
    return tableRow;
}

resetButton.addEventListener('click', () =>{
    topRow.innerHTML = '';
    bottomRow.innerHTML = '';

})