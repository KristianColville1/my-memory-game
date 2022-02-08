if( document.readyState !== 'loading' ) {
    console.log( 'document is already ready, just execute code here' );
    playGame();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        playGame();
    });
}

function playGame() {
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
    ];
    
    cardArray.sort(() => 0.5 - Math.random());
    
    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelectorAll('#result');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];
    
    
    // game board created
    function createBoard() {
        for(let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src', 'assets/images/red-white.jpeg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }
    
    // check for matches
    function checkForMatch() {
        const cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        
        if(optionOneId === optionTwoId) {
            cards[optionOneId].setAttribute('src', 'assets/images/red-white.jpeg');
            cards[optionTwoId].setAttribute('src', 'assets/images/red-white.jpeg');
            alert('You have clicked the same image!');
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match');
            cards[optionOneId].setAttribute('src', 'assets/images/green.jpeg');
            cards[optionTwoId].setAttribute('src', 'assets/images/green.jpeg');
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'assets/images/red-white.jpeg');
            cards[optionTwoId].setAttribute('src', 'assets/images/red-white.jpeg');
            alert('Sorry, try again');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if  (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!';
        }
    }
    // flip your card
    function flipCard(){
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 500);
        }
    }
    
    // update game
    createBoard();
}




    


