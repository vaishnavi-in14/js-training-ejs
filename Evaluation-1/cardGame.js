"use strict";
class CardCollection {
    constructor() {
        this.collection = [];
    }
}
CardCollection.prototype.addCard = function(card) {
    this.collection.push(card);
    return this.collection;
};
CardCollection.prototype.deal = function(card, size) {
    for (let i = 0; i < size; i++) {
        return this.collection.pop(card);
    }
};
CardCollection.prototype.shuffle = function() {
    for (let i = 0; i < this.collection.length; i++) {
        // choose a random number between i and length - 1
        const num = Math.floor(Math.random() * this.collection.length - i) + i;
        // swap the ith card and the randomly-chosen card
        let temp = this.collection[i];
        this.collection[i] = this.collection[num];
        this.collection[num] = temp;
    }
    return this.collection;
};



class Deck extends CardCollection {
    constructor() {
        super();
    }
}
Deck.prototype.deck = function() {
    const suits = ["Club", "Diamond", "Heart", "Spade"];
    const ranks = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "King", "Queen"];
            
    for (let suit = 0; suit < suits.length; suit++) {
        for (let rank = 0; rank < ranks.length; rank++) {
            this.collection.push(`${suits[suit]} - ${ranks[rank]}`);
        }
    }
    return this.collection;
};
    


class Hand extends CardCollection {
    constructor() {
        super();
        this.hand = [];
    }
}

class Pile extends CardCollection {
    constructor() {
        super();
        this.pile = [];
    }
}


class Player extends Hand{
    constructor() {
        super();
        this.hand = new Hand();
    }   
}

class Eights extends CardCollection{
    constructor() {
        super();
        this.one = new Player();
        this.two = new Player();
        this.drawPile = Hand();
        this.discardPile = Hand();
    }
    Eights() {
        let deck1 = new Deck();
        console.log(deck1.shuffle());
    }

    displayState() {

    }

    playGame() {
        let deck1 = new Deck();
        deck1.shuffle();

        
        // keep playing until there's a winner
        while (!isDone()) {
            let player;
            displayState();
            takeTurn(player);
            player = nextPlayer(player);
        }

        // display the final score
        this.one.displayScore();
        this.two.displayScore();
    }
    isDone() {
        return this.one.hand.isEmpty() || this.two.hand.isEmpty();
    }
}
function main() {
    const game = Eights();
    game.playGame();
}

main();  

const deck1 = new Deck();
console.log(deck1.deck());
console.log(deck1.shuffle());

