document.addEventListener('DOMContentloaded', () => {

    // card options
    const cardArray = [
        {
            name: 'apple',
            img: 'images/apple.jpeg'
        },
        {
            name: 'apple',
            img: 'images/apple.jpeg'
        },
        {
            name: 'banana',
            img: 'images/banana.jpeg'
        },
        {
            name: 'banana',
            img: 'images/banana.jpeg'
        },
        {
            name: 'cherries',
            img: 'images/cherries.jpeg'
        },
        {
            name: 'cherries',
            img: 'images/cherries.jpeg'
        },
        {
            name: 'grape-fruit',
            img: 'images/grape-fruit.jpeg'
        },
        {
            name: 'grape-fruit',
            img: 'images/grape-fruit.jpeg'
        },
        {
            name: 'kiwi',
            img: 'images/kiwi.jpeg'
        },
        {
            name: 'kiwi',
            img: 'images/kiwi.jpeg'
        },
        {
            name: 'orange',
            img: 'images/orange.jpeg'
        },
        {
            name: 'orange',
            img: 'images/orange.jpeg'
        }
    ]

    const grid = document.querySelector('.grid');

    // create game board
    function createBoard(){
        for(let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src', './images/green.jpeg');
            card.setAttribute('data-id', i);
            // card.addEventListener('click', flipcard);
            grid.appendChild(card);                     // Uses the appendChild method
        }
    }
    console.log('fuck this bug');
    createBoard();


})
