let firstName="Lefa"; // Add semicolon at the end

let age=16; // Add semicolon at the end

let studentsNames =["Thandi", "Paul"]; // Add semicolon at the end

let personInfo ={
"name":"Lefa",
"age": 12
}; // Add semicolon at the end

//Nodelist
//let p1Element = document.querySelectorAll("p")[0];
let p1Element = document.querySelectorAll("p")[0];
let p1Content = p1Element.textContent;

//console.log(p1Content);


//adding a new element

function getfullName (lastName , firstName) {
    let tempFName = firstName + "" + lastName
    return tempFName;
}

let fullName = getfullName ("Lefa", "Jele-Masemola")
console.log(fullName)

//creatting new element
const myButton = document.createElement("button")   
myButton.textContent = "Console Hello"

function printMessage(params) {
    console.log("Hello basic webpage")
}

myButton.addEventListener("click", printMessage)
document.body.insertBefore(myButton, p1Element)
