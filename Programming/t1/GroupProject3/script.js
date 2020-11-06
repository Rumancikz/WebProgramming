//   * Program:  Team_1_P03_11052020 script.js

//   * purpose: Group Project 3 

//   * Objectives: 1) Animating on jQuery

//   * Class: CSC 3323 - Web Programming; Fall 2020; TR: 645PM - 800PM  

//   * Instructor: Dr. Fazelpour - Copyright © 2020  

//   * Programmer(s): Team 1 - Rumancik, Zach (ZWR); Ragoonanan, Jaggan (JR)   

//   * Date: 11/05/2020  
function nextStep(stepList, atStep, animation){ 
    const step1Arr = stepList['1']
    const step2Arr = stepList['2']
    const step3Arr = stepList['3']
    const toDo1 = step1Arr.includes(atStep)
    const toDo2 = step2Arr.includes(atStep)
    const toDo3 = step3Arr.includes(atStep)
    clearStep(animation)
    if (toDo1 === true){
        if (atStep3 === 10 && animation === 'Three' && atStep3b < 2){
            atStep3 = 2
            atStep3b += 1
        }
        $(`.${CSS.escape(animation)} .one.${CSS.escape(atStep)}`).addClass('step')
        if(atStep === 6 && animation === "Two"){
            $(`.${CSS.escape(animation)} .one.${CSS.escape(atStep)} .notsee`).addClass('see')
        }  
        if(atStep === 9 && animation === "Two"){
            $(`.${CSS.escape(animation)} .one.${CSS.escape(atStep)} .notsee`).addClass('see')
        }  
    }    
    if (toDo2 === true){  
        $(`.${CSS.escape(animation)} .two.${CSS.escape(atStep)}`).addClass('step see')
    }
    if (toDo3 === true){
        $(`.${CSS.escape(animation)} .three.${CSS.escape(atStep)}`).addClass('step see')   
    }
}
function clearStep(animation) {
    $(`.${CSS.escape(animation)} .step`).removeClass('step')
}
function clearSee(animation) {
    $(`.${CSS.escape(animation)} .see`).removeClass('see')
}
let atStep1 = 0
let atStep2 = 0
let atStep3 = 0
let atStep3b = 0
const stepList1 = {
    "1":[1,2,3,4,5,6],
    '2':[2,3,4],
    '3':[5],
}
const stepList2 = {
    "1":[1,2,3,4,5,6,7,8,9,10,11,12,13,14],
    '2':[2,3,4,5,7,10],
    '3':[12,13],
}
const stepList3 = {
    "1":[1,2,3,4,5,6,7,8,9,10,11,12],
    '2':[2,3,4,5,6,7,10],
    '3':[8,9],
}
$('button.One').click(()=> {
    atStep1 += 1
    if (atStep1 < 7){
        nextStep(stepList1, atStep1, 'One')
    }else{
        atStep1 = 0
        clearStep('One')
        clearSee('One')
    }
})
$('button.Two').click(()=> {
    atStep2 += 1
    if (atStep2 < 15){
        nextStep(stepList2, atStep2, 'Two')
    }else{
        atStep2 = 0
        clearStep('Two')
        clearSee('Two')
    }
})
$('button.Three').click(()=> {
    atStep3 += 1
    if (atStep3 < 12){
        console.log(atStep3)
        nextStep(stepList3, atStep3, 'Three')
    }
    else{
        atStep3 = 0
        atStep3b = 0
        clearStep('Three')
        clearSee('Three')
    }
})
