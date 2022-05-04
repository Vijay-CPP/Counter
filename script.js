let count = document.querySelector("h2");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let reset = document.querySelector(".reset");

let number = parseInt(count.innerText)

plus.addEventListener("click", function () {
    number += 1;
    count.innerText = number;
})


minus.addEventListener("click", function () {
    if (number > 0) {
        number -= 1;
        count.innerText -= 1;
    }
})

reset.addEventListener("click", function () {
    number = 0;
    count.innerHTML = 0;
})
