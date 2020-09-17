console.log('it works')
function handleSubmit(e) {
    console.log(document.querySelector('#username'))
    e.preventDefault()
    const username = document.querySelector('#username')
    const password = document.querySelector('#password')
    const uword = document.querySelector('#uword')
    const pword = document.querySelector('#pword')
    uword.innerHTML = `The username is : ${username}`
    pword.innerHTML = `The password is : ${password}`
}