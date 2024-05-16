
function getButton(){
    const button = document.getElementById("btn");
    return button;
}

function updateButton(buttonText){
    getButton().innerText = buttonText;
}
updateButton("Click me");

function updateNewButton(){
    updateButton("Send me");
}

getButton().addEventListener('click',updateNewButton);