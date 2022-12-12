let userInput = document.querySelector("#user-inpt")
let output = document.querySelector("#output")
const translate = document.querySelector("#submit")


const response = fetch("https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json")
    .then((response) => {
        console.log(response)
    }).catch(err => {
        console.log(err)
    })

translate.addEventListener("click", userOutput)


function userOutput() {
    output.textContent = userInput.value
}