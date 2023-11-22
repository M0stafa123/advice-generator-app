"use strict";
let generate = document.querySelector(".dice");
let adviceId = document.querySelector(".id");
let advice = document.querySelector(".advice");
generate.addEventListener("click", function () {
    fetch("https://api.adviceslip.com/advice?" + new Date().getTime())
        .then((res) => res.json())
        .then((data) => {
        adviceId.innerHTML = data.slip.id;
        advice.innerHTML = data.slip.advice;
    });
});
