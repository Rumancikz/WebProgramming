const tag = document.querySelector('.groupTag')
tag.addEventListener('mouseenter', lcAdd)
tag.addEventListener('mouseleave', lcRemove)

function lcAdd () {
    tag.classList.add('largeCrook')
}
function lcRemove () {
    tag.classList.remove('largeCrook')
}