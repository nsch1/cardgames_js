'use strict';

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
    this.currentTable;
    fillDeck.bind(this)();
  }

  shuffleDeck() {
    shuffle(this.deck);
  }

  dealCard(place) {
    place.receiveCard(this.deck.pop());
  }

  dealCards(amount = 1) {
    let currentPlayers = this.currentTable.players
    for (let i = 0; i < amount; i++) {
      for (let p = 0; p < currentPlayers.length; p++) {
        this.dealCard(currentPlayers[p]);
      }
    }
  }

  playCards(amount = 1) {
    for (let i = 0; i < amount; i++) {
      this.dealCard(this.currentTable);
    }
  }

  burnCard() {
    this.deck.pop();
  }
}

module.exports = Dealer;