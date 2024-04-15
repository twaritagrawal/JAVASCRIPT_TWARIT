// console.log(this)  //it will print an empty object in node environment where as if we rum this in a browser then it will window object
  

// const user={
//      username:"hitesh",
//      price:999,

//      welcomemessafge: function(){
//    console.log(`${this.username}hello there`)
//    console.log(this);//here in this it contains the whole user object
//      }
// }
// user.welcomemessafge()
// user.username="twarit"
// user.welcomemessafge()
//vvvimportant// console.log(this)//it will give an empty object as an output





//this cannot be used in function it for example
//+++++++++++vvvimportant+++++++++++++
// function chai(){
//     console.log(this);//here it contains some data
//     username:"twarit"
//     console.log(this.username);//it will give output undefined as we cannot use this a function
// }
// chai()




///+++++++++++++++++++++++++++++++++++++++++++++ARROW++++++++++++++++++++++++++++++++++++++++//
const chai=function(){
    username:"twarit"
    console.log(this.username)
}
chai()
 // same funtion we can implement with the help of arrow function

 const chai2=()=>{
    username:"twarit",
    console.log("hello arrow function")
    console.log(this);//here also it will give an empty object
    console.log(this.username);//here also we cannot use this keyword inside the arrow function  <<<<vvi>>>

 }
chai2()


//basic arrow function
const simplearrowfn=(num1,num2)=>{
  return num1+num2
}
//the same function can be written as
const arrowfn=(num1,num2) => num1+num2
//or
//==>>>    const arrowfn=(num1,num2) => (num1+num2)
console.log(arrowfn(3,4))
console.log(simplearrowfn(4,5));

//if we return an object then we have to use brackets
const func=(num1,num2)=>({username:"twarit"})
console.log(func(5,65));
/// agr arrow fun`tion lom cur`ly braces mai wrap kra toh return keyword likhna pdega
