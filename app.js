const buttonOne = document.querySelector('.one');
const buttonTwo = document.querySelector('.two');
const buttonThree = document.querySelector('.three');
const buttonFour = document.querySelector('.four');
const circleButtons = document.querySelector('.inner-circle');
const startButton = document.querySelector('.start');
const roundText = document.querySelector('.round');
const quadrent = document.querySelectorAll('.quadrent');
const lightMode = document.querySelector('.light');
const darkMode = document.querySelector('.dark');
const normal = document.querySelector('.normal');
const speedRound = document.querySelector('.speed');
const lifeMode = document.querySelector('.lives');
const liveText = document.querySelector('.liveBoard');
const scoreText = document.querySelector('.score');
const highscoreText = document.querySelector('.highscore');
const classesArray = [buttonOne, buttonTwo, buttonThree, buttonFour];
let computerArray = [];
let winningArray = [];
let userClicks = [];
let loss = true;
let win = false;
let start = false;
let rounds = 3;
let level = 1;
let speed = 700;
let lives = 0;
let score = 0;
let highscore = 0;
// not allowing the user to click until the first function is done running
// creaating a promise to be recalled to set time for the lights to flash
const timer = (time) => {
	return new Promise((resolve) => setTimeout(resolve, time));
};
const reset = () => {
	buttonOne.style.backgroundColor = 'red';
	buttonTwo.style.backgroundColor = 'green';
	buttonThree.style.backgroundColor = 'blue';
	buttonFour.style.backgroundColor = 'yellow';
};

const loser = async () => {
	buttonOne.style.backgroundColor = 'red';
	buttonTwo.style.backgroundColor = 'red';
	buttonThree.style.backgroundColor = 'red';
	buttonFour.style.backgroundColor = 'red';
	rounds = 3;
	await timer(900);
	buttonOne.style.backgroundColor = 'red';
	buttonTwo.style.backgroundColor = 'green';
	buttonThree.style.backgroundColor = 'blue';
	buttonFour.style.backgroundColor = 'purple';
	if (lives > 0) {
		win = false;
		lives -= 1;
		rounds = 0;
		userClicks = [];
		liveText.innerText = `Remaining lives ${lives}`;
		await timer(600);
		computerPattern();
	} else {
		liveText.innerText = '';
		userClicks = [];
		computerArray = [];
		level = 1;
		if (score > highscore) {
			highscore = score;
		}
		highscoreText.innerText = `Highscore: ${highscore}`;
		score = 0;
		scoreText.innerText = `Score: ${score}`;
		return (roundText.innerText = `Round ${level}`);
	}
};

const lifeFunction = () => {
	lives = 2;
	liveText.innerText = `Remaining lives ${lives}`;
};
const speedFunction = () => (speed = 400);
const normalFunction = () => (speed = 700);

const computerPattern = async (e) => {
	if (win == true) {
		rounds += 1;
		win = false;
	}
	for (let i = 0; i < rounds; i++) {
		randomChoice = Math.floor(Math.random() * 4);
		computerChoice = classesArray[randomChoice]; //pulling out random button from array of button lists using random choice as the indices
		computerArray.push(computerChoice); //pushing that into an array
	}
	for (let i = 0; i < computerArray.length; i++) {
		computerArray[i].style.opacity = '100%'; //causing board lights to go from 50% to 100% to "blink"
		await timer(speed); //revalling promise 60 milliseconds
		computerArray[i].style.opacity = '50%'; //resetting lights
		await timer(speed); //recalling promise 600 milliseconds
	
	}
	start = true; // now the user can begin to click
};

const clickTracker = async (e) => {
	if (start == true) {
		///checking if the user is allowed to play or not
		if (e.target.classList[0] == 'quadrent') {
			// checking if what  button is clicked is the button. think can be deleted now but waiting if it is working
			userClicks.push(e.target);
		}
		if (
			//pulling the most recently added click array and comparing
			userClicks[userClicks.length - 1] != computerArray[userClicks.length - 1]
		) {
			return loser();
		}
		if (
			userClicks[userClicks.length - 1] == computerArray[userClicks.length - 1]
		) {
			score += 1;
			scoreText.innerText = `Score: ${score}`;
			e.target.style.opacity = '100%';
			await timer(300);
			e.target.style.opacity = '50%';
		}
		if (
			computerArray[computerArray.length - 1] ==
			userClicks[computerArray.length - 1]
		) {
			computerArray = [];
			userClicks = [];
			win = true;
			level += 1;
			roundText.innerText = `Round ${level}`;
			start = false;
			await timer(2000);
			return computerPattern();
		}
	}
};

lifeMode.addEventListener('click', lifeFunction);
speedRound.addEventListener('click', speedFunction);
normal.addEventListener('click', normalFunction);
startButton.addEventListener('click', computerPattern);
circleButtons.addEventListener('click', clickTracker);
