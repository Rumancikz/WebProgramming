function handleSubmit(e) {
    e.preventDefault()
    // Inputs
    var username = document.querySelector('#username').value;
    var password = document.querySelector('#password').value;
    // P tags
    var uword = document.querySelector('#uword')
    var pword = document.querySelector('#pword')

    const valid = checkLogin(username, password)
    console.log(valid)
    uword.innerHTML = `Valid Login: ${valid}`
    console.log(e)
}

function checkLogin(username, password) {
    const includesUsername = Object.keys(logins).includes(username)
    if (includesUsername === true) {
        const loginPassword = logins[username]
        if(password === loginPassword){
            return true
        }
    }
    return false
}

var logins = {
    zRumancik: "CodingIsFun",
    JJR: "Pizza",
}
