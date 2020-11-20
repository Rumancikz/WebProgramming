function toggleCSS() {
    isCSS = !isCSS  
    const sheet = document.createElement('style')
    console.log(isCSS);
    if (isCSS){

        sheet.innerHTML = `
        html, body{
            width: 100%;
            height: 100%;
            padding: 0rem;
            margin: 0rem;
        }
        body{
            padding-top: 6rem;
            background-color: yellowgreen; 
        }
        nav{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            position: fixed;
            top: 0px;
            background-color: red;
            color: yellow;
            height: 6rem;
            width: 100%;
            align-content: center;
        }
        #toggle{
            justify-self: center;
            align-self: center;
            background-color: violet;
            color: red;
            height: 6rem;
            width: 6rem;
            border-radius: 50%;
        }
        `;
        document.body.appendChild(sheet);
    }else if(!isCSS){
        sheet.remove();
    }else{
        return null
    }
}

let isCSS = false
const toggle = document.getElementById('toggle')
toggle.addEventListener('click', () => {
    toggleCSS()  
})