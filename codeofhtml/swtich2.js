// Question (Extracted from the Image)
// You need to write a JavaScript switch statement that takes a variable areaOfShapes representing different shapes and calculates and logs the area of the corresponding shape.

// The possible shapes are:

// "Rectangle" → Use variables a and b as the sides.
// "Circle" → Use a variable r as the radius.
// "Square" → Use a variable a as the side length.
// If the shape is not recognized, log the message:
// "Sorry, the shape is not available."

// Test Case:

// Set areaOfShapes = "Square"
// Set a = 5
// Set b = 10 (for rectangle)
// Set r = 5 (for circle)
// Ensure the correct area 25 is logged for "Square".



let areaOfShapes = "Square"; // Change this to "Rectangle" or "Circle" to test
let a = 5, b = 10, r = 5; // Side lengths for square & rectangle, radius for circle


switch(areaOfShapes){
case "rectangle":
    console.log("R" + (a*b));
    break;

case "circle":
    console.log(" C " + (3.14*r*r));
    break;
case "square":
    console.log(" S " +(a*a));
    break;

default:
    console.log("sorry your shape is not here")
}