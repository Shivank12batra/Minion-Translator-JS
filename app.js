let button = document.getElementById('translate-btn');
let text = document.querySelector('.text-area');
let output = document.getElementById('output');

let url = 'https://api.funtranslations.com/translate/minion.json'

function urlConcatenate(text) {
    return url + "?" + "text=" + text
}

function errorHandler(error) {
    console.log('error occured', error)
    alert('something wrong with the server! please try again after some time!')
}

function clickHandler() {
    var inputText = text.value

    // calling the server for processing
    fetch(urlConcatenate(inputText))
    .then(response => response.json())
    .then(json => {
        var outputText = json.contents.translated;
        output.innerText = outputText;
    })
    .catch(errorHandler)
}

button.addEventListener('click', clickHandler)
