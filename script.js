let userInput = document.querySelector("#user-inpt")
let output = document.querySelector("#output")
const translate = document.querySelector("#submit")


const response = fetch("https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json")
    .then(function responseHandler(response) { return response.json() })
    .then(function logJson(json) { console.log(json) })

translate.addEventListener("click", userOutput)


function userOutput() {
    output.textContent = userInput.value
}