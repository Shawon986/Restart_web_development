
function updateButtonName(buttonText){
    const button = document.getElementById("btn");
    button.innerText = buttonText;
}

updateButtonName("Send");

function updateButtonWithClick(){
    updateButtonName("Download");

}
const button = document.getElementById("btn");
button.addEventListener('click',updateButtonWithClick);