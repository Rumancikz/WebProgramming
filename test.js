const button = document.querySelector('button')
const p = document.querySelector('p')
let count = 0
button.addEventListener('click', () => {
    count = count + 1
    p.innerHTML = `I have been clicked ${count} times!`
})

