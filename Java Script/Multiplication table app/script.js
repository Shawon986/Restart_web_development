const numberInput = document.getElementById('input-number');
const generateButton = document.getElementById('generate');
const tableContainer = document.getElementById('table-container');

generateButton.addEventListener('click', function () {
  const number = parseInt(numberInput.value);

  const table = document.createElement("table");
  table.className = "w-full border-collapse text-center";


  tableContainer.innerHTML = '';

  for (let i = 1; i <= 10; i++) {
    const tableRow = document.createElement("tr");
    tableRow.className = "border";

    const leftCell= document.createElement("td");
    leftCell.innerText = `${number} * ${i}`;

    const rightCell = document.createElement("td");
    rightCell.innerText = number * i ;

    tableRow.appendChild(leftCell);
    tableRow.appendChild(rightCell);

    table.appendChild(tableRow);

  }

  tableContainer.appendChild(table);

});
