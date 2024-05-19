//for of loop
let arr = [1,2,3,4,5,6,7,8,9,10];
for (const num of arr) {
    console.log(num);
}

const strings="Twarit Agrawal"
for (const i of strings) {
    console.log(i);
}
//MAPS {jis order mai insert hogi vaise hi ordered rhegi and only unique key will be there}
const map=new Map();
map.set('1',"one")
map.set('2',"two")
map.set('3',"three")


console.log(map);

for (const key  of map) {
    console.log(key);
}

for (const [key] of map) {
    console.log(key);
}

for (const [key,value] of map) {
    console.log(key,':-',value);
}

// const myObj={
//     'game1':'nfs',
//     'game2':'spd'
// }
//as objects are not iterable by for of loop {vvi}
// for (const i of myObj) {
//     console.log(i);
// }




//for in loop

//for each loop

// let arr = [1,2,3,4,5,6,7,8,9,10];