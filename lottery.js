function getRandomSixDigitNumber () {
    const randomSixDigitNumber = 
    Math.floor(Math.random() * 8 + 1).toString() +
    Math.floor(Math.random() * 9).toString() +
    Math.floor(Math.random() * 9).toString() +
    Math.floor(Math.random() * 9).toString() +
    Math.floor(Math.random() * 9).toString() +
    Math.floor(Math.random() * 8 + 1).toString()
    return randomSixDigitNumber
}


let arrGuesses
let guessCorrectly = false
let numGuesses = 0
// while (guessCorrectly === false) {
const LottoNumber = getRandomSixDigitNumber()
let numberOfGuesses = 0
let guesses = []

while (guessCorrectly === false) {
    numberOfGuesses += 1
    const guess = getRandomSixDigitNumber()
    guess === LottoNumber ?  guessCorrectly = true : guessCorrectly = false
}
console.log(`It took the computer ${numberOfGuesses} guesses to win the lottery!`);

//     while (numberOfGuesses < 10){
//         numberOfGuesses += 1
//         const guess = getRandomSixDigitNumber()
//         guess === LottoNumber ?  guessCorrectly = true : guessCorrectly = false
//         guesses = [...guesses, guess]
//     }
//     guessCorrectly === true ? arrGuesses = [...guesses] : null
//     guessCorrectly === true ? numGuesses = numberOfGuesses : null
// }
// console.log(`It took the computer ${numGuesses} guesses to win the lottery!`);
// console.log(arrGuesses);




