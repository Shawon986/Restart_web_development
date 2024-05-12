const gradeValue = document.getElementById("firstValue");
const buttons = document.getElementById("btns");
const viewPlace = document.getElementById("result");

function setDiaplayText(text){
    viewPlace.innerText = text ; 
}



buttons.addEventListener('click',function (){
    if(gradeValue.value === ''){
        gradeValue.style.border = "2px solid red"
        setDiaplayText("Please input a number");
        return;
    }
    const grade =parseFloat( gradeValue.value) ;
    if(grade>100 || grade<0){
        setDiaplayText ("ভাল করে নাম্বার দেখে দে গরিব !!!!") 
    }else if(grade>=80){
        setDiaplayText ( "Your grade is A+")
    }else if(grade>=70 && grade<80){
        setDiaplayText("Your grade is A")
    }else if(grade>=60 && grade<70){
        setDiaplayText( "Your grade is A-")
    }else if(grade>=50 && grade<60){
        setDiaplayText("Your grade is B")
    }else if(grade>=40 && grade<50){
        setDiaplayText("Your grade is C")
    }else if(grade>=33 && grade<40){
        setDiaplayText( "Your grade is D")
    }else{
        setDiaplayText("তোমার জীবনটাই বেদনা, ফেইল???")
    }
})
