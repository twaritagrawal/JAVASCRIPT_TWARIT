  const coding=["cpp","js","py","rb"]
//callback function mai name nhi hota hai

// coding.forEach( function (item) {
// console.log(item);
// })

//using arrow function
// coding.forEach( (item) =>{
//     console.log(item);
// } )

//using another function in foreach loop
// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)

//for each loop mai aur bhi accesss hota i.e index and array bhi aata hai 
// coding.forEach((item,index,arr)=>{
//     console.log(item);
//     console.log(index);
//     console.log(arr);
// })


//iterating array of object{vvi}
const mycoding=[
    {
        name:"cpp",
        value:"c++"
    },
    {
         name:"js",
         value:"javascript"
    },
    {
        name:"py",
        value:"python"
    }
]
mycoding.forEach((item)=>{
    console.log(item.name,item.value);
 
})
