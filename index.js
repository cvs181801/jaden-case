//grab the elements

//const randomText = document.getElementById("textBox");
// const goBtn = document.getElementById("go-btn");
// const resultDiv = document.getElementById("parentDiv");
// const result = document.createElement("p");

// create a way for the words in any random sentence to be automatically capitalized.

const quote = "happy little critters abound.";

// function jadenCase(text) {
//     //var text = randomText.value;
//     return text.split('').join('');
// }

// console.log(jadenCase(quote));

//.map(text.toUpperCase())

function capitalizeEachWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(capitalizeEachWord(quote));