const buttonOne =document.querySelector(".one")
const buttonTwo = document.querySelector('.two');
const buttonThree = document.querySelector('.three');
const buttonFour = document.querySelector('.four');
const circleButtons = document.querySelector('.inner-circle')
const userClicks = []
const startButton = document.querySelector('.start')
const computerArray = []
const classesArray = [buttonOne,buttonTwo,buttonThree,buttonFour]

const clickTracker = (e) =>{ 
    console.log(e.target.classList)
    e.preventDefault()
    if(e.target.classList[0] == "quadrent"){
      buttonClicked = e.target.classList[1]
      console.log(buttonClicked)
       console.log(parseInt(buttonClicked))
    }else if (e.target.classList[0] == "inner-circle") {
        console.log("innercircle clicked")
    }
}


const computerPattern = (e) => {
    e.preventDefault()
    Math.random
}




startButton.addEventListener("click",computerPattern)
circleButtons.addEventListener('click',clickTracker)
