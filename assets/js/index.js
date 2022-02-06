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

// flip your card
function flipCard(){

}


// update game




createBoard();
