document.addEventListener('DOMContentLoaded', () => {

  //card options
  const cardArray = [
    {
        name: 'fries',
        img: 'img/fries.png'
    },

    {
        name: 'fries',
        img: 'img/fries.png'
    },


    {
        name: 'cheeseburger',
        img: 'img/cheeseburger.png'
    },

    {
        name: 'cheeseburger',
        img: 'img/cheeseburger.png'
    },

    {
        name: 'hotdog',
        img: 'img/hotdog.png'
    },

    {
        name: 'hotdog',
        img: 'img/hotdog.png'
    },

    {
        name: 'ice-cream',
        img: 'img/ice-cream.png'
    },

    {
        name: 'ice-cream',
        img: 'img/ice-cream.png'
    },

    {
        name: 'milkshake',
        img: 'img/milkshake.png'
    },

    {
        name: 'milkshake',
        img: 'img/milkshake.png'
    },

    {
        name: 'pizza',
        img: 'img/pizza.png'
    },

    {
        name: 'pizza',
        img: 'img/pizza.png'
    },
]    

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');

let cardsChosen = []
let cardsChosenId = []
let cardsWon = []


//create your board
function createBoard(){
    for(let i = 0; i < cardArray.length; i++) {

        let card = document.createElement('img');
        card.setAttribute('src', 'img/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipcard);
        grid.appendChild(card);
    }
}

//check for matches
function checkForMatch() {
    let cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('Cool!!! You found a match');
        cards[optionOneId].setAttribute('src', 'img/white.png')
        cards[optionTwoId].setAttribute('src', 'img/white.png')
        cardsWon.push(cardsChosen);
    } 
    
    else{
        cards[optionOneId].setAttribute('src', 'img/blank.png')
        cards[optionTwoId].setAttribute('src', 'img/blank.png')
        alert('Oops!!! Sorry Try Again');
    }

    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
         resultDisplay.textContent = 'Congratulations!!! You found them all!'
    }

}
  
//flip your card
function flipcard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }


}

createBoard();

}) 