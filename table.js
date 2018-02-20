'use strict';

const Player = require("./player.js");
const Dealer = require("./dealer.js");

class Table {
  constructor() {
    this.dealer = new Dealer;
    this.players = [];
    this.field = [];
  }

  seatPlayer(name) {
    this.players.push(new Player(name));
    return this.players[this.players.length-1];
  }

  receiveCard(card) {
    this.field.push(card);
  }
}
/*
let test = new Table;
let dealer = test.dealer;
let player = test.seatPlayer("test");

dealer.currentTable = test;

console.log(player);

dealer.dealCards(2);

console.log(player.hand);
*/