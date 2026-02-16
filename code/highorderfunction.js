function printWithStar(content) {
    console.log("*****************");
    console.log(content);
    console.log("*****************");
}

function printWithHash(content) {
    console.log("##################");
    console.log(content);
    console.log("##################");
}


function add(number1, number2, sonali) {   //sonali is call back function
    console.log(typeof sonali);
    let sum = number1 + number2;
    sonali("Sum :-" + sum);    //sonali is calling printwithstar
}
add(10, 20, printWithStar);       // printstar is paasing to add function sonali parameter