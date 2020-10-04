//  * Program:  4_9.js -  Exersise 4.9

// * purpose: 4.9 Function: e_names
// Parameter: An array of names, represented as strings.
// Returns: The number of names in the given array that end in either
// "ie" or "y".

// * Objectives: 1) Comments; 2) tags ; 3)elements ; 4)documentation  

// * Class: CSC 3323 - Web Programming; Fall 2020; TR: 645PM - 800PM  

// * Instructor: Dr. Fazelpour - Copyright © 2020  

// * Programmer(s): Team 1 - Rumancik, Zach (ZWR); Ragoonanan, Jaggan (JR)   

// * Date: 10/04/2020   

// 4.9 Function: e_names
// Parameter: An array of names, represented as strings.
// Returns: The number of names in the given array that end in either
// "ie" or "y".


function e_names(names){
    // Create counters
    let IEcount = 0
    let Ycount = 0
    // Loop through array
    names.forEach(name => {
        // split each name
        const hans = name.split('')
        const last = hans[hans.length - 1]
        const secondLast = hans[hans.length - 2]
        if (secondLast + last === "ie")
        {
            IEcount += 1
        }
        else if (last === "y")
        {
            Ycount += 1
        }
    }); 
    console.log(`Count of names ending in "ie" = ${IEcount}`);
    console.log(`Count of names ending in "y" = ${Ycount}`);
}
// Create nameArr array
const nameArr = ['Jaggan', 'Zach', "Dr. Fazelpour", 'Haliey',
 'Courtney', "Lil Timmy", 'Carl','Mary', 'Kieth', 'Katie']
// Initiate e_names function by passing in nameArr
e_names(nameArr)


