function getButtonElement(){
    const button = document.getElementById("btn");
    return button;
} 

function updateButtonName(buttonText){
    const button = getButtonElement();
    button.innerText = buttonText;
}

updateButtonName("Send");

function updateButtonWithClick(){
    updateButtonName("Download");

}
const button = getButtonElement();
button.addEventListener('click',updateButtonWithClick);