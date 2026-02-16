var age=12;
var marks=80;

//And scenario
// 1 & 1= 1
// 1 & 0 = 0
// 0 & 1 = 0
// 0 & 0 = 0


// console.log(age>10 & marks>70);

// console.log(8 & 2);
// 1000
// 0010
// 0000

//console.log(4 & 9);
// 0100
// 1001
// 0000


//OR if any condition true then it is true
// 1 & 1= 1
// 1 & 0 = 1
// 0 & 1 = 1
// 0 & 0 = 0

//console.log(4 | 9);
// 0100     4
// 1001     9
// 1101     13


//shift operator
var a = 14;   
// 1110   right shift>> it will remove last bit  like 1110 -> 111=7 half your value
console.log(a>>1);
console.log(a>>2);

//1110   left shift-> it will add another 0 like 1110->11100   double your value
console.log(a<<1);

var a=8;
console.log(a>>1);   //4
console.log(a>>2);   // 2 
console.log(a>>3);    //1
console.log(a>>4);    //0

var a= 10;
console.log(a<<1);   //20
console.log(a<<2);   // 40
console.log(a<<3);    // 80
console.log(a<<4);    // 160