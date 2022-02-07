const cardArray = [
    {
        name: 'apple',
        img: 'assets/images/apple.jpeg'
    },
    {
        name: 'apple',
        img: 'assets/images/apple.jpeg'
    },
    {
        name: 'banana',
        img: 'assets/images/banana.jpeg'
    },
    {
        name: 'banana',
        img: 'assets/images/banana.jpeg'
    },
    {
        name: 'cherries',
        img: 'assets/images/cherries.jpeg'
    },
    {
        name: 'cherries',
        img: 'assets/images/cherries.jpeg'
    },
    {
        name: 'grape-fruit',
        img: 'assets/images/grape-fruit.jpeg'
    },
    {
        name: 'grape-fruit',
        img: 'assets/images/grape-fruit.jpeg'
    },
    {
        name: 'kiwi',
        img: 'assets/images/kiwi.jpeg'
    },
    {
        name: 'kiwi',
        img: 'assets/images/kiwi.jpeg'
    },
    {
        name: 'orange',
        img: 'assets/images/orange.jpeg'
    },
    {
        name: 'orange',
        img: 'assets/images/orange.jpeg'
    }
]


const grid = document.querySelector('.grid');
var cardsChosen = [];
var cardsChosenId = [];

// game board created
function createBoard() {
    for(let i = 0; i < cardArray.length; i++){
        var card = document.createElement('img');
        card.setAttribute('src', 'assets/images/red-white.jpeg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard());
        grid.appendChild(card);
    }
}

// check for matches
function checkForMatch(){
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if(cardsChosen[0] === cardsChosen[1]){
        alert('You found a match');
        cards[optionOneId].setAttribute('src', 'assets/images/green.jpeg');
        cards[optionTwoId].setAttribute('src', 'assets/images/green.jpeg');
        grid.appendChild(card);
    }
}

// flip your card
function flipCard(){
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if(cardsChosen.length === 2){
        setTimeout(checkForMatch(), 500);
    }
}

// update game

createBoard();
