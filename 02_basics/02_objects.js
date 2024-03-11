const tinderuser=new Object()  //singleton object
const tinderUsertwo={}
// console.log(tinderUsertwo);
// console.log(tinderuser);
//for both the output will remain same

//nested object
const regularuser={
    firstname:"twarit",
    fullnamee:{
        lastname:{
            name:"agrawal",
            title:"mittal"
        }
    }
}
// console.log(regularuser.fullnamee.lastname.title)
// console.log(regularuser)



//combine the objects
const object1={1:"asd",2:"fggh",3:"fghu"}
const object2={4:"zxcv",5:"vbnm",6:"tghn"}
const object3=Object.assign({},object1,object2)//combining object2 an object2 into an empty object

// console.log(object3)
///object1.assign(target,source) in the above the target is an empty onbject 
Object.assign(object1,object2) //here object2 is merging in object1 that is object1 is the target
// console.log(object1);

//the same thing we can do with spread opreator
const obj={...object1,...object2}//very easy and useful method
// console.log(obj)

//array of objects
const users=[
    {

    },

    {

    },

    {

    }
]

console.log(Object.keys(object1))//we will get the array of all the keys of object1 in an array format
console.log(Object.values(object1))//we will get the array of all the values of the keys of object1 in an array format



//to know whether it has this key or not then 
console.log(regularuser.hasOwnProperty("lastname")) //boolean answer
console.log(regularuser.hasOwnProperty("fullnamee"))