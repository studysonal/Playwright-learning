/*function printMyName(){
   console.log("Sonali");
}

//setTimeout(printMyName, 5000)     //5000 milisec=5sec  settimeout will wait for specific time
//javascrip dont wait for a process to finish
//js is single threaded language
// javascript is a web designing language

function printvaibhavName(){
    console.log("Vaibhav")
}
setTimeout(printMyName, 5000);
setTimeout(printvaibhavName, 4000);*/



//second way
function printMyName(){
    console.log("Sonali");
 }
 
 //setTimeout(printMyName, 5000)     //5000 milisec=5sec  settimeout will wait for specific time
 //javascrip dont wait for a process to finish
 //js is single threaded language
 // javascript is a web designing language
 
 function printvaibhavName(){
     console.log("Vaibhav")
 }
 setTimeout(()=>{
    console.log("Sonali");
 }, 5000);
 setTimeout(printvaibhavName, 4000);    //printvaibhavName  is a call back function