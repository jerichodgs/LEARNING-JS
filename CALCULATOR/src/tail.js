
/* sum(displayPage, 7, 4)

function sum(callback, x, y){
    let result = x + y;
    callback(result)
}

function displayConsole(result){
    console.log(`The result is ${result}`);
}

function displayPage(result){
    document.getElementById("sumOutput").textContent = `the result is ${result}`;
}
*/

// elements index array//

/* let fruits = ["Apples", "Oranges", "Banana", "Grapes"];

fruits.forEach(function (elements, index, array){
    array[index] = elements.toLowerCase();
    
});

function displaying(){fruits.forEach(function display(elements){
    console.log(elements);
})};

displaying();

setTimeout(function(){
    console.clear()
    fruits.forEach(function (elements, index, array){
        array[index] = elements.toUpperCase();
    });
    displaying();
}, 1000);
*/

document.getElementById("displayOutput");
document.getElementById("btn1");
document.getElementById("btn2");
document.getElementById("btn3");
document.getElementById("btn4");
document.getElementById("btn5");
document.getElementById("btn6");
document.getElementById("btn7");
document.getElementById("btn8");
document.getElementById("btn9");
document.getElementById("btn0");
document.getElementById("btndot");

btnclear.onclick = function(){
    displayOutput.textContent = "";
}
btn0.onclick = function(){
    displayOutput.textContent =+ `0`;
}
btn1.onclick = function(){
    displayOutput.textContent =+ `1`;
}
btn2.onclick = function(){
    displayOutput.textContent = "";
}
btn3.onclick = function(){
    displayOutput.textContent = "";
}
btn4.onclick = function(){
    displayOutput.textContent = "";
}
btn5.onclick = function(){
    displayOutput.textContent = "";
}
btn6.onclick = function(){
    displayOutput.textContent = "";
}
btn7.onclick = function(){
    displayOutput.textContent = "";
}
btn8.onclick = function(){
    displayOutput.textContent = "";
}
btn9.onclick = function(){
    displayOutput.textContent = "";
}
btndot.onclick = function(){
    displayOutput.textContent = "";
}


