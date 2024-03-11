//concatenation of two arrays//
const myarraay=["hello","my","name"]
const myarray2=["is","twarit","agrawal"]
// myarraay.push(myarray2)// here we pushed an array inside an array 
// console.log(myarraay);
const myarray3=myarraay.concat(myarray2);
console.log(myarray3);// here we have concat both the array concat method returns a new array
console.log(myarray3.join());


//spread operator//
//nowadays companies are using spread operator in place of concat 
//through spread operator we can concat more than 2 arrays
const ar=[...myarraay,...myarray2,...myarray3]
console.log(ar);


//FLAT method//
const new_array=[1,2,3,[4,5,6],[7,8,9,[0,1,2,3]]]//this is array whose depth is 3
//to make it a simple array we use flat method
const real_new_array=new_array.flat(Infinity);//here we had given depth infinity but we should give the real depth also here which is 3
console.log(real_new_array);


//to convert any string ,objects etc into array
console.log(Array.from("TWARIT"))


//TO CHECK WHETHER IT IS A ARRAY OR NOT
console.log(Array.isArray("TWARIT"))
const qwerty=Array.from("asdfghjkl") //here we have converted an string into an array and then printing it  
console.log(qwerty);
//vvvimp
console.log(Array.from({name:"Twarit"}))//it return an empty array as it doesnt know whether it has to convert key or value into array
//of method in array
let score1=1000
let score2=2000
let score3=3000
console.log(Array.of(score1,score2,score3))//it will return an array of elements
