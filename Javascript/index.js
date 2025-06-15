// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let countstr = count + "-"
    saveEl.textContent += countstr
    console.log(count)
    countEl.innerText=0
    count=0
}