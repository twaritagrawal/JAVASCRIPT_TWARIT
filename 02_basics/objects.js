 const mysym=Symbol("key1")
 
 const JsUser={
    firstname:"twarit",
    lastname:"agrawal",
    "full name":"twarit agrawal",
    age:21,
    [mysym]:"mykey1",//symbol is used in object as a key  //vvi
    email:"twaritagrawal7850@gmail.com",
    contactno:6204689054
 }


 
 console.log(JsUser.email);
 console.log(JsUser["email"])
 console.log(JsUser["full name"])
//  console.log(JsUser.full name)//--------we cant access this value by dot //vvi  
 console.log(JsUser[mysym])//symbols are fetched like this only
 




 //to freeze the object that there should be no  changes occur in the object  we use
//  Object.freeze(JsUser);
 //now nothing canbe changed 
 //for example
 JsUser.email="twarit@google.com"
 console.log(JsUser["email"])//no changes occured as the array is freezed




 //adding function to the object jsuser
JsUser.greeting=function(){
   console.log("hello jsuser")
}
console.log(JsUser.greeting)//sirf reference mila hai
console.log(JsUser.greeting())//from this line we called the function greeting of  jsuser
JsUser.greetingtwo=function(){
   console.log(`hello jsuser ${this.firstname}`)
}
console.log(JsUser.greetingtwo())