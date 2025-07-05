let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');

const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * 3);
    return options[randomNum];
};
const playGame = (userChoice) => {
    // console.log('user choice:', userChoice);
    const compChoice = genCompChoice();
    if(userChoice === compChoice) {
        console.log("It's a tie!");
    }else if(userChoice==="rock" && compChoice==="scissors"){
        userScore++;
        console.log("You win! Rock beats Scissors");
    }else if(userChoice==="paper" && compChoice==="rock"){
        userScore++;
        console.log("You win! Paper beats Rock");
    }else if(userChoice==="scissors" && compChoice==="paper"){
        userScore++;
        console.log("You win! Scissors beats Paper");
    }else if(userChoice==="rock" && compChoice==="paper"){
        compScore++;
        console.log("You lose! Paper beats Rock");
    }else if(userChoice==="paper" && compChoice==="scissors"){
        compScore++;
        console.log("You lose! Scissors beats Paper");
    }else if(userChoice==="scissors" && compChoice==="rock"){
        compScore++;
        console.log("You lose! Rock beats Scissors");
    }
};

choices.forEach((choice) => {
    // console.log("successfully extracted choices");
    choice.addEventListener('click', () => { 
        console.log(choice.id);
        const userChoice = choice.id;
        playGame(userChoice);
    });
});