class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
    this.chips;
    this.chipsInPlay;
  }

  receiveCard(card) {
    this.hand.push(card);
  }

  setChips(amount) {
    this.chips = amount;
  }

  getChips() {
    return this.chips;
  }

  betChips(amount) {
    if (amount > this.chips) return 'Not enough chips';
    this.chipsInPlay = amount;
    this.chips -= amount;
    return amount;
  }
}

module.exports = Player;