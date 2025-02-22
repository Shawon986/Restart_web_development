const inputField = document.getElementById('inputOne');
const generateButton = document.getElementById('generate');
const resetButton = document.getElementById('reset');
const tableBody = document.getElementById('table_body');


generateButton.addEventListener('click', function(){
    const num = parseInt(inputField.value);
    if(!num){
        alert("Please enter a number")
        return;
    }
    tableBody.innerHTML = '';
    generateTable(num);
});



function generateTable(num){
    for(let i = 1; i<=10; i++){
        const tableRow = generateRow(num,i);
        tableBody.appendChild(tableRow);
    }
    
}

function generateRow(num,i){
    
    const cells = [];
    for(let i=1; i<=5; i++){
        const cell = document.createElement('td');
        cells.push(cell);
    }


    cells[0].innerText = num;
    cells[1].innerText = "x";
    cells[2].innerText = i;
    cells[3].innerText = "=";
    cells[4].innerText = num*i;

    const tableRow = document.createElement('tr');

    for(let i =0; i<cells.length; i++){
        tableRow.appendChild(cells[i])
    }
    

    return tableRow;
}

resetButton.addEventListener('click',function(){
    inputField.value = '';
    tableBody.innerHTML = '';
})