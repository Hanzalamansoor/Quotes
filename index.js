const increase = document.getElementById("increase-btn")
const reset = document.getElementById("reset-btn")
const decrease = document.getElementById("decrease-btn")
const myLabel = document.getElementById("myLabel")


let count = 0;


increase.onclick = function () {
    count++
    myLabel.textContent = count
}

decrease.onclick = function () {
    count--
    myLabel.textContent = count
}

reset.onclick = function () {
    count = 0
    myLabel.textContent = count
}