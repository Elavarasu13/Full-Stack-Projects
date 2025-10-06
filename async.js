//Callbacks

console.log("Start");

setTimeout(() => {
    console.log("I run after 5 seconds");
},5000)

console.log("End");

//Sync callback

const greet = ((name,callback)=>{
    console.log("Hello" + name);
    callback();
})

greet("Elavarasan",() => console.log("Goodbye"));  //or

function greets(name,callback){
    console.log("Hello"+ name);
    callback("Elan");
}

function sayGoodbye(e)
{
    console.log("Goodbye"+ e );
}

greets("Elan",sayGoodbye);