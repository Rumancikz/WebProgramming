//  * Program:  4_4.js -  Exersise 4.4

// * purpose: Modify the script of Exercise 4.2 to use prompt to input a number n
// that is the number of the Fibonacci number required as output. 


// * Objectives: 1) Comments; 2) tags ; 3)elements ; 4)documentation 

// * Class: CSC 3323 - Web Programming; Fall 2020; TR: 645PM - 800PM  

// * Instructor: Dr. Fazelpour - Copyright © 2020  

// * Programmer(s): Team 1 - Rumancik, Zach (ZWR); Ragoonanan, Jaggan (DD)   

// * Date: 10/04/2020   

// 4.4 Modify the script of Exercise 4.2 to use prompt to input a number n
// that is the number of the Fibonacci number required as output.

// This is a function that will write the first 20 fibonacci numbers in the series
function yeaOkThatWorks(stringThing) {
    document.open();
    document.write(`<h1>${stringThing}</h1>`);
    document.close();
}

// This function will carry out the fibonacci sequence
function Fib2(intNumber) {
    let fibArr = []
    for (let i = 0; i <= intNumber; i++){
        if (i === 0){
            fibArr[0] = 0
        }else if (i === 1){
            fibArr[1] = 1
        }else{
            fibArr[i] = fibArr[i-1] +  fibArr[i-2]
        }
    }
    return fibArr
}
// This will take the user input and give back the the fibonacci squence number that put in
let toPrint = ""
//gets user input and converts it to int
const FirstTheKiss = parseInt(prompt('How many Fibonacci iterations would you like to run? (int): '))
//initiates the function Fib2
const fib2Arr = Fib2(FirstTheKiss)
//map/loops over each index
fib2Arr.map(index => {
    //compares each index to see if it is 0
    if (index !== 0){
        if (fib2Arr.indexOf(index) === (fib2Arr.length -1)){
            toPrint += `${index}`
        }else{
            toPrint += `${index}, `
        }
    }
})
//runs the function to display the text on the page
yeaOkThatWorks(toPrint)