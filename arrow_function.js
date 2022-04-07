// ___________________________________

// Named Functions

let sum = (a,b) => {return a+b} // This is the function 
function sum(a,b){
    return a+b;
}
let sum = (a,b) => a+b // All are Same
//____________________________________
function isPositive(number){
    return number >0 
}
let isPositive = (number) => number >= 0
//_____________________________________

function randomNumber()
{
    return Math.random
}

let randomNumber = ()  => Math.random
//____________________________________

// Non - Named Functions 
//______________________________________

document.addEventListener("click",function(){
console.log("Clicked");

})

document.addEventListener("click",()=>{
    console.log("clicked");
})
// ____________________________________________
