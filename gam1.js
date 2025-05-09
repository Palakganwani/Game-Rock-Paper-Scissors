const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

document.querySelectorAll(".choice").forEach(button => {
    button.addEventListener("click", function() {
        const playerChoice = this.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        
        const result = getWinner(playerChoice, computerChoice);
        
        document.getElementById("result").textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
        
        document.getElementById("score").textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
    });
});

function getWinner(player, computer) {
    if (player === computer) {
        return "It's a draw!";
    }

    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        playerScore++;
        return "You win! 🎉";
    } else {
        computerScore++;
        return "You lose! 😢";
    }
}
