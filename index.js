//grab the elements

//const randomText = document.getElementById("textBox");
// const goBtn = document.getElementById("go-btn");
// const resultDiv = document.getElementById("parentDiv");
// const result = document.createElement("p");

// create a way for the words in any random sentence to be automatically capitalized.

const quote = "happy little critters abound.";

function jadenCase(text) {
    //var text = randomText.value;
    return text.split('').map(array, text.toUpperCase()).join('');
}

console.log(jadenCase(quote));