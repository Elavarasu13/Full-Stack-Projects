//hoisting is applied all the variables  

console.log(a) // reference error
let a = 10;

console.log( b) // reference error, we cannot access before declaration
const b = 10;

console.log(c)  //undefined 
var c = 10;     // begining of javascripts  but let and const are after es6 they have a scopin rules

sentInvite();

function sentInvite(){
    console.log("Invites sent to all");
}

// ✅ Key takeaway:

// Functions → fully hoisted → safe to call before declaration

// var variables → declaration hoisted, assignment stays → initially undefined

// let / const → hoisted but in temporal dead zone, cannot use before definition

