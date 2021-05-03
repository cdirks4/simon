const buttonOne = document.querySelector('.one');
const buttonTwo = document.querySelector('.two');
const buttonThree = document.querySelector('.three');
const buttonFour = document.querySelector('.four');
const circleButtons = document.querySelector('.inner-circle');
const startButton = document.querySelector('.start');
const nextRound = document.querySelector('.complete');
const round = document.querySelector('.round');
const quadrent = document.querySelectorAll('.quadrent');

const classesArray = [buttonOne, buttonTwo, buttonThree, buttonFour];
let computerArray = [];
let winningArray = [];
let userClicks = [];
let lost = true;
let win = false;
let start = false; // not allowing the user to click until the first function is done running

// creaating a promise to be recalled to set time for the lights to flash
const timer = (time) => {
	return new Promise((resolve) => setTimeout(resolve, time));
};

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
	e.preventDefault();
	for (let i = 0; i < 3; i++) {
		randomChoice = Math.floor(Math.random() * 3);
		computerChoice = classesArray[randomChoice]; //pulling out random button from array of button lists using random choice as the indices
		computerArray.push(computerChoice); //pushing that into an array
		for (let i = 0; i < computerArray.length; i++) {
			computerArray[i].style.opacity = '100%'; //causing board lights to go from 50% to 100% to "blink"
			await timer(600); //revalling promise 60 milliseconds
			computerArray[i].style.opacity = '50%'; //resetting lights
			await timer(600); //recalling promise 600 milliseconds
		}
	}
	start = true; // now the user can begin to click
};

const clickTracker = (e) => {
	console.log(computerArray);
	console.log(e.target)
	if (start == true) {
		///checking if the user is allowed to play or not
		if (e.target.classList[0] == 'quadrent') {
			// checking if what  button is clicked is the button. think can be deleted now but waiting if it is working
			userClicks.push(e.target.classList[1]);
		}
		console.log(userClicks);
		console.log(userClicks.length);
		if (
			//pulling the most recently added click array
			userClicks[userClicks.length - 1] !=
			computerArray[userClicks.length - 1].classList[1] // pulling from computer aray at the same indice comparing the two
		) {
			//if incorrect button gets pushed all colors go red
			buttonOne.style.backgroundColor = 'red';
			buttonTwo.style.backgroundColor = 'red';
			buttonThree.style.backgroundColor = 'red';
			buttonFour.style.backgroundColor = 'red';
			return (lost = true); // returns lost = true to reset game
		} else {
			e.target.style.opacity = '100%'; //lights up the button hit
			//await timer(600);
			e.target.style = '50%';
		}
		if ((userClicks.length = computerArray.length)) {
			return (win = true); //for later use once working
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
