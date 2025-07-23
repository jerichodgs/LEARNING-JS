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
/*const increaseBtn = document.getElementById("increaseBtn");
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
*/

//PART6
const iPhone = document.getElementById("iPhone");
const samSung = document.getElementById("samSung");
const codBtn = document.getElementById("codBtn");
const gcashBtn = document.getElementById("gcashBtn");
const paymayaBtn = document.getElementById("paymayaBtn");
const obBtn = document.getElementById("obBtn");
const confirmBtn = document.getElementById("confirmBtn");
const orderResult = document.getElementById("orderResult");

const samsungphone = "Samsung Galaxy S25 Edge";
const applephone = "Iphone 16 Pro Max";
const paymaya = "PayMaya";
const gcash = "Gcash";
const onlinebanking = "Online Banking";
const cashondelivery = "Cash on Delivery";

confirmBtn.onclick = function(){

    if(iPhone.checked && samSung.checked ){
            if(codBtn.checked){
                orderResult.innerHTML = `You ordered: <strong>${samsungphone}</strong>, <strong>${applephone}</strong> and chose <strong>${cashondelivery}</strong> as mode of payment. Thank you for your order!`;
            }
            else if(gcashBtn.checked){
                orderResult.innerHTML = `You ordered: <strong>${samsungphone}</strong>, <strong>${applephone}</strong> and chose <strong>${gcash}</strong> as mode of payment. Thank you for your order!`;
            }
            else if(paymayaBtn.checked){
                orderResult.innerHTML = `You ordered: <strong>${samsungphone}</strong>, <strong>${applephone}</strong> and chose <strong>${paymaya}</strong> as mode of payment. Thank you for your order!`;
            }
            else if(obBtn.checked){
                orderResult.innerHTML = `You ordered: <strong>${samsungphone}</strong>, <strong>${applephone}</strong> and chose <strong>${onlinebanking}</strong> as mode of payment. Thank you for your order!`;
            }
        }

    else if(iPhone.checked){
        if(codBtn.checked){
            orderResult.innerHTML = `You ordered: <strong>${applephone}</strong> and chose <strong>${cashondelivery}</strong> as mode of payment. Thank you for your order!`;
        }
        else if(gcashBtn.checked){
            orderResult.innerHTML = `You ordered: <strong>${applephone}</strong> and chose <strong>${gcash}</strong> as mode of payment. Thank you for your order!`;
        }
        else if(paymayaBtn.checked){
            orderResult.innerHTML = `You ordered: <strong>${applephone}</strong> and chose <strong>${paymaya}</strong> as mode of payment. Thank you for your order!`;
        }
        else if(obBtn.checked){
            orderResult.innerHTML = `You ordered: <strong>${applephone}</strong> and chose <strong>${onlinebanking}</strong> as mode of payment. Thank you for your order!`;
        }
    }

    else if(samSung.checked){
        if(codBtn.checked){
            orderResult.innerHTML = `You ordered: <strong>${samsungphone}</strong> and chose <strong>${cashondelivery}</strong> as mode of payment. Thank you for your order!`;
        }
        else if(gcashBtn.checked){
            orderResult.innerHTML = `You ordered: <strong>${samsungphone}</strong> and chose <strong>${gcash}</strong> as mode of payment. Thank you for your order!`;
        }
        else if(paymayaBtn.checked){
            orderResult.innerHTML = `You ordered: <strong>${samsungphone}</strong> and chose <strong>${paymaya}</strong> as mode of payment. Thank you for your order!`;
        }
        else if(obBtn.checked){
            orderResult.innerHTML = `You ordered: <strong>${samsungphone}</strong> and chose <strong>${onlinebanking}</strong> as mode of payment. Thank you for your order!`;
        }
    }

    else{
        orderResult.textContent = `Your order was not completed.`;
    }

}

// PART 6 ALTERNATIVE
/*const iPhone = document.getElementById("iPhone");
const samSung = document.getElementById("samSung");
const confirmBtn = document.getElementById("confirmBtn");
const orderResult = document.getElementById("orderResult");

// Payment buttons
const paymentOptions = [
  { btn: document.getElementById("codBtn"), name: "Cash on Delivery" },
  { btn: document.getElementById("gcashBtn"), name: "Gcash" },
  { btn: document.getElementById("paymayaBtn"), name: "PayMaya" },
  { btn: document.getElementById("obBtn"), name: "Online Banking" },
];

// Phone names
const phones = {
  iPhone: "Iphone 16 Pro Max",
  samSung: "Samsung Galaxy S25 Edge"
};

confirmBtn.onclick = function () {
  let selectedPhones = [];

  if (iPhone.checked) selectedPhones.push(phones.iPhone);
  if (samSung.checked) selectedPhones.push(phones.samSung);

  let selectedPayment = paymentOptions.find(option => option.btn.checked);

  if (selectedPhones.length > 0 && selectedPayment) {
    orderResult.innerHTML = `You ordered: <strong>${selectedPhones.join(", ")}</strong> and chose <strong>${selectedPayment.name}</strong> as mode of payment. Thank you for your order!`;
  } else {
    orderResult.textContent = `Your order was not completed.`;
  }
}; */
