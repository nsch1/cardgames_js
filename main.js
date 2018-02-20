'use strict';

const Table = require('./table.js');

let test = new Table;
let dealer = test.dealer;
let player = test.seatPlayer("test");

dealer.currentTable = test;

console.log(player);

dealer.dealCards(2);

console.log(player.hand);

console.log(dealer.deck[dealer.deck.length-1]);

dealer.burnCard();

console.log(dealer.deck[dealer.deck.length-1]);

dealer.playCards();

console.log(test.field);

player.setChips(100);

console.log(player.getChips());

console.log(player.betChips(101));

console.log(player.getChips());

console.log(player.betChips(80));