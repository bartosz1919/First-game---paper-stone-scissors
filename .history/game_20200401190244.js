const choice = [...document.querySelectorAll(".select img")];
const btnStart = document.querySelector(".start");

const statistic = {
    games: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const game = {
    playerHand: "",
    aiHand: "",
}



function handSelection(e) {
    game.playerHand = this.dataset.option;

    choice.forEach(hand => hand.style.boxShadow = "");
    this.style.boxShadow = "0 0 0 4px yellow"
}

function handAi() {
    const ai = Math.floor(Math.random() * 3)

    switch (ai) {
        case 0:
            game.aiHand = "stone";
            break;
        case 1:
            game.aiHand = "paper"
            break;
        case 2:
            game.aiHand = "scissors"
            break;
    }
    document.querySelector("[data-summary=your-choice]").textContent = game.playerHand;
    document.querySelector("[data-summary=ai-choice]").textContent = game.aiHand;
    let winner = "";
    let color = "";

    document.querySelector("p.numbers span").textContent = ++statistic.games;
    if (game.playerHand === game.aiHand) {
        winner = "Draw";
        document.querySelector("p.draws span").textContent = ++statistic.draws;
    } else if (game.playerHand === 'stone' && game.aiHand === 'scissors' || game.playerHand === 'paper' && game.aiHand === 'stone' || game.playerHand === 'scissors' && game.aiHand === 'paper') {
        winner = "Player";
        document.querySelector("p.wins span").textContent = ++statistic.wins;
    } else {
        winner = "AI";
        document.querySelector("p.losses span").textContent = ++statistic.losses;
    }

    document.querySelector("[data-summary=who-win]").textContent = winner;
    document.querySelector("[data-summary=who-win]").style.color = `${color}`;

}



choice.forEach(hand => hand.addEventListener('click', handSelection));


function check() {
    if (game.playerHand) {
        handAi();

    }
}



btnStart.addEventListener('click', check);