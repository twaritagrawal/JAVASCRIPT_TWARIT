{
    let a=5
    const b=5
    let c=6
    var d=8//global scope
}
// console.log(a)
// console.log(b)   all results are undefined
// console.log(c)
console.log(d) 

//+++++++++++++++++++++++++++++++++++++++++++INTRESTING++++++++++++++++++++++++++++++++++++++++++++//
console.log(addone(5));
function addone(num){
    return num+1;
}
// console.log(add);  //this will not work as we had hold the function in an avariable//there is some concept of funtion hoisting
const add=function addtwo(num1){
    return num1+2;
}

console.log(add(5))