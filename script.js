let userInput = document.querySelector("#user-inpt")
let output = document.querySelector("#output")
const translate = document.querySelector("#submit")

serverUrl = "https://api.funtranslations.com/translate/minion.json"

function errorHandler(error) { console.log(`error ocurred ${error}`) }

function getTranslationUrl(text) {
    return serverUrl + "?" + "text=" + text
}

function clickhandler() {
    var inputText = userInput.value
    fetch(getTranslationUrl(inputText))
        .then(response => response.json())
        .then(json => {
            output.textContent = json.contents.translated

        })
        .catch(errorHandler)
}

translate.addEventListener("click", clickhandler)