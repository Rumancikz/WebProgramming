function toggleCSS() {
    isCSS = !isCSS
    document.styleSheets[0].disabled = isCSS
}

let isCSS = false
const toggle = document.getElementById('toggle')
toggle.addEventListener('click', () => {
    toggleCSS()  
})