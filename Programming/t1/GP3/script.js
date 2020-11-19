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
        if (atStep3 === 11 && animation === 'Three' && atStep3b < 2){
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
        if(atStep === 4 && animation === "Three"){
            $(`.${CSS.escape(animation)} .one.${CSS.escape(atStep)} .notsee`).addClass('see')
        }  
        if(atStep === 10 && animation === "Three" && atStep3b === 2){
            console.log($(`.${CSS.escape(animation)} .one.3 .notsee`));
            TFtoggle($(`.${CSS.escape(animation)} .one.3 .notsee`))
            // $(`.${CSS.escape(animation)} .one.3 .notsee`).addClass('see2')
            // const ture = document.querySelector(`.see2`)
            // ture.innerHTML = 'False'
        }  
    }    
    if (toDo2 === true){  
        $(`.${CSS.escape(animation)} .two.${CSS.escape(atStep)}`).addClass('step see')
    }
    if (toDo3 === true){
        const hold = ["t6","t8","t9"]
        if (animation === 'Three'){
            console.log(atStep3b);
            document.querySelectorAll(`#${CSS.escape(hold[atStep3b])}`).forEach(elemetn=>{
                elemetn.classList.add('see') 
                elemetn.classList.add('step') 
            })

        }else{
            $(`.${CSS.escape(animation)} .three.${CSS.escape(atStep)}`).addClass('step see')   
        }
    }
    const t1 = document.getElementById('t1')
    const t2 = document.getElementById('t2')
    const t3 = document.getElementById('t3')
    const t4 = document.getElementById('t4')
    const t5 = document.getElementById('t5')
    if (atStep3 === 3 && atStep3b === 1){
        t1.innerHTML = 'cnt 1'
        t2.innerHTML = 'PI 3.14'
        t3.innerHTML = 'radius 7'
        t4.innerHTML = 'peri 43.96'
        t5.innerHTML = 'area 153.86'
    }
    if (atStep3 === 3 && atStep3b === 2){
        t1.innerHTML = 'cnt 2'
        t2.innerHTML = 'PI 3.14'
        t3.innerHTML = 'radius 11'
        t4.innerHTML = 'peri 68.08'
        t5.innerHTML = 'area 379.94'
    }
}
function clearStep(animation) {
    $(`.${CSS.escape(animation)} .step`).removeClass('step')
}
function clearSee(animation) {
    $(`.${CSS.escape(animation)} .see`).removeClass('see')
}
function clearSee2(animation) {
    const ture = document.querySelector(`.${CSS.escape(animation)} .see2`)
    ture.innerHTML = "TRUE"
    $(`.${CSS.escape(animation)} .see2`).removeClass('see2')
}
function clear3rdInner(){
    document.getElementById('t1').innerHTML = 'cnt 0'
    document.getElementById('t2').innerHTML = 'PI 3.14'
    document.getElementById('t3').innerHTML = 'radius 7'
    document.getElementById('t4').innerHTML = 'peri 43.96'
    document.getElementById('t5').innerHTML = 'area 153.86'
}
function TFtoggle(element){
    if (element.html() === "TRUE"){
        element.html('FALSE')
        element.addClass('see2')
    }else if (element.html() === "FALSE"){
        element.html('TRUE')
        element.addClass('see')
    }else{
        return null
    }
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
    '2':[2,3,5,6,7,8,11],
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
        nextStep(stepList3, atStep3, 'Three')
    }
    else{
        atStep3 = 0
        atStep3b = 0
        clearStep('Three')
        clearSee('Three')
        clearSee2('Three')
        clear3rdInner()
    }
})
