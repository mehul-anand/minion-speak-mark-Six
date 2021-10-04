# Minion Translator 

### A web app which translates English to Banana

## Contents 

- Header 
- Input Box
- Translate Button
- Output Box
- Footer

## Working

- We used the `<textarea>` tag to take User's Input and a `placeholder` 
- We used an ID to connect HTML to JS via `document.querySelector(""name-of-the-id)`
- We used a `<button>` tag which calls a function when clicked 
- The function uses the input text and uses and api (from fun translations) which comverts normal text (english) to banana (minion language)
- Here to use the api we add the text along with a `?` 
 Example 👇
 `"https://api.funtranslations.com/translate/minion.json"+"?"+"text="+input(userInput)`
 - We save this new url and then use fetch
 ```fetch(newURl)
        .then(Response => Response.json())
        .then(json => {
            outputDiv.innerText = json.contents.translated
        })
}
```
- here in fetch we used the `=>` , `.then` and `.json` 
- we used `.contents.translated` to access onlt the translated text from the result 
- Here the `outputDiv` is made using the `<div>` tag with an ID to connect to JS
- In JS we used `.innerText` to acces this div and display the output
 
