//Animation One button and control
const buttonOne = document.querySelector('button.One')
buttonOne.addEventListener("click", ()=> {animationOne()})
let animationOneStep1 = 0
let animationOneStep2 = 0
let animationOneStep3 = 0
function animationOne(){
    animationOneStep1 += 1
    if (animationOneStep1 < 2){
        const toStep = document.querySelectorAll(`.One p.one.${CSS.escape(animationOneStep1)}`)        
        toStep.forEach(element => {
            element.classList.add('step')
        }); 
        // toStep.classList.add('step')
    }
    else if (animationOneStep1 > 1 && animationOneStep1 < 7){
        
        let toStep = document.querySelectorAll(`.One .one.${CSS.escape(animationOneStep1)}`)        
        let toRemove = document.querySelectorAll(`.One .one.${CSS.escape(animationOneStep1 - 1)}`)
        console.log(toStep);
        if (animationOneStep1 === 2){
            animationOneStep2 += 1
            toStep = document.querySelectorAll(`.One .one.${CSS.escape(animationOneStep1)}, .two.${CSS.escape(animationOneStep2)}`) 
            toRemove = document.querySelectorAll(`.One .one.${CSS.escape(animationOneStep1)}, .two.${CSS.escape(animationOneStep2 - 1)}`)        
        }
        
        // toStep.classList.add('step')
        // toRemove.classList.remove('step')
        toStep.forEach(element => {
            element.classList.add('step')
        });        
        toRemove.forEach(element => {
            element.classList.remove('step')
        })
    }
    else{
        const toRemove = document.querySelector(`p.one.${CSS.escape(animationOneStep1 - 1)}`)        
        toRemove.classList.remove('step')
        animationOneStep1 = 0
    }
    
}
