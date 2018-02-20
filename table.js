'use strict';

const Player = require("./player.js");
const Dealer = require("./dealer.js");

class Table {
  constructor() {
    this.dealer = new Dealer;
    this.players = [];
    this.field = [];
    this.pot;
  }

  seatPlayer(name) {
    this.players.push(new Player(name));
    return this.players[this.players.length-1];
  }

  receiveCard(card) {
    this.field.push(card);
  }
}

module.exports = Table;