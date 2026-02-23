let num=8;
let prime=true;

if(num<=1){
    prime =false;
}
for(i=2;i<num;i++){
   if( num%i==0){
    prime=false;
   }
}
if (prime) {
    console.log("Given number is a Prime Number");
  } else {
    console.log("Given number is NOT a Prime Number");
  }