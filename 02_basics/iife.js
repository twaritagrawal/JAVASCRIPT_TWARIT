
//named iife
(function chai(){
    console.log("DB CONNECTED");
})();
//here arrow is to end the imediately invoked function

//unnamed iife
(()=>{
    console.log('db2 connected')
})();

//parameterized iife
((name)=>{
    console.log(`db3 connected ${name}`)
})('honey');

//important points if we have to write more than one iife then we have to use semicolon otherwise no need