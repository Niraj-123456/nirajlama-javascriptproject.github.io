var btn = document.getElementsByClassName('image');

for(var i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', function(){
        var id = this.dataset.id
        console.log("Id: ", id)
        if(id != ' '){
            startGame(id)
        }
        else{
            console.log("Invalid Input")
        }
    })
}
// start the rock, paper and scissor game
function startGame(id){
    console.log(id)
    var random = Math.floor(Math.random() * 3)
    console.log(random)

    var text = ""
    if(id == "paper"){
        if(random == "0"){
            text = "You won with Paper."
        }
        else if(random == "1"){
            text = "Game was a tie."
        }
        else if(random == "2"){
            text = "Computer won with Scissor."
        }
    }
     if(id == "rock"){
        if(random == "0"){
            text = "Game was a tie."
        }
        else if(random == "1"){
            text = "Computer won with Paper."
        }
        else if(random == "2"){
            text = "You won with Rock"
        }
    }
    if(id == "scissor"){
        if(random == "0"){
            text = "Computer won with rock."
        }
        else if(random == "1"){
            text = "You won with scissor."
        }
        else if(random == "2"){
            text = "Game was a tie."
        }
    }
    console.log(text)
    var paragraph = document.createElement('p')
    paragraph.setAttribute('class', 'list-group-item list-group-item-success')
    var text = document.createTextNode(text)
    paragraph.appendChild(text)
    document.getElementById('result').appendChild(paragraph)
    document.getElementById('game-image').remove()
    var div = document.createElement('div')
    div.setAttribute('id', 'game-image')
    div.setAttribute('class', 'game-image')
    document.getElementById("row2").appendChild(div)
    var div2 = document.createElement('div')
    div2.setAttribute('class', 'human-image')
    div.appendChild(div2)
    var div3 = document.createElement('div')
    div3.setAttribute('class', 'computer-image')
    div.appendChild(div3)
    var image1 = document.createElement('img')
    var div4 = document.createElement('div')
    div4.setAttribute('class', 'desc')
    var div5 = document.createElement('div')
    div5.setAttribute('class', 'desc')
    image1.src = ""

    if(id == "paper"){
        image1.src = "paper.jpg"
        var desc = document.createTextNode("You chose Paper")
        div4.appendChild(desc)
    }
    else if(id == "rock"){
        image1.src = "rock.jpg"
        var desc = document.createTextNode("You chose Rock")
        div4.appendChild(desc)
    }
    else if(id == "scissor"){
        image1.src = "scissor.jpeg"
        var desc = document.createTextNode("You chose Scissor")
        div4.appendChild(desc)
    }

    div2.appendChild(image1)
    div2.appendChild(div4)

    var image2 = document.createElement('img')
    image2.src = ""
    if(random == 0){
        image2.src = "rock.jpg"
        var desc = document.createTextNode("Computer chose Rock")
        div5.appendChild(desc)
    }
    else if(random == 1){
        image2.src = "paper.jpg"
        var desc = document.createTextNode("Computer chose Paper")
        div5.appendChild(desc)
    }
    else if(random == 2){
        image2.src = "scissor.jpeg"
        var desc = document.createTextNode("Computer chose Scissor")
        div5.appendChild(desc)
    }

    div3.appendChild(image2)
    div3.appendChild(div5)
}

// Convert the birth year in days
function ageInDays(){
    var birthYear = prompt("Enter your Birth Date: ")
    var currentDate = new Date()
    var currentYear = currentDate.getFullYear()
    var age = currentYear - birthYear
    var ageInDays = age * 365
    var text = document.createTextNode('Your are' + ' ' + ageInDays + ' ' + 'days old')
    var ul = document.createElement('ul')
    var li = document.createElement('li')
    li.appendChild(text)
    ul.setAttribute('id', 'list-group')
    ul.setAttribute('class', 'list-group mb-2')
    li.setAttribute('class', 'list-group-item list-group-item-success')
    document.getElementById('age-in-days').appendChild(ul)
    ul.appendChild(li)
}

// reset the function
function reset(){
    document.getElementById('list-group').remove()
}

// generate the cat
function generateCat(){
    var image = document.createElement('img')
    image.src = 'https://images.unsplash.com/photo-1583524505974-6facd53f4597?ixlib=rb-1.2.1&w=1000&q=80'
    document.getElementById('cat-flex-box').appendChild(image)
}

// blackjack game challenge
let blackJackGame = {
    'you' : {'scoreSpan': '#blackjack-your-score', 'div': '#your-box', 'score': 0},
    'challenger' : {'scoreSpan': '#blackjack-challenger-score', 'div': '#challenger-box', 'score': 0},
    'card': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
    'cardMap' : {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'J': 10, 'Q': 10, 'A': [1, 11]},
    'wins': 0,
    'losses': 0,
    'draws': 0,
    'isStand': false,
    'turnsOver': false,
}

const YOU = blackJackGame['you']
const CHALLENGER = blackJackGame['challenger']

const hitSound = new Audio('swish.m4a')
const winSound = new Audio('cash.mp3')
const lossSound = new Audio('aww.mp3')

document.querySelector('#blackjack-hit-button').addEventListener('click', blackJackHit);

document.querySelector('#blackjack-stand-button').addEventListener('click', challengerLogic);

document.querySelector('#blackjack-deal-button').addEventListener('click', blackJackDeal);


function blackJackHit(){
    if(blackJackGame['isStand'] === false){
        let card = randomCard()
        showCard(card, YOU)
        updateScore(card, YOU)
        showScore(YOU)
    }  
}

function randomCard(){
    let randomIndex = Math.floor(Math.random() * 13)
    return blackJackGame['card'][randomIndex]
}

function showCard(card, activePlayer){
    if(activePlayer['score'] <= 21){
        let cardImage = document.createElement('img')
        cardImage.src = `${card}.png`
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play()
    }
}

function blackJackDeal(){
    if(blackJackGame['turnsOver'] === true){
        blackJackGame['isStand'] = false
        let yourImages = document.querySelector('#your-box').querySelectorAll('img')
        let dealerImages = document.querySelector('#challenger-box').querySelectorAll('img')

        for(i=0; i<yourImages.length; i++){
            yourImages[i].remove()
        }

        for(i=0; i<dealerImages.length; i++){
            dealerImages[i].remove();
        }

        YOU['score'] = 0
        CHALLENGER['score'] = 0

        document.querySelector('#blackjack-your-score').textContent = 0
        document.querySelector('#blackjack-your-score').style.color = '#ffffff'

        document.querySelector('#blackjack-challenger-score').textContent = 0
        document.querySelector('#blackjack-challenger-score').style.color = '#ffffff'

        document.querySelector('#blackjack-result').textContent = "Let's Play"
        document.querySelector('#blackjack-result').style.color = '#ffffff'

        blackJackGame['turnsOver'] = false
    }
}

function updateScore(card, activePlayer){
    if(card === 'A'){
        //if adding 11 keeps the current score below or equal to 21 add 11 else add 1
        if((activePlayer['score'] + blackJackGame['cardMap'][card][1]) <= 21){
            activePlayer['score'] += blackJackGame['cardMap'][card][1]
        }
        else{
            activePlayer['score'] += blackJackGame['cardMap'][card][0]
        }
    }
    else{
        activePlayer['score'] += blackJackGame['cardMap'][card]
    }
}

function showScore(activePlayer){
    if(activePlayer['score'] > 21){
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST'
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red'
    }
    else{
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score']
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function challengerLogic(){
    blackJackGame['isStand'] = true

    while(CHALLENGER['score'] < 16 && blackJackGame['isStand'] === true){
        let card = randomCard()
        showCard(card, CHALLENGER)
        updateScore(card, CHALLENGER)
        showScore(CHALLENGER)
        await sleep(1000)
    }

    blackJackGame['turnsOver'] = true
    let winner = computeWinner()
    showResult(winner)
}

// compute the winner
function computeWinner(){
    let winner

    // if your score is less than 21 but challengers score is greater than 21 or less than your score
    if(YOU['score'] <= 21 ){
        if(YOU['score'] > CHALLENGER['score'] || CHALLENGER['score'] > 21){
            blackJackGame['wins']++
            winner = YOU
        }
        else if(YOU['score'] < CHALLENGER['score']){
            blackJackGame['losses']++
            winner = CHALLENGER
        }
        else if(YOU['score'] === CHALLENGER['score']){
            blackJackGame['draws']++
        }
    }
    // if your score is greate than 21 and challengers score is less than or equal to 21
    else if(YOU['score'] > 21 && CHALLENGER['score'] <= 21){
        blackJackGame['losses']++
        winner = CHALLENGER
    }
    // both the players score is greater than 21
    else if(YOU['score'] > 21 && CHALLENGER['score'] > 21){
        blackJackGame['draws']++
    }
    return winner
}

// show the winner
function showResult(winner){
    let message, messageColor

    if(blackJackGame['turnsOver'] === true){
        if(winner === YOU){
            document.querySelector('#wins').textContent = blackJackGame['wins']
            message = 'You Won'
            messageColor = 'green'
            winSound.play()
        }
    
        else if(winner === CHALLENGER){
            document.querySelector('#losses').textContent = blackJackGame['losses']
            message = 'You Lost'
            messageColor = 'red'
            lossSound.play()
        }
    
        else{
            document.querySelector('#draws').textContent = blackJackGame['draws']
            message = 'Draw'
            messageColor = 'black'
        }
    
        document.querySelector('#blackjack-result').textContent = message
        document.querySelector('#blackjack-result').style.color = messageColor   
    }
}
