const inputField = document.getElementById('inputOne');
const tableBody = document.getElementById('table_body');
const generateButton = document.getElementById('generate');
const reesetButton = document.getElementById('reset');


generateButton.addEventListener('click',function(){
    const number = parseInt(inputField.value);
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

    const cell1 = document.createElement('td')
    const cell2 = document.createElement('td')
    const cell3 = document.createElement('td')
    const cell4 = document.createElement('td')
    const cell5 = document.createElement('td')

    const tableRow = document.createElement('tr');

    cell1.innerText = number;
    cell2.innerText = "x";
    cell3.innerText = rowNo;
    cell4.innerText = "=";
    cell5.innerText = number*rowNo;

    tableRow.appendChild(cell1);
    tableRow.appendChild(cell2);
    tableRow.appendChild(cell3);
    tableRow.appendChild(cell4);
    tableRow.appendChild(cell5);

    return tableRow;

}