
 // * Program:  4_2.js -  Exersise 4.2

 // * purpose:  Output: The first 20 Fibonacci numbers, which are defined as in the
//sequence
//1, 1, 2, 3, . . .
//where each number in the sequence after the second is the sum of the
//two previous numbers. You must use document.write to produce
//the output. 


 // * Objectives: 1) Comments; 2) tags ; 3)elements ; 4)documentation 

  //* Class: CSC 3323 - Web Programming; Fall 2020; TR: 645PM - 800PM  

 // * Instructor: Dr. Fazelpour - Copyright © 2020  

 // * Programmer(s): Team 1 - Rumancik, Zach (ZWR); Ragoonanan, Jaggan (DD)   

 // * Date: 10/01/2020  


// 4.2 Output: The first 20 Fibonacci numbers, which are defined as in the
// sequence
// 1, 1, 2, 3, . . .
// where each number in the sequence after the second is the sum of the
// two previous numbers. You must use document.write to produce
// the output.

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
const fib2Arr = Fib2(20)
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