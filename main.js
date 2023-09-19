let computerScore = 0;
let playerScore = 0;

document.querySelector(".stone").addEventListener("click", function() {
    playRound("stone");
});

document.querySelector(".scissors").addEventListener("click", function() {
    playRound("scissors");
});

document.querySelector(".paper").addEventListener("click", function() {
    playRound("paper");
});

function playRound(playerChoice) {
    const choices = ["stone", "scissors", "paper"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let roundResult = "";

    if (playerChoice === computerChoice) {
        roundResult = "Нічия!";
    } else if (
        (playerChoice === "stone" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "stone")
    ) {
        roundResult = "Ви перемогли!";
        playerScore++;
    } else {
        roundResult = "Комп'ютер переміг.";
        computerScore++;
    }

    document.querySelector(".result").textContent = `Ви обрали ${playerChoice}, комп'ютер обрав ${computerChoice}. ${roundResult}`;
    document.querySelector(".computer-score").textContent = computerScore;
    document.querySelector(".player-score").textContent = playerScore;
}