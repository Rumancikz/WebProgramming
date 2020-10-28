
 // * Program:  4_1.js -  Exersise 4.1

 // * purpose: Output: A table of the numbers from 5 to 15 and their squares and cubes, using alert.  

 // * Objectives: 1) Comments; 2) tags ; 3)elements ; 4)documentation   

  //* Class: CSC 3323 - Web Programming; Fall 2020; TR: 645PM - 800PM  

 // * Instructor: Dr. Fazelpour - Copyright © 2020  

 // * Programmer(s): Team 1 - Rumancik, Zach (ZWR); Ragoonanan, Jaggan (DD)   

 // * Date: 10/01/2020  


// 4.1 Output: A table of the numbers from 5 to 15 and their squares and cubes, using alert.
// These are variables
var count = 5;
var cubes;
var squares;
var print = "";
// This while statement will look at the count and do every number between 5 and 15
while (count >= 5 && count <= 15){ 
    squares = count * count
    cubes = count*count*count
    // This will print the numbers along with their squares and cubes
    print += `${count} ${squares} ${cubes} \r\n`
    // This will increment the count up
    count ++
}
alert(print)
