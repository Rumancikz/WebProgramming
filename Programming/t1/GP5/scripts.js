
let iss = 'small'
function toggleCSS() {
    isCSS = !isCSS
    document.styleSheets[0].disabled = isCSS
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
function chelyt(val){
    const val2 = iss+op+per
    console.log(val2);
    
    if (val === (val2)){
        lynnis(key)
        document.getElementById('spec').innerHTML = ""
    }
}
let per = 'en'
let isCSS = false
const toggle = document.getElementById('toggle')
toggle.addEventListener('click', () => {
    toggleCSS()  
})
const spec = document.getElementById('spec')
const key = 'thing'
spec.addEventListener('keypress', () => {
    chelyt(spec.value)
})

