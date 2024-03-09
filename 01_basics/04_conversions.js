console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);

console.log("2">1);
console.log("02">1);
//in this case js has converted the string into number and then compares it
//but in some cases it does not gives the predictable result and this is also one of the differnce between javascript and typescript
console.log(null>0);
console.log(null==0);
console.log(null>=0);
//the output is different because == operator and <,>,<=,>= works differently
console.log("2"===2);//here it is checking for the same datatype as well
