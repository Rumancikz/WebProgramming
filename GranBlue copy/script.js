// const h1 = document.querySelector('.title');
// h1Text = h1.textContent;
// const h1Split = h1Text.split("");
// h1.textContent = "";
// for (letter in h1Split){
//     const letterVal = (h1Split[letter] === " ") ? "&nbsp" : h1Split[letter];
//     h1.innerHTML += `<span class="title">` + letterVal + "</span>";
// }
// let char = 0;
// let timer = setInterval(onTick, 50);

// function clearMove() {
//     count = 0
//     while (count < h1Split.length) {
//         const span = document.querySelectorAll("span")[char];
//         span.classList.remove("move");
//     }
// }
// function onTick () {
//     const span = document.querySelectorAll("span")[char];
//     span.classList.add("move");
//     char++
//     console.log(timer)
// console.log(span);
//     if (char === h1Split.length) {
//         char = 0
//         clearMove()
//         clearInterval(timer)
//         timer = null

//         return;
//     }
// }
