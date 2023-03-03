let rotatingDots = document.querySelectorAll(".littleDot");
console.log(rotatingDots);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

for (dot of rotatingDots) {
    dot.style.animation = `rotation ${getRandomInt(6, 15)}s infinite linear`;
}
