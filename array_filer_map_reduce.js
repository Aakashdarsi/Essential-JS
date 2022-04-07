// https://www.youtube.com/watch?v=oQ7Le6SuLNA

let nums = [ 1,2,3,4,5,6,7,8,9,10]
console.log(nums.filter(n => n%2 === 0 )) // filters and prints only even numbers 
let result = nums.filter(n => n%2 === 0).map(n => n*2).reduce((a,b) => a+b)
console.log(result)