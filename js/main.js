let lastISMR = null;

function playRandomISMR() {
	lastISMR = getRandomElement(sounds);
	playAudio(lastISMR.audio);
	// updateText();
}

function replayLastISMR() {
	playAudio(lastISMR.audio);
}

function playAudio(data) {
	const audio = new Audio(data);
	audio.play();
}

function getRandomElement(x) {
	return x[Math.floor(Math.random() * x.length)];
}

// stuff from the old site
/*
let targetOpacity = 0.74;
var lastProphecy = null;
var textFadeTimeout = null;
var interpretationFadeTimeout = null;

let text = document.getElementById("text");
let interpretation = document.getElementById("interpretation");
let prophecyTitle = document.getElementById("prophecy-tit");
let oracleImage = document.getElementById("oracle-img");

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
*/