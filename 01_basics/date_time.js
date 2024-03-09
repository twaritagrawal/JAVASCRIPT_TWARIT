// let myDate=new Date();
// console.log(myDate);
// console.log(myDate.getMinutes())
// // console.log(myDate.toLocaleString)
// // console.log(myDate.toLocaleString)
// let mytimmestamp=Date.now()
// console.log(mytimmestamp);
// //to get this value in second 
// console.log(Math.floor(mytimmestamp/1000));
// // the value printed above are time from 1jan 1970

let myDate=new Date()
myDate.toLocaleString('default',{
    //jo chahiye hum yha define kr skte hain
     weekday:"long",
     
})
console.log(myDate)
console.log(myDate.toLocaleString())