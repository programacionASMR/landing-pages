
const circleText = document.querySelector('.post .circle .text p');

circleText.innerHTML = circleText.innerHTML.split("").map(
    (char, i) => `<span style="transform: rotate(${i * 5.6}deg)">${char}</span>`
).join("");