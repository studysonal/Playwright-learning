

//global variable= declare with "var" keyword
//blocked scope variable- let
//blocked scope variable- const

{
var i=90;
//console.log(i);

}
console.log(i);  //ans is 90 we can access due to var 



/*{
    let j=1000;           
    console.log("inside block- " +j);
    
    }
console.log(j);  //error--> j is not defined */
//chfjgfjgfjg

// {
//     const k=70;           
    
// }
// console.log(k);  // we can not access constant outside bloack-->error--> k is not defined



var m1=10;


{
let m1=20;
console.log(m1);

}
console.log(m1);


let a = 10;
console.log(a);
{
  let a = 20;
  console.log(a);
}
console.log(a);