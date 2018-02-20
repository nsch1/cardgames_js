'use strict';

const Player = require("./player.js");
const Dealer = require("./dealer.js");

class Table {
  constructor() {
    this.dealer = new Dealer;
    this.players = [];
    this.field = [];
  }
}