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
}
/*
let test = new Table;
let dealer = test.dealer;

console.log(test.seatPlayer("test"));
*/