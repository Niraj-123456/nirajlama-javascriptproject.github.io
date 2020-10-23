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
        image1.src = "../static/images/paper.jpg"
        var desc = document.createTextNode("You chose Paper")
        div4.appendChild(desc)
    }
    else if(id == "rock"){
        image1.src = "../static/images/rock.jpg"
        var desc = document.createTextNode("You chose Rock")
        div4.appendChild(desc)
    }
    else if(id == "scissor"){
        image1.src = "../static/images/scissor.jpeg"
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
document.querySelector('#blackjack-hit-button').addEventListener('click', blackJackHit);

let blackJackGame = {
    'you' : {'scoreSpan': '#blackjack-your-score', 'div': '#your-box', 'score': 0},
    'challenger' : {'scoreSpan': '#blackjack-challenger-score', 'div': '#challenger-box', 'score': 0},
}

const YOU = blackJackGame['you']
const CHALLENGER = blackJackGame['challenger']

function blackJackHit(){
    console.log('you hit me.')
    let cardImage = document.createElement('img')
    cardImage.src = '../static/images/Q.png'
    document.querySelector(YOU['div']).appendChild(cardImage)
}


