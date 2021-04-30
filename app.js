const buttonOne = document.querySelector('.one');
const buttonTwo = document.querySelector('.two');
const buttonThree = document.querySelector('.three');
const buttonFour = document.querySelector('.four');
const circleButtons = document.querySelector('.inner-circle');
const userClicks = [];
const startButton = document.querySelector('.start');
let computerArray = [];
let winningArray = [];
const classesArray = [buttonOne, buttonTwo, buttonThree, buttonFour];
const round = document.querySelector('.round');

const sleep = (time) => {
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
	for (let i = 0; i < 5; i++) {
		randomChoice = Math.floor(Math.random() * 3);
		computerChoice = classesArray[randomChoice];
		computerArray.push(computerChoice);
		console.log(computerArray);
		for (let i = 0; i < computerArray.length; i++) {
			const shadow = computerArray[i].style.backgroundColor;
			const current = computerArray[i].style.backgroundColor
			await sleep(2000);
			computerArray[i].style.backgroundColor = `light${current}`;
			await sleep(1000);
			computerArray[i].style.backgroundColor = current;
			let winner = computerArray.splice(i, 1);
            console.log(winner)
			winningArray.push(winner);
		}
	}
	winningArray.reverse();
	console.log(winningArray);
};

const clickTracker = (e) => {
	e.preventDefault();
	if (e.target.classList[0] == 'quadrent') {
		buttonClicked = e.target.classList[1];
		userClicks.push(e.target);
		console.log(userClicks);
	} else if (e.target.classList[0] == 'inner-circle') {
		console.log('innercircle clicked');
	}
	if (winningArray == userClicks) {
		console.log('you win');
	}
};





startButton.addEventListener('click', computerPattern);
circleButtons.addEventListener('click', clickTracker);
