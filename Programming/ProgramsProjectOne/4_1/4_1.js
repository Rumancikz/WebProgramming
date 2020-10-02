
 // * Program:  4_1.js -  Exersise 4.1

 // * purpose: Output: A table of the numbers from 5 to 15 and their squares and cubes, using alert.  

 // * Objectives: 1) Comments; 2) ; 3) ; 4)  

  //* Class: CSC 3323 - Web Programming; Fall 2020; TR: 645PM - 800PM  

 // * Instructor: Dr. Fazelpour - Copyright © 2020  

 // * Programmer(s): Team 1 - Rumancik, Zach (ZWR); Ragoonanan, Jaggan (DD)   

 // * Date: 10/01/2020  


// 4.1 Output: A table of the numbers from 5 to 15 and their squares and cubes, using alert.
var count = 5;
var cubes;
var squares;
var print = "";
while (count >= 5 && count <= 15){ 
    squares = count * count
    cubes = count*count*count
    print += `${count} ${squares} ${cubes} \r\n`
    count ++
}
alert(print)
