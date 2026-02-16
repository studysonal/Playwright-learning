//promise- i will  100% return you an output
// 3 states- pending state, resolved/fulfilled state, rejected state

let p1=new Promise((resolved1, reject1) =>{
let totalPushUp=110;
if(totalPushUp<=100){
    reject1();

}else{
    resolved1();
}
});
p1.then(()=> {
    console.log("Congratulations! You will have 2 pizzas.")
}).catch(() =>{
    console.log("you failed i sandwich");
});