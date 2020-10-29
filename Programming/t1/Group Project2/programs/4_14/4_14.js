//  * Program:  4_14.js -  Exersise 4.14

// * purpose: 4.14 Function: reverser
// Parameter: A number.
// Returns: The number with its digits in reverse order.
// * Objectives: 1) Comments; 2) tags ; 3)elements ; 4)documentation  

// * Class: CSC 3323 - Web Programming; Fall 2020; TR: 645PM - 800PM  

// * Instructor: Dr. Fazelpour - Copyright © 2020  

// * Programmer(s): Team 1 - Rumancik, Zach (ZWR); Ragoonanan, Jaggan (JR)   

// * Date: 10/04/2020   

// 4.14 Function: reverser
// Parameter: A number.
// Returns: The number with its digits in reverse order.

//created function reverser and returns a split number, reverses it, and joins it with ""
function reverser(number){return number.split('').reverse().join('')}
//asks the user for input
const input = prompt('Enter a number to be reversed: ')
//prints out the resut of the function when passing the input
console.log(reverser(input));
