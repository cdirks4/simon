const buttonOne =document.querySelector(".one")
const buttonTwo = document.querySelector('.two');
const buttonThree = document.querySelector('.three');
const buttonFour = document.querySelector('.four');
const circleButtons = document.querySelector('.inner-circle')
const userClicks = []
const startButton = document.querySelector('.start')
const computerArray = []
const classesArray = [buttonOne,buttonTwo,buttonThree,buttonFour]
const round = document.querySelector(".round")
const clickTracker = (e) =>{ 
    e.preventDefault()
    if(e.target.classList[0] == "quadrent"){
      buttonClicked = e.target.classList[1]
      userClicks.push(e.target)
      console.log(userClicks)
    }else if (e.target.classList[0] == "inner-circle") {
        console.log("innercircle clicked")
    }
    if (computerArray == userClicks){
        console.log("you win")
    } 
}

const computerPattern = (e) => {
    e.preventDefault()
    for (let i = 0; i < 5; i++) {
       randomChoice =  Math.floor(Math.random()*3)
       computerChoice = classesArray[randomChoice]
        computerArray.push(computerChoice)
    }console.log(computerArray)
}




startButton.addEventListener("click",computerPattern)
circleButtons.addEventListener('click',clickTracker)
