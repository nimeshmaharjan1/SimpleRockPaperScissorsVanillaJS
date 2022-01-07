function rpsGame(yourChoice) {
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberOfChoice(randomBotChoice());
    const results = decideWinner(humanChoice, botChoice);
    const message = finalMessage(results);
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}


function randomBotChoice() {
    return Math.floor(Math.random() * 3);
}

function numberOfChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': {
            'scissors': 1,
            'rock': 0.5,
            'paper': 0
        },
        'paper': {
            'rock': 1,
            'paper': 0.5,
            'scissors': 0
        },
        'scissors': {
            'paper': 1,
            'scissors': 0.5,
            'rock': 0
        },
    }
    const yourScore = rpsDatabase[yourChoice][computerChoice];
    const computerScore = rpsDatabase[computerChoice][yourChoice];
    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {
            'message': 'You lost.',
            'color': 'red'
        };
    } else if (yourScore === 0.5) {
        return {
            'message': 'You tied.',
            'color': 'yellow'
        }
    } else {
        return {
            'message': 'You won.',
            'color': 'green'
        }
    }
}

function rpsFrontEnd(yourChoiceImage, botChoiceImage, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    let yourDiv = document.createElement('div');
    let messageDiv = document.createElement('div');
    let botDiv = document.createElement('div');

    yourDiv.innerHTML = "<img src = '" + imagesDatabase[yourChoiceImage] + "' height = 150 width = 150>"

    messageDiv.innerHTML = "<h1 style = 'color: " + finalMessage.color + ";font-size: 42px; padding: 2rem; '>" + finalMessage.message + "</h1>"

    botDiv.innerHTML = "<img src = '" + imagesDatabase[botChoiceImage] + "' height = 150 width = 150>"
    document.getElementById('rps').appendChild(yourDiv);
    document.getElementById('rps').appendChild(messageDiv);
    document.getElementById('rps').appendChild(botDiv);
}