let lastISMR = null;
const targetOpacity = 0.74;
let textFadeTimeout = null;
let text = document.getElementById("text");

function playRandomISMR() {
	setLastISMR();
	console.log(`Playing an ismr from Connected episode ${lastISMR.episode} (Connected Pro timestamp: ${lastISMR.timestamp})`);
	playAudio(lastISMR.filepath);
	updateText();
}

function setLastISMR() {
	tmp = null;
	while (!(tmp && tmp !== lastISMR)) {
		tmp = getRandomElement(sounds);
	}
	lastISMR = tmp;
}

function replayLastISMR() {
	playAudio(lastISMR.filepath);
}

function playAudio(filepath) {
	const audio = new Audio(`./audio/${filepath}`);
	audio.play();
}

function getRandomElement(x) {
	return x[Math.floor(Math.random() * x.length)];
}

function updateText() {
	window.clearTimeout(textFadeTimeout);
	text.style.opacity = 0;
	textFadeTimeout = window.setTimeout(fadeInText, 600);
}

function fadeInText() {
	text.innerText = lastISMR.text;
	text.style.opacity = 1;
}

function pickRandomPic() {
	// this gives a 6x3% chance for the picture of Stephen to not be a professionally looking picture
	// and instead be a goofy looking picture from some of his videos on the 512Pixels YouTube channel
	const pic = document.getElementById('hackett');
	const rand = Math.floor(Math.random() * 100 / 3);
	if (rand === 0) pic.setAttribute('src', './images/hackett_hey.png');
	if (rand === 1) pic.setAttribute('src', './images/hackett_mask.png');
	if (rand === 2) pic.setAttribute('src', './images/hackett_shrug.png');
	if (rand === 3) pic.setAttribute('src', './images/hackett_twoPhones.png');
	if (rand === 4 || rand === 5) pic.setAttribute('src', './images/hackett_mutton.png');
	// I set the img to have `display: none` and remove that once the picture has been changed
	// this is to prevent flashes of the main picture if you get one of the goofy ones
	pic.style.removeProperty('display');
}

pickRandomPic();
