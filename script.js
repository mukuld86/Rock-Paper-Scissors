let userScore = 0;
let compScore = 0;

let msg = document.querySelector('#msg');
const choices = document.querySelectorAll('.choice');

const getCompChoice = () => {
    let options = ["Rock", "Paper", "Scissors"];
    const randomNum = Math.floor(Math.random() * 3);
    return options[randomNum];
};

const updateScore = () => {
    const user = document.querySelector('#user-score');
    const comp = document.querySelector('#comp-score');
    user.innerText = userScore;
    comp.innerText = compScore;
};

const drawGame = () => {
    msg.innerText = "Game was drawn! Play again!";
    msg.style.backgroundColor = "rgb(3, 3, 45)";
};
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        msg.textContent = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        msg.style.backgroundColor = "red";
        msg.textContent = `You lose! Your ${userChoice} loses to ${compChoice}`;
    }
    updateScore();
}

const playGame = (userChoice) => {
    // console.log('user choice:', userChoice);
    const compChoice = getCompChoice();
    console.log(compChoice);
    if(userChoice === compChoice) {
        drawGame();
    }else {
        let userWin = true; 
        if(userChoice === "Rock") {
            userWin = compChoice === "Scissors";
        } else if(userChoice === "Paper") {
            userWin = compChoice === "Rock";
        } else if(userChoice === "Scissors") {
            userWin = compChoice === "Paper";
        }
        showWinner(userWin, userChoice, compChoice);
        // console.log(`User Score: ${userScore}, Computer Score: ${compScore}`);  
    }
};

choices.forEach((choice) => {
    // console.log("successfully extracted choices");
    choice.addEventListener('click', () => { 
        // console.log(choice.id);
        const userChoice = choice.id;
        playGame(userChoice);
    });
});