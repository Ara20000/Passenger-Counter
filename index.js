let count = 0
let countStatistics = document.getElementById('count-el')

let welcomeEl = document.getElementById('welcome-el')
let myName = "Rebecca Aghomon"
let greeting = "Welcome back, "
let myGreeting = greeting + myName

let saveEl = document.getElementById('save-el')

welcomeEl.innerText = myGreeting
welcomeEl.innerText += "👋"

function increment() {
    count = count + 1
    countStatistics.innerText = count
}

function save() {
   let saveCount = count + " - "
//    saveEl.innerText += " " + saveCount
    saveEl.textContent += saveCount
    countStatistics.innerText = 0
    count = 0

}