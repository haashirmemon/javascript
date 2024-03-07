var input1 =document.querySelector("#biologymarks")
var input2 =document.querySelector("#physicsmarks")
var input3 =document.querySelector("#chemistrymarks")
var input4 =document.querySelector("#engmarks")
var input5 =document.querySelector("#urdumarks")
var input6 =document.querySelector("#islmarks")
var input7 =document.querySelector("#mathsmarks")

var studenttotal = document.querySelector("#totalmarks")
var studentpercentage = document.querySelector("#percentage")
var studentgrade= document.querySelector("#grade")

function calculatorpercentage() {
    console.log(input1.value);
    console.log(input2.value);
    console.log(input3.value);
    console.log(input4.value);
    console.log(input5.value);
    console.log(input6.value);
    console.log(input7.value);
    

    var totalmarks = 700

    var obtainedmarks =+input1.value + +input2.value + +input3.value + +input4.value  + +input5.value + +input6.value + +input7.value
    console.log("obtainedmarks ===>", obtainedmarks);
studenttotal.innerHTML=obtainedmarks
var  studentpercentage =obtainedmarks*100/totalmarks
percentage.innerHTML=studentpercentage
console.log(studentpercentage);


if (studentpercentage>80) {
    grade.innerHTML= "A+1"
    console.log("A+1");
    
} else if (studentpercentage>70) {
    grade.innerHTML="A"
    console.log("A");

}
else if(studentpercentage>60){
    grade.innerHTML ="B"
    console.log("B");

}
else if(studentpercentage>50){
    grade.innerHTML = "C"
    console.log("C");

}
else if(studentpercentage>40){
    grade.innerHTML ="D"
    console.log("D");

}
else{
    grade.innerHTML ="fail"
    console.log("FAIL");

}



}