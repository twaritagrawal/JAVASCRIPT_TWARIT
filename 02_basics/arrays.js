// const MyArr=[0,1,2,3,4,5,6,7,8,9,10]
// const MyArr2=["twarit","samridh","hello"]
// console.log(MyArr2[0]);
// console.log(MyArr2[2]);


// const MyArray=new Array(1,2,3,14,5,8,7,9,1,58,4,26,8,)
// console.log(MyArray[5]);
// console.log(MyArr2.length);//length is a method not a function
// console.log(MyArr.length);
// console.log(MyArray.length);
// console.log(MyArray);
// MyArray.push(12546)
// console.log(MyArray);
// MyArray.pop()
// console.log(MyArray);
// //unshift function
// MyArray.unshift(45) //45 IS ADDED IN THE FRONT
// console.log(MyArray);
// //shift function
// MyArray.shift()//front element is removed
// console.log(MyArray);
// //bool funtion like checking it includes or not
// console.log(MyArray.includes(7899)); //return true or false
// //finding index of the element 
// console.log(MyArray.indexOf(7899)); //rteurn -1 as 7899 is not present in MyArray
// //join function 
// const newarray=MyArray.join() //join function is used to convert the arrray  to string 
// console.log(newarray);
// console.log(typeof newarray);

//very important slice and splice

const myarray=[1,2,3,4,5,6,7,8,9]
const myn1=myarray.slice(0,4);
console.log("A",myn1); // it print elemnt from index 0 to 3 and it doesnot cahnge the  orignal array
console.log("orignal array",myarray);
//splice
const myn2=myarray.splice(0,4);
console.log("B",myn2);  //myn2 contains element from 0 to 4 the whole range without excluding the last index
console.log("orignal array",myarray); // in case of splive the orignal array is also changed thatit trimed from index 0 to 4