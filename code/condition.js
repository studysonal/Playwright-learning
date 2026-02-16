const prompt=require("prompt-sync")();

//npm install prompt-sync    --> command to enable taking input from console
//var age=34;

var age=prompt("Enter your age--");
var agegroup="";
if(age<=18){
    agegroup="Child";
}else if(age<=30){
    agegroup="Adult"
}else if(age<=45){
    agegroup="Mature"
}else {
    agegroup="old"
}
console.log("Age Group: " +agegroup);