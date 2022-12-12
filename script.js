let userInput = document.querySelector("#user-inpt")
let output = document.querySelector("#output")
const translate = document.querySelector("#submit")

translate.addEventListener("click", clickhandler)

function getTranslationUrl(text) {
    return serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json" + "?" + "text+" + text
}

function clickhandler(serverUrl) {
    var inputText = userInput.value
    fetch(getTranslationUrl(inputText))
        .then((response) => response.json)
        .then((json) => console.log(json))
}