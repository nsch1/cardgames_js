'use strict';

const Table = require('./table.js');

let table = new Table;
let dealer = table.dealer;
let player = table.seatPlayer('Nick');
let opponent = table.seatPlayer('Dealer');

dealer.dealCards(2);

console.log();