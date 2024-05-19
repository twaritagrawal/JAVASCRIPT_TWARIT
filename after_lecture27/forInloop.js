const myObj={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swify by apple'
}

for (const key in myObj) {
  console.log(key);  
  //only key got printed
}



for (const key in myObj) {
    console.log(myObj[key]);
    //only value got printed 
}

for (const key in myObj) {
    console.log(key,':-',myObj[key]);
    //both key and value got printed
}

const myarr=["cpp","js","py","rb"]
for (const i in myarr) {
   //console.log(i);//yha key print ho rha hai in case of array
   console.log(myarr[i]);
}
const map=new Map();
map.set('1',"one")
map.set('2',"two")
map.set('3',"three")

for (const key in map) {
    console.log(key);//yha kuch print nhu ho rha kyu ki maps iterable nhi hai
}