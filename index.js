//grab the elements

const randomText = document.getElementById("textBox");
 const goBtn = document.getElementById("go-btn");
 let resultDiv = document.getElementById("parentDiv");
 let aWord = document.createElement("div");

// create a way for the words in any random sentence to be automatically capitalized.


let newArray = [];


function capitalizeAll(text) {
    return text
    .toLowerCase()
    .split(' ')
    .forEach((word) => {
        newArray.push(word.charAt(0).toUpperCase() + word.substring(1));
        
        resultDiv = document.getElementById("parentDiv");
        aWord.textContent="";
             for (let i = 0; i < newArray.length; i++) {
                 let aWord = document.createElement('div')
                 aWord.textContent = newArray[i] + " ";
                 resultDiv.append(aWord)
         }})      

    }

goBtn.addEventListener('click', function(e) {
    e.preventDefault();
    return (capitalizeAll(randomText.value));
})

