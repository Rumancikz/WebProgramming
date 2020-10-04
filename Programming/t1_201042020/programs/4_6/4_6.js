//  * Program:  4_6.js -  Exersise 4.6

// * purpose: Create a program that splits and sorts text in alphabetical order. It is then
//   concatenated back into a string.

// * Objectives: 1) Comments; 2) tags ; 3)elements ; 4)documentation  

// * Class: CSC 3323 - Web Programming; Fall 2020; TR: 645PM - 800PM  

// * Instructor: Dr. Fazelpour - Copyright © 2020  

// * Programmer(s): Team 1 - Rumancik, Zach (ZWR); Ragoonanan, Jaggan (JR)   

// * Date: 10/04/2020   

// 4.6 Input: A line of text, using prompt.
// Output: The words of the input text, in alphabetical order.

//gets user input
const hotdog = prompt('Enter a text that you want to be alphabetized: ').toLowerCase()
//split input
const buns = hotdog.split(' ')
//sorts them alphabetially
const mustard = buns.sort()
let ketchup = ""
//loops over each index and adds it to ketchup
mustard.forEach( sesameSeed => {
    ketchup = ketchup + (sesameSeed + ' ')
});
//logs final result
console.log(ketchup)



