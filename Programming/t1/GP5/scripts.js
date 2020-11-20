function toggleCSS() {
    isCSS = !isCSS
    document.styleSheets[0].disabled = isCSS
    setTimeout(toggleCSS, 50)
}

let isCSS = false
const toggle = document.getElementById('toggle')
toggle.addEventListener('click', () => {
    toggleCSS()  
})