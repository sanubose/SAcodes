// function sum(a,b){
//     return a+b;
// }

// console.log(sum(5,4));

//function
// function greet( name){
//    console.log(name+" hello welcome to my world")
// }
// greet('ram');



// Anonymous

// var result = function (a,b){
//      console.log(a+b)
// }
// result(10,15);

//
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(`${greet("Sanu")}`);
// Output: Hello, Sanu!
//Nested Template Literals
let user = "Sanu";
let age = 25;
let info = `User: ${user}, Age: ${age > 18 ? "Adult" : "Minor"}`;
console.log(info);
// Output: User: Sanu, Age: Adult

function tagExample(strings, name, age) {
    return `${strings[0]}${name.toUpperCase()}${strings[1]}${age}`;
}

let output = tagExample`Name: ${"sanu"}, Age: ${25}`;
console.log(output);
// Output: Name: SANU, Age: 25
