'use strict:'

const Card = require('./card.js');
const Player = require('./player.js');

function fillDeck() {
  let suits = ["Hearts", "Diamonds", "Spades", "Clubs"];

  for (let i = 0; i < suits.length; i++) {
    for (let c = 2; c < 15; c++) {
      this.deck.push(new Card(suits[i], c));
    }
  }
}

function shuffle(array) {
  let currentIndex = array.length, temp, rand;

  while(currentIndex) {
    rand = Math.floor(Math.random() * currentIndex--);
    temp = array[currentIndex];
    array[currentIndex] = array[rand];
    array[rand] = temp;
  }
  return array;
}

class Dealer {
  constructor() {
    this.deck = [];
    this.current_table;
    fillDeck.bind(this)();
  }

  shuffleDeck() {
    shuffle(this.deck);
  }
}

let test = new Dealer;

console.log(test.deck[0]);

test.shuffleDeck();

console.log(test.deck[0]);