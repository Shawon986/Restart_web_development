const gradeValue = document.getElementById("firstValue");
const buttons = document.getElementById("btns");
const viewPlace = document.getElementById("result");

function calculateGrade(){
    const grade = gradeValue.value ;
    if(grade>100 || grade<0){
        viewPlace.innerText = "ভাল করে নাম্বার দেখে দে গরিব !!!!"
    }else if(grade>=80){
        viewPlace.innerText = "Your grade is A+"
    }else if(grade>=70 && grade<80){
        viewPlace.innerText = "Your grade is A"
    }else if(grade>=60 && grade<70){
        viewPlace.innerText = "Your grade is A-"
    }else if(grade>=50 && grade<60){
        viewPlace.innerText = "Your grade is B"
    }else if(grade>=40 && grade<50){
        viewPlace.innerText = "Your grade is C"
    }else if(grade>=33 && grade<40){
        viewPlace.innerText = "Your grade is D"
    }else{
        viewPlace.innerText = "তোমার জীবনটাই বেদনা, ফেইল???"
    }
}

buttons.addEventListener('click',calculateGrade)