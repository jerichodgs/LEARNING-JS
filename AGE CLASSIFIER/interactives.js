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
/*const myLabel = document.getElementById("randomNum");
const myButton = document.getElementById("generateBtn");
const min = 1;
const max = 100;
let randomNum;

myLabel.textContent = "0"

myButton.onclick = function() {
    randomNum = Math.floor(Math.random() * max);
    myLabel.textContent = randomNum;
} */

//PART 6
let ageClass = document.getElementById("ageClass");
let enterBtn = document.getElementById("enterBtn");

enterBtn.onclick = function() {
let ageInput = document.getElementById("ageInput").value;

    if (ageInput == ""){
        ageClass.textContent = `Enter your age first!`
        return;
    }

ageInput = Number(ageInput);

    if (ageInput < 0){
        ageClass.textContent = `You are not born yet.`
    }
    else if (ageInput == 0){
        ageClass.textContent = `You are an infant.`
    }
    else if (ageInput <= 17){
        ageClass.textContent = `You are a child.`
    }
    else if (ageInput <= 40){
        ageClass.textContent = `You are an adult.`
    }
    else if (ageInput <= 100){
        ageClass.textContent = `You are old.`
    }
    else if (ageInput > 100){
        ageClass.textContent = `You are too old!`
}
}



