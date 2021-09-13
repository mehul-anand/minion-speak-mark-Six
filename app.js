var btnTranslate=document.querySelector("#btn-translate")
var txtInput=document.querySelector("#text-input")
var outputDiv=document.querySelector("#output")

var serverURL="https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input){
    var text = serverURL + "?" + "text=" + input
    console.log("text in fn="+text)
    return text
}

function errorHandler(error){
    console.log("An Error Occured",error)
    alert("Something is not right , please try again later")
}

function clickHandler(){
    var inputText=txtInput.value;
    console.log("txtInput val="+inputText)
    var newURl=getTranslationURL(inputText)
    fetch(newURl)
        .then(Response => Response.json())
        .then(json => {
            outputDiv.innerText=json.contents.translated
        })
        .catch(errorHandler)
}

btnTranslate.addEventListener("click",clickHandler)