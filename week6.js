// Node.js testing
function doSomething (x, y){
    if (typeof x != "string"){
        throw new Error("X must be a string");
    }
    return x + y;
}


// Requirements notes included in .txt file for Week 6 assignment folder to save space and cleaner code :)


let rank = [ "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
// Do we need to have a value array for what rank ^^ values are for comparing cards? i.e "2" = 2, "Jack" = 11,...?
let suit = ["Diamonds", "Spades", "Clubs", "Hearts"];
// Could have icons be values for suit array ^^ in full HTML/CSS version of this game :)
let face = rank + " of " + suit;
let gameDeck= [];

// Create full list of values from 2 to A for each suit:
suit.forEach(function(suit){
    rank.forEach(function(rank){
    gameDeck.push(new playerCard(rank, suit));
 })
});

// Create each of those cards in full gameDeck:

    function playerCard(rank, suit){
    this.rank = rank;
    this.suit = suit;
    this.face = rank + " of " + suit;
    }

    console.log(gameDeck);

/*
class playerCard{
    constructor (rank, suit, face){
    this.rank = rank;
    this.suit = suit;
    this.face = rank + " of " + suit;
    }
}
*/

// Need to shuffle gameDeck for random selection of cards for each player
    function shuffleDeck() {
        gameDeck.sort(function(){return 0.5 - Math.random()});
    }
        console.log(shuffleDeck(gameDeck));

/* Shows ^^ as "undefined", but previous gameDeck line shows as expected, list of randomized cards \_(-_-)_/ 
    I tried to do as "return" but Console did not like that */

/*
for (var i = this.deck.length - 1; i > 0; i--){
    var j = Math.floor(Math.random() * (i + 1));
    var temp = this.deck[i];
    this.deck[j] = temp;
}
*/

// Size of each player's deck. Need a deck1 and deck2 to create players' decks and then draw from each://

    let cardDealt = gameDeck.length / 2; //number of cards in each player's deck for game
    let player1Deck = gameDeck.slice(0, cardDealt);
    let player2Deck = gameDeck.slice(cardDealt, cardDealt + gameDeck.length);


/* shared solution from Slack for dealing decks to players
dealCards(){
    this.player1.hand = this.deck.splice(0,26);
    this.player2.hand = this.deck.splice(0,26);
}

// shared solution from Slack for creating individual player's decks to play with
class Player{
    constructor(num){
        this.name = (`Player ${num}`);
        this.hand = [];
    }
}
// Getting "Unexpected token. A constructor, method, accessor, or property was expected" error message. */



// Display Output - have it display or at least show stored as randomized cards per player for checkpoint:
    console.log('Player 1 Deck: ' + player1Deck + '\nPlayer 2 Deck: ' + player2Deck);

/*This ^^ returned equally separated decks, but only displayed "[object Object]"" - need to find out why not displaying 
(rank + suit)? - i.e. be able to confirm is randomized from first "gameDeck", combining of cardRank and cardSuit */

console.log(player1Deck[1]);

/* This ^^ showed a different card for each refresh in Console, so obviously is populating values from somewhere. Need to figure out how to
    fully transfer from gameDeck into player1 and player2Deck for selection/dealing and then match up read outs (rounds 1-26) 
    
Tried using [] around each deck's definitions above, but this didn't change results. \_(-_-)_/ */



//runGame(){
    let player1Points = 0;
    let player2Points = 0;
/* each round
    for (let i = 0; i < this.player1.hand.length; i++){
        console.log(this.player2.hand[i].value);
        if (this.player1.hand[i].value > this.player2.hand[i].value){
            console.log(`Player 1 wins Round ${i}`);
        }
        else if (this.player1.hand[i].value === this.player2.hand[i].value){
            console.log(`Tie - no points for either player`);
        }
        else {
            console.log(`Player 2 wins Round ${i}`)
            player2Points++;
        }
    }
}   */

/*
for (let i = 0; i < this.player1Deck.length; i++){
    console.log(this.player2Deck[i].value);
    if (this.player1Deck[i].value > this.player2Deck[i].value){
        console.log(`Player 1 wins Round ${i}`);
    }
    else if (this.player1Deck[i].value === this.player2Deck[i].value){
        console.log(`Tie - no points for either player`);
    }
    else {
        console.log(`Player 2 wins Round ${i}`)
        player2Points++;
    }
}
*/


// entire game - final winner from Slack convo

if (player1Points > player2Points){
    console.log(`Player 1 won the game with ${player1Points} points.`)
} else if (player1Points < player2Points){
    console.log(`Player 2 won the game with ${player2Points} points.`)
} else {
    console.log(`Both players tied for the game.`)
}

//let war = new Game();


/* Use a for loop for the 26 cards per gameRound, pull random integer [i] of remaining array to play against the other player? 
    Round 1 = integer value of 1? */

/*
class Game {
    constructor(cards){
        this.deck = [];
        this.makeDeck();
        this.round = 0;
        this.player1 = new player1Deck(1);
        this.player2 = new player1Deck(2);
        this.dealCards();
        this.flipCards();
    }
}

makeDeck(){
    for (let x = 0; x = values.length; x++){
        for (let suit of suits){
            //console.log(`${suit} of ${values[x]}`);
            let card = new Card(suit, x + 1, values[i]);
            this.deck.push(card);
        }
    }
}
*/

/* Possible code for running the game:

    function warResult (card1, card2) {
        if (card1.value > card2.value){
            return `${card1.card} won this battle.`
        } else if (card1.value < card2.value) {
            return `${card2.card} won this battle.`
        } else {
            `It's a tie - neither player wins.`
        }
    }
    console.log(warResult(player1Deck, player2Deck)); // this displays above code, not read out of value for each two cards


When ^^ done with values for card1 and card2, shows as "undefined" */
