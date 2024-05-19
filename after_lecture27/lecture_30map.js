//const numbers=[1,2,3,4,5,6,7,8,9]

// const newnums=numbers.map((nums)=> nums+10)
// //if we declare scope the we have to use return keyword
// const newnums2=numbers.map((nums)=> {
//     return nums+10
// })

// console.log(newnums)
// console.log(newnums2)

//the same can be done with foreach loop butin different way
// const newnums3=[]
// numbers.forEach((nums)=>{
//     newnums3.push(nums+10)
// })
// console.log(newnums3);


//{important question difference between map and filter}

//chaining of map and filter
const numbers=[1,2,3,4,5,6,7,8,9]
let newnums=numbers.map((nums)=> nums+10).map((nums)=> nums*2)
console.log(newnums)
//chaining of map and filter
newnums=numbers.map((nums)=> nums+10).map((nums)=> nums*2).filter((num)=> num>30)
console.log(newnums)
