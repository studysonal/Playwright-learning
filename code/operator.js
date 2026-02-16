
// var x=10;
// var y=4;

// console.log(x ** y)   // 10 * !0 *10 *10

// num=34;
// let lastdigit=num/10;
// let firstdigit= Math.floor(num%10);     //math.floor will remove digits after decimal point like 4.5  so it will give answer as 4 only 5 is skipped
// let sum=lastdigit+firstdigit;
// console.log(sum);
const prompt=require("prompt-sync")();

var num=prompt("Enternumber--");
//num=234364;
let sum=0;

while(num !=0){
let lastdigit=num%10;      
sum=sum+lastdigit;
num=Math.floor(num/10);
}

console.log(sum);