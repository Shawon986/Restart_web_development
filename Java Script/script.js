const getButton = document.getElementById("btn");

function updateButton(buttonText){
    const getButton = document.getElementById("btn");
    getButton.innerText = buttonText;
}
updateButton("Click me");

function updateNewButton(){
    updateButton("Send me");
}

getButton.addEventListener('click',updateNewButton)