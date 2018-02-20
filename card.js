class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
    this.value = rank;
  }

  getSuit() {
    return this.suit;
  }

  getRank() {
    return this.rank;
  }

  getRankName() {
    let ranks = ["Jack", "Queen", "King", "Ace"];
    if (this.getRank() >= 11) {
      return ranks[this.getRank() - 11];
    } else {
      return this.getRank();
    }
  }

  setBlackJackValue() {
    if (this.rank >= 11 && this.rank < 14) {
      this.value = 10;
    } else {
      this.value = 11;
    }
  }
}

module.exports = Card;