const button = document.querySelector('button')
let count = 0
const p = document.querySelector('p')
button.addEventListener('click', () => {
    count = count + 1
    p.innerHTML = `I have been clicked ${count} times!`
})

