let targetOpacity = 0.74;
var lastProphecy = null;
var textFadeTimeout = null;
var interpretationFadeTimeout = null;

let text = document.getElementById("text");
let interpretation = document.getElementById("interpretation");
let prophecyTitle = document.getElementById("prophecy-tit");
let oracleImage = document.getElementById("oracle-img");

function playRandomProphecy() {
    lastProphecy = getRandomElement(prophecies);
    playAudio(lastProphecy.audio);
    updateText();
}

function updateText() {
    window.clearTimeout(textFadeTimeout);
    window.clearTimeout(interpretationFadeTimeout);

    oracleImage.style.opacity = 1;

    text.style.opacity = 0;
    interpretation.style.opacity = 0;
    prophecyTitle.style.opacity = 0;
    textFadeTimeout = window.setTimeout(fadeInText, 600);
    interpretationFadeTimeout = window.setTimeout(fadeInInterpretation, 1200);
}

function fadeInText() {
    text.innerText = lastProphecy.text;
    text.style.opacity = 1;
}

function fadeInInterpretation() {
    prophecyTitle.style.opacity = targetOpacity;
    interpretation.innerText = interpretations[lastProphecy.interpretation];
    if (lastProphecy.interpretation) {
        interpretation.style.opacity = targetOpacity;
    }
}

function playDivineOracleSound() {
    if (oracleImage.style.opacity == 0) {
        return;
    }
    let more = ["06", "15", "40"];
    let randomSound = getRandomElement(more);
    playAudio(randomSound);
    oracleImage.style.transition = "transform 0.175s linear";
    oracleImage.style.transform = "scale(1.1)";
    window.setTimeout(() => {
        oracleImage.style.transform = "scale(1.0)";
    }, 175);
}

function playAudio(name) {
    let data = sounds[name];
    let audio = new Audio(data);
    audio.play();
}

function replayLastProphecy() {
    playAudio(lastProphecy.audio);
}

function getRandomElement(x) {
    return x[Math.floor(Math.random() * x.length)];
}