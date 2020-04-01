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
    // console.log(this.dataset.option);
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
    console.log(game.aiHand);

    if (game.playerHand === game.aiHand) {
        // document.querySelector(span.dataset.option.summary.who - win)
        console.log('Remis');
    } else if (game.playerHand === 'stone' && game.aiHand === 'scissors' || game.playerHand === 'paper' && game.aiHand === 'stone' || game.playerHand === 'scissors' && game.aiHand === 'paper') {
        console.log('Wygrałeś');
    } else {
        console.log('wygrał komp');
    }
}



choice.forEach(hand => hand.addEventListener('click', handSelection));


function check() {
    if (game.playerHand) {
        handAi();

    }
}



btnStart.addEventListener('click', check);