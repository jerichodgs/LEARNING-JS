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
    /*let x = "";
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
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const myP = document.getElementById("myP");

let number = myP.textContent = 0;
number = Number(number);

increaseBtn.onclick = function(){
    number += 1;
    document.getElementById("myP").textContent = number;
}
decreaseBtn.onclick = function(){
    number -= 1 ;
    document.getElementById("myP").textContent = number;
}
resetBtn.onclick = function(){
    number = 0;
    document.getElementById("myP").textContent = number;
}

