let num1 = 1
let num2 = 3

document.getElementById("num1-el").textContent=num1
document.getElementById("num2-el").textContent=num2

function add(){
    let printnum = num1+num2
    console.log(printnum)
    document.getElementById("sum-el").innerText= "Sum: "+ printnum
}

function subtract(){
    let printnum = num1-num2
    console.log(printnum)
    document.getElementById("sum-el").innerText= "Sum: "+ printnum
}

function divide(){
    let printnum = num1/num2
    console.log(printnum)
    document.getElementById("sum-el").innerText= "Sum: "+ printnum
}

function multiply(){
    let printnum = num1*num2
    console.log(printnum)
    document.getElementById("sum-el").innerText= "Sum: "+ printnum
}