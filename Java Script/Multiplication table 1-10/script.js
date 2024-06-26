const generateButton = document.getElementById('generate');
const tableContainer = document.getElementById('table-container');
const containertopRow = document.getElementById("topRow");
const containerbottomRow = document.getElementById("bottomRow");

function createTableFor(number){
  const table = document.createElement("table");
  table.className = "w-full border-collapse text-center";

  for (let i = 1; i <= 10; i++) {
    const tableRow = document.createElement("tr");
    tableRow.className = "border";

    const leftCell= document.createElement("td");
    leftCell.innerText = `${number} * ${i} =`;

    const rightCell = document.createElement("td");
    rightCell.innerText = number * i ;

    tableRow.appendChild(leftCell);
    tableRow.appendChild(rightCell);

    table.appendChild(tableRow);

  }
  return table;
}

generateButton.addEventListener('click', function () {
    containertopRow.innerHTML ='';
    containerbottomRow.innerHTML ='';

  for(let number=1; number<=10 ; number++){
    const table = createTableFor(number);


    if(number<=5){
        containertopRow.appendChild(table);
    }else{
        containerbottomRow.appendChild(table);
    }
  } 

});
