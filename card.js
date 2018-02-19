class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
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
}

module.exports = Card;