//PART 1
//console.log(`Hello World`)
//console.log(`I like whoppers`)

//window.alert(`This is an alert!!!!!!!!`)
//window.alert(`I like whoppers`)

//document.getElementById("hello1").textContent = `hello`;
//document.getElementById("pizza1").textContent = `i like burgers`;

//PART 2
//let username;

/*document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Welcome ${username}!`;
    console.log(`The user inputted: ${username}`);
    document.getElementById("myText").value = "";
}  */

//PART 3
/*  let x = "";
    let y = "";
    let z = "";

    x = Number (x);
    y = String  (y);
    z = Boolean (z);

    console.log(x, typeof x);
    console.log(y, typeof y);
    console.log(z, typeof z); */

//PART 4
/*const pi = 3.14;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * pi * radius;
    document.getElementById("myP").textContent = `The circumference of the circle is: ${circumference}cm`;
    console.log(`The circumference of the circle is: ${circumference}cm`); 
}
*/

//PART 5
//RANDOM NUMBER GENERATOR
/* const myLabel = document.getElementById("randomNum");
const myButton = document.getElementById("generateBtn");
const min = 0;
const max = 100;
let randomNum;

myLabel.textContent = "0"

myButton.onclick = function() {
    randomNum = Math.floor(Math.random() * (max - min)) + min ;
    myLabel.textContent = randomNum;
} */

//PART 7
/*
let studentScore = asd;
let gradeClass;

switch (true){
    case studentScore >= 90:
        gradeClass = "A";
        break;
    case studentScore >= 80:
        gradeClass = "B";
        break;
    case studentScore >= 70:
        gradeClass = "F";
        break;
    default:
        gradeClass = "Incomplete"
}
console.log(gradeClass); */

//PART 8
/*let fullName = "Jose Jericho Sineneng";

let firstName = fullName.slice(0, fullName.indexOf(" "));
let middleName =  fullName.slice(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" "));
let lastName = fullName.slice(fullName.lastIndexOf(" ") + 1);

console.log(firstName);
console.log(middleName)
console.log(lastName);
*/

//PART 9
/*
let userName = window.prompt("Enter your username: ").trim();

let finalName = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
console.log(finalName);
*/

//PART 10
/*
for (i=1; i<=20; i++){
    if(i==13){
        continue;
    }
    else(console.log(i))
}
*/

//PART 11
/*
const minNum = 1;
const maxNum = 100;
const correctNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let numberInput = document.getElementById("numberInput");
let numberOutput = document.getElementById("numberOutput");
let messageOutput = document.getElementById("messageOutput");
let messageOutput2 = document.getElementById("messageOutput");
let submitBtn = document.getElementById("submitBtn");

submitBtn.onclick = function () {
    let userInput = Number(numberInput.value);

        if (userInput < minNum || userInput > maxNum) {
            messageOutput.textContent = `Please enter a number between ${minNum} and ${maxNum}. 😄`;
            numberOutput.textContent = `The number you entered is not in between ${minNum} and ${maxNum}.`;
            return;
        }

        numberInput.value = "";
        numberOutput.textContent = `You guessed: ${userInput}`;

        if (userInput === correctNumber) {
            messageOutput.textContent = `🎉 Congratulations! You guessed the correct number: ${correctNumber}`;
            submitBtn.disabled = true;
        } else if (userInput > correctNumber) {
            messageOutput.textContent = "Too high!";
        } else if (isNaN(userInput)) {
        messageOutput.textContent = "Please enter a valid number.";
        } else {
            messageOutput.textContent = "Too low!";
        }
}
        */
//PART 12
/*
function isValid(email){
    if (email.includes("@") && email.includes(".com")){
        return true
    }
    else {
        return false;
    }
}

console.log(isValid("joko@email.com"));
*/

//PART13
let input = document.getElementById("numberInput");
let output = document.getElementById("numberOutput");
let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let convert = document.getElementById("submitBtn")

convert.onclick = function(){
    let inputValue = input.value;

        if (inputValue === ""){
            output.value = " ERROR!";}
        else if (inputValue !== ""){
            let numberValue = Number(inputValue);

            if (fahrenheit.checked && numberValue === ""  || isNaN(numberValue) || celsius.checked && numberValue === ""){
                    output.value = " ERROR!";}

            else if (!fahrenheit.checked && !celsius.checked){
                    output.value = " ERROR!";}

            else if (celsius.checked && numberValue >= 0 && numberValue !== ""|| celsius.checked && numberValue < 0 && numberValue !== "") {
                let result = (numberValue - 32) * 5 / 9;
                output.value = result.toFixed(2) + " °C";}

            else if (fahrenheit.checked && numberValue >= 0 && numberValue !== ""|| fahrenheit.checked && numberValue < 0 && numberValue !== "") {
                let result = (numberValue * 9 / 5) + 32;
                output.value = result.toFixed(2) + " °F";
                }
            }
        }

