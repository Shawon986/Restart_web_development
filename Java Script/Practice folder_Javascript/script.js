const inputField = document.getElementById('inputOne');
const tableBody = document.getElementById('table_body');
const generateButton = document.getElementById('generate');
const reesetButton = document.getElementById('reset');


generateButton.addEventListener('click',function(){
    const number = parseInt(inputField.value);
    if(!number){
        alert("Please type a number");
        tableBody.innerHTML = '';
        return;
    }
    tableBody.innerHTML = '';
    generateTable(number);
})

function generateTable(number){
    for(let i = 1; i<=10; i++){

        const tableRow = generateRow(number,i);
        tableBody.appendChild(tableRow);
    }
    
}

function generateRow(number,rowNo){

    const cells = [];
    for(let i = 1; i<=5; i++){
        const cell = document.createElement('td');
        cells.push(cell);
    }

    const tableRow = document.createElement('tr');

    cells[0].innerText = number;
    cells[1].innerText = "x";
    cells[2].innerText = rowNo;
    cells[3].innerText = "=";
    cells[4].innerText = number*rowNo;

    for(let i = 0; i<cells.length;i++){
        tableRow.appendChild(cells[i])
    }
   

    return tableRow;

}