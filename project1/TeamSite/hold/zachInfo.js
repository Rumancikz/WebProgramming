const face = document.querySelector('.face')
face.addEventListener('mouseenter', spinning)
face.addEventListener('mouseleave', notSpinning)

function spinning () {
    face.classList.add('spinning')
}
function notSpinning () {
    face.classList.remove('spinning')
}