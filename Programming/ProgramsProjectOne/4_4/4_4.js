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


function yeaOkThatWorks(stringThing) {
    document.open();
    document.write(`<h1>${stringThing}</h1>`);
    document.close();
}


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
let toPrint = ""
const FirstTheKiss = parseInt(prompt('How many Fibonacci iterations would you like to run? (int): '))
const fib2Arr = Fib2(FirstTheKiss)
fib2Arr.map(index => {
    if (index !== 0){
        if (fib2Arr.indexOf(index) === (fib2Arr.length -1)){
            toPrint += `${index}`
        }else{
            toPrint += `${index}, `
        }
    }
})
yeaOkThatWorks(toPrint)