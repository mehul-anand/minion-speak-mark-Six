var btnTranslate=document.querySelector("#btn-translate")
var txtInput=document.querySelector("#text-input")
var outputDiv=document.querySelector("#output")

var serverURL="https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input){
    var text = serverURL + "?" + "text=" + input
    console.log("text in fn="+text)
    return text
}
