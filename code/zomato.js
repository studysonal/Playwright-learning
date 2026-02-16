//1-PLace one cofee order- 2 sec
//2- order accepted by restuarant- 1 sec
//3- prepare coffee and hand over to the order- 5 sec
//4- rider deliver coffee at your place- 2 sec

function placeCoffeeOrder(coffeename, orderAccept, preparecoffee, delivery) {
    setTimeout(() => {
        console.log("1- " + coffeename + " coffee order placed");
        orderAccept(coffeename, preparecoffee, delivery);
    }, 2000);
}
function orderAccept(coffeename, preparecoffee, delivery) {
    setTimeout(() => {
        console.log("2- " + coffeename + " coffee order accepted");
        preparecoffee(coffeename, delivery);
    }, 1000);
}
function preparecoffee(coffeename, delivery) {
    setTimeout(() => {
        console.log("3- " + coffeename + " coffee order preapared");
        delivery(coffeename);
    }, 5000);
}
function prepareTea(coffeename) {
    setTimeout(() => {
        console.log("3- " + coffeename + " Tea preapared");
        deliveryBycar(coffeename);
    }, 5000);
}

function delivery(coffeename) {
    setTimeout(() => {
        console.log("4- " + coffeename + " coffee delivered in 15 mins");
    }, 2000);
}

function deliveryBycar(coffeename) {
    setTimeout(() => {
        console.log("4- " + coffeename + " coffee delivered in 5 mins");
    }, 2000);
}

let coffeename = " Americano";
placeCoffeeOrder(coffeename, orderAccept, prepareTea, deliveryBycar);
