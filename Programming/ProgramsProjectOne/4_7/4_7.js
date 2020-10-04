//  * Program:  4_7.js -  Exersise 4.7

// * purpose: Modify the script of Exercise 4.6 to get a second input from the user,
// which is either "ascending" or "descending"

// * Objectives: 1) Comments; 2) tags ; 3)elements ; 4)documentation  

// * Class: CSC 3323 - Web Programming; Fall 2020; TR: 645PM - 800PM  

// * Instructor: Dr. Fazelpour - Copyright © 2020  

// * Programmer(s): Team 1 - Rumancik, Zach (ZWR); Ragoonanan, Jaggan (JR)   

// * Date: 10/04/2020   

// 4.7 Modify the script of Exercise 4.6 to get a second input from the user,
// which is either "ascending" or "descending". Use this input to
// determine how to sort the input words.

const hotdog = prompt('Enter a text that you want to be alphabetized: ').toLowerCase()
const buns = hotdog.split(' ')
const mustard = buns.sort()

function join(mustard) {
    let ketchup = ""
    mustard.forEach( sesameSeed => {
        ketchup = ketchup + (sesameSeed + ' ')
    });
    return ketchup
}

const burgers = prompt('Do you want the word in ascending or descending').toLowerCase()
if (burgers === "ascending")
{
    console.log(join(mustard));    
}
else if (burgers === "descending")
{
    mustard.reverse()
    console.log(join(mustard))
}
else {
    console.log(`you mispelled something, Please Try Again`);
}


