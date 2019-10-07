alert("Hello World");


  

var firstName = "Jane";                     // String type variable
var lastName = "Doe";                       // String type variable
var age = 35;                               // Number type variable
var married = true;                         // Boolean type variable
var childrenNames = ["Alice", "Bob"];       // Array type variable

var fullName = firstName + " " + lastName;        // Concatenation operator
var dogYears = age/7;                             // Arithmetic Operator
var isAdult = dogYears > 4;                       // Comparison operator
var isSettled = isAdult && married; 



function getFullName(firstName, lastName) {     // Function name
    return  firstName + " " + lastName;         // Returned value
}

var fullName = getFullName(firstName, lastName);   // Using variables
var fullName = getFullName("Alice", "Doe");        // Using values

document.write(fullName);
console.log(fullName); 

if (isSettled) {
    document.write(fullName + " is settled.");
} else {
    document.write(fullName + " is not settled.");
}

childrenNames.forEach(function(childName) {
    document.write("<li>" + childName + "</li>"); 
});

function sayHello() {
    alert("Hello there!"); 
    document.getElementById("hidden").style.display = "none"; 
}

