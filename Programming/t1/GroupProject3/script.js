//Animation One button and control
let atStep1 = 0
let atStep2 = 0
let atStep3 = 0
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
    '2':[2,3,5,6,7,10],
    '3':[8,9],
}
const buttonOne = document.querySelector('button.One')
buttonOne.addEventListener("click", ()=> {
    atStep1 += 1
    if (atStep1 < 7){
        console.log(atStep1);
        nextStep(stepList1, atStep1, 'One')
    }else{
        atStep1 = 0
        clearStep('One')
        clearSee('One')
    }
})
const buttonTwo = document.querySelector('button.Two')
buttonTwo.addEventListener("click", ()=> {
    atStep2 += 1
    if (atStep2 < 15){
        console.log(atStep2);
        nextStep(stepList2, atStep2, 'Two')
    }else{
        atStep2 = 0
        clearStep('Two')
        clearSee('Two')
    }
})
function nextStep(stepList, atStep, animation){ 
    const step1Arr = stepList['1']
    const step2Arr = stepList['2']
    const step3Arr = stepList['3']
    const toDo1 = step1Arr.includes(atStep)
    const toDo2 = step2Arr.includes(atStep)
    const toDo3 = step3Arr.includes(atStep)
    console.log(step1Arr, step2Arr, step3Arr);
    console.log(toDo1, toDo2, toDo3);
    clearStep(animation)
    if (toDo1 === true){
        const toStep = document.querySelectorAll(`.${CSS.escape(animation)} .one.${CSS.escape(atStep)}`)        
        toStep.forEach(element => {
            element.classList.add('step')
        }); 
        if(atStep === 6 && animation === "Two"){
            const stongTrue = document.querySelector(`.${CSS.escape(animation)} .one.${CSS.escape(atStep)} .notsee`)
            stongTrue.classList.add('see')
        }  
        if(atStep === 9 && animation === "Two"){
            const stongTrue = document.querySelector(`.${CSS.escape(animation)} .one.${CSS.escape(atStep)} .notsee`)
            stongTrue.classList.add('see')
        }  
    }    
    if (toDo2 === true){
        const toStep = document.querySelectorAll(`.${CSS.escape(animation)} .two.${CSS.escape(atStep)}`)        
        toStep.forEach(element => {
            element.classList.add('step')
            element.classList.add('see')
        });   
    }
    if (toDo3 === true){
        const toStep = document.querySelectorAll(`.${CSS.escape(animation)} .three.${CSS.escape(atStep)}`)        
        toStep.forEach(element => {
            element.classList.add('step')
            element.classList.add('see')
        });           
    }
}
function clearStep(animation) {
    const toRemove = document.querySelectorAll(`.${CSS.escape(animation)} .step`)
    toRemove.forEach(element => {
        element.classList.remove('step')
    })
}
function clearSee(animation) {
    const toRemove = document.querySelectorAll(`.${CSS.escape(animation)} .see`)
    toRemove.forEach(element => {
        element.classList.remove('see')
    })
}