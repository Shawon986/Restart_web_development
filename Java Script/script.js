function getButtonElement(){
    const button = document.getElementById("btn");
    return button;
} 

function updateButtonName(buttonText){
    // const button = getButtonElement();
    // button.innerText = buttonText;
    getButtonElement().innerText = buttonText;   // Shortcut
}

updateButtonName("Send");

function updateButtonWithClick(){
    updateButtonName("Download");

}
// const button = getButtonElement();
// button.addEventListener('click',updateButtonWithClick);
getButtonElement().addEventListener('click',updateButtonWithClick); // Shortcut
