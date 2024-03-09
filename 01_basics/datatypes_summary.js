const scoreValue=100.3
console.log(typeof scoreValue);

let abcd;
let xyz=undefined;//both are same as both of them have same value undefined

const id=Symbol('123')
const anotherId=Symbol('123')
//but both id and anotherId are not same 
console.log(id===anotherId);
//output will be false 
const bigNumber=123456789123456789123456789n
//it is representing big int


//refrences
//non primitive
//arrays
const hereos=["shaktiman","naagraj","doga"]
//object
let obj={
    name:"twarit",
    age:21,
}
//funtion
 const myFunction=function(){
    console.log("hello"); 
    }
//****************************************************/
//stack(primitive),heap(non-primitive)
let myit1="twarit"
let myit2=myit1
myit2="agrawal"
console.log(myit1);
console.log(myit2);
//here myit2 will only be changed as it is a primitive datatype
let userone={
    email:"twarit@google.com",
    upi:"user@yapl"
}
let usertwo=userone 
usertwo.email="agrawal@google.com"
console.log(userone.email);
console.log(usertwo.email);
//we will see that in both userone and usertwo the email becomes same as the value was passed by refrences
