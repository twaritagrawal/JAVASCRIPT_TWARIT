function SayMyName(){
    console.log("asdfghjkl");
    console.log("qwertyuio");
    console.log("zxcvbnm");
}
SayMyName();  //this is the execution
SayMyName //without bracket this is reference



//function to add two numbers
// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }

// addTwoNumbers(4,8);
// const result=addTwoNumbers(4,5);
// console.log(result); //answer is unidentified as the function is not returning anything
//so to make it a returnable function the function should be 
function addTwoNumbers(number1,number2){
    return number1+number2
}
const result=addTwoNumbers(4,5);
console.log(result)//here we will get the answer because the function is returning value 




function loginUserMessage(username="sam"){//here we added sam as a default value of username so tht it will never show undefined message
    if(!username){ ///this stattement is to check whether the username is undefined or not
        console.log("please enter a username")
        return

    }
    return `${username} just logged in`
}

console.log(loginUserMessage("qwerth"))
console.log(loginUserMessage())//here the default value of username is printed



///use of rest operator 
function calculatecartprice(...num1){
      return num1;
}
console.log(calculatecartprice(200,400,5000,78,500,4580,256))   //this will return  an array because we used a rest operator to take many integer as an input
//later we the help of loop we can find the sum of the array

//function that handle object
const user={
    name:"Twarit",
    marks:500
}
function handleobject(anyobject){
    console.log(`${anyobject.name} got ${anyobject.marks}`)
}
// const resultt=handleobject(user) //if the function is returningsomething then otherwise
handleobject(user)
// console.log(resultt);//this will give undefined answer
handleobject({    //one more way to pass the object
    name:"passed user object",
    marks:8000
})

//function passing the array
const temp=[500,400,700,800]
function handlearray(getarray){
    return getarray[0];
}
console.log(handlearray(temp)) //passing the already created array
console.log(handlearray([800,500,900])) //passing my new array
