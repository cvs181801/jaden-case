//grab the elements

//const randomText = document.getElementById("textBox");
// const goBtn = document.getElementById("go-btn");
// const resultDiv = document.getElementById("parentDiv");
// const result = document.createElement("p");

// create a way for the words in any random sentence to be automatically capitalized.

const quote = "happy little critters abound";

// function capitalizeEachWord(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }

// function jadenCase(text) {
//     //var text = randomText.value;
//     return text.split('').forEach((word)=> {
//         capitalizeEachWord(word)
//         })
//     }
// console.log(jadenCase(quote));

//.join('')

function capitalizeAll(text) {
    return text
    .toLowerCase()
    .split(' ')
    .forEach((word) => {
        console.log(word.charAt(0).toUpperCase() + word.substring(1))
        })//.join(' ');
        //word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase());
        //
}

console.log(capitalizeAll(quote));