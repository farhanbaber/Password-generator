let btn = document.querySelector("button")
let input = document.querySelector("input")
btn.addEventListener("click", () => {
    let password = "abcdefghijklmnopqrstz3w8gd8e!@#~WER$";
    let  empty = "";
    for(let i = 0; i < 10; i++){
        empty += password[Math.floor(Math.random() * password.length)];
    }
    input.value = empty;})
 