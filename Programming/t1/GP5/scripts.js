document.styleSheets[1].disabled = true
document.styleSheets[0].disabled = true
let iss = 'sma'
function toggleCSS() {
    isCSS = !isCSS
    console.log(isCSS)
    document.styleSheets[0].disabled = isCSS
}
function toggleCSS2() {
    isCSS2 = !isCSS2
    console.log(isCSS2)
    document.styleSheets[1].disabled = isCSS2
}
function lynnis(imp) {
    if (imp === key)
    tompane(8)
}
function convolutid(imp){
    const p = document.querySelectorAll('p')
    p.forEach(el => {
        el.innerHTML = imp
    });
}
function alegorica(imp) {
    convolutid(imp + 'D')
}
let op = 'pe'
function tompane(imp){
    let temp = imp
    for (let i = 0; i < 8; i++) {
        temp += '='        
    }
    alegorica(temp)
}
let le = 'll'
function chelyt(val){
    const val2 = iss+le+op+per    
    if (val === (val2)){
        lynnis(key)
        document.getElementById('spec').innerHTML = ""
    }
}
let per = 'en'
let isCSS = true
let isCSS2 = true
let secondTime = true
const toggle = document.getElementById('party')
const toggle2 = document.getElementById('pba')
toggle.addEventListener('click', () => {
        toggleCSS()  
        isCSS2 = false
        toggleCSS2()
})
toggle2.addEventListener('click', () => {
        toggleCSS2() 
        isCSS = false
        toggleCSS() 
})
const spec = document.getElementById('spec')
const key = 'thing'
spec.addEventListener('keypress', () => {
    chelyt(spec.value)
    
})

