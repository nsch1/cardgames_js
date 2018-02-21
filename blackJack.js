'use strict';

const Table = require('./table.js');

let table = new Table;
let dealer = table.dealer;
let player = table.seatPlayer('Nick');
let opponent = table.seatPlayer('Dealer');

dealer.currentTable = table;

// Player chooses how many chips to bring.
player.setChips(200);

// Player bets chips.
let betAmount = player.betChips(20);

dealer.shuffleDeck();

dealer.dealCards(2);

// Game starts.
console.log(`${player.name} has: ` + 
            `${player.hand[0].getRankName()} of ` +
            `${player.hand[0].getSuit()} & ` +
            `${player.hand[1].getRankName()} of ` +
            `${player.hand[1].getSuit()}.\n`);
// Calculate & show player score
// Check for blackjack

console.log('Dealer has: ' +
            `${opponent.hand[0].getRankName()} of ` +
            `${opponent.hand[0].getSuit()} & ` +
            'card is updside down.');
// Calculate & show dealer score
// If shown card is ace, player can buy insurance.

// Player should be able to hit stand or double
// If player hits or double should check for bust
// If player doubles check if player has enough chips, if so double the bet and deal a card.
// If bust game end & player loses chips in play
// If player stands continue game.

// Show dealer cards & check who wins
// If player wins double chips in play and add to player chips, remove chips in play.
// If player loses remove chips in play.