
//   * Program:  Team_1_P01_CH_02_09032020.html 

//   * purpose: Group Project 1 - Describe our team  

//   * Objectives: 1) Comments; 2) ; 3) ; 4)  

//   * Class: CSC 3323 - Web Programming; Fall 2020; TR: 645PM - 800PM  

//   * Instructor: Dr. Fazelpour - Copyright © 2020  

//   * Programmer(s): Team 1 - Rumancik, Zach (ZWR); Ragoonanan, Jaggan (DD)   

//   * Date: 09/03/2020  

const tag = document.querySelector('.groupTag')
tag.addEventListener('mouseenter', lcAdd)
tag.addEventListener('mouseleave', lcRemove)

function lcAdd () {
    tag.classList.add('largeCrook')
}
function lcRemove () {
    tag.classList.remove('largeCrook')
}