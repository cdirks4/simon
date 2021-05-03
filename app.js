const buttonOne = document.querySelector('.one');
const buttonTwo = document.querySelector('.two');
const buttonThree = document.querySelector('.three');
const buttonFour = document.querySelector('.four');
const circleButtons = document.querySelector('.inner-circle');
const startButton = document.querySelector('.start');
const roundText = document.querySelector('.round');
const quadrent = document.querySelectorAll('.quadrent');

const classesArray = [buttonOne, buttonTwo, buttonThree, buttonFour];
let computerArray = [];
let winningArray = [];
let userClicks = [];
let loss = true;
let win = false;
let start = false;
let rounds = 3;
let level = 1;
// not allowing the user to click until the first function is done running
// creaating a promise to be recalled to set time for the lights to flash
const timer = (time) => {
	return new Promise((resolve) => setTimeout(resolve, time));
};
const reset = () => {
	buttonOne.style.backgroundColor = 'red';
	buttonTwo.style.backgroundColor = 'green';
	buttonThree.style.backgroundColor = 'blue';
	buttonFour.style.backgroundColor = 'pink';
};

const loser = async () => {
	buttonOne.style.backgroundColor = 'red';
	buttonTwo.style.backgroundColor = 'red';
	buttonThree.style.backgroundColor = 'red';
	buttonFour.style.backgroundColor = 'red';
	rounds = 3
	await timer(900);
	buttonOne.style.backgroundColor = 'red';
	buttonTwo.style.backgroundColor = 'green';
	buttonThree.style.backgroundColor = 'blue';
	buttonFour.style.backgroundColor = 'pink';
	rounds;
	userClicks = []
	computerArray = [];
	return (loss = true);
};
const lights = async () => {};
// const clickTracker = (e) => {
// 	e.preventDefault();
// 	if (e.target.classList[0] == 'quadrent') {
// 		buttonClicked = e.target.classList[1];
// 		userClicks.push(e.target);
// 		console.log(userClicks);
// 	} else if (e.target.classList[0] == 'inner-circle') {
// 		console.log('innercircle clicked');
// 	}
// 	if (winningArray == userClicks) {
// 		console.log('you win');
// 	}
// };

const computerPattern = async (e) => {
	start = false
	if (win == true) {
		rounds += 2;
		win = false;
	}
	for (let i = 0; i < rounds; i++) {
		randomChoice = Math.floor(Math.random() * 4);
		computerChoice = classesArray[randomChoice]; //pulling out random button from array of button lists using random choice as the indices
		computerArray.push(computerChoice); //pushing that into an array
	}
	for (let i = 0; i < computerArray.length; i++) {
		computerArray[i].style.opacity = '100%'; //causing board lights to go from 50% to 100% to "blink"
		await timer(600); //revalling promise 60 milliseconds
		computerArray[i].style.opacity = '50%'; //resetting lights
		await timer(600); //recalling promise 600 milliseconds
		console.log(computerArray);
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
			e.target.style.opacity = '100%';
			await timer(600);
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
			await timer(2500);
			return computerPattern();
		}
	}
};

startButton.addEventListener('click', computerPattern);
circleButtons.addEventListener('click', clickTracker);

// console.log(computerArray);
// for (let i = 0; i < userClicks.length; i++) {
// 	console.log(userClicks);
// 	if (userClicks[i] != winningArray[0][i]) {
// 		buttonOne.style.backgroundColor = 'red';
// 		buttonTwo.style.backgroundColor = 'red';
// 		buttonThree.style.backgroundColor = 'red';
// 		buttonFour.style.backgroundColor = 'red';
// 		return (lost = true);
// 	} else if (userClicks[i].classList[1] == winningArray[0][i].classList[1]) {
// 		e.target.style.opacity = '100%';
// 		await timer(1000);
// 		e.target.style.opacity = '50%';
// 	}
// }
// pulling from computer array at the same indice comparing the two
// ) {
// 	if incorrect button gets pushed all colors go red
