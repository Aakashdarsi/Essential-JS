// https://www.youtube.com/watch?v=9WIJQDvt4Us

// const and let are block scoped 
// where var is function scoped 
if (true) {
    var ans = "Print Hello woeld";
}
console.log(ans) // It will be printed because var is a function scoped 

if (true) {
    let res = "Happy Married Life";

}
console.log(res); // It will throw an error because it's a res is a block scoped element 

// ____________________________
// var variable can again be redeclared 
 var ans = "True"
 var ans = "false"
console.log(ans)
// It will print the answer false 

// in case of let 
let ans = true 
let ans = false 
console.log(ans) // It will throw an error that ans variable is already declared 






