'use strict:'

const Card = require('./card.js');
const Player = require('./player.js');

function fillDeck() {
  let suits = ["Hearts", "Diamonds", "Spades", "Clubs"];

  for (var i = 0; i < suits.length; i++) {
    for (var c = 2; c < 15; c++) {
      this.deck.push(new Card(suits[i], c));
    }
  }
}

class Dealer {
  constructor() {
    this.deck = [];
    this.current_table;
    fillDeck.bind(this)();
  }
}

let test = new Dealer;

console.log(test.deck[0]);