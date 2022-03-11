
var data = { cards: [], playersScores: null };

var players = [{ name: 'damien', hand: [] }, { name: 'damo', hand: [] }, { name: 'dame', hand: [] }, { name: 'D', hand: [] }];
var rank = ['clubs', 'diamonds', 'hearts', 'spades'];
var suit = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Ace', 'Jack', 'King', 'Queen'];

function createDeck(rank, suit) {

  var cardArr = [];
  var cardObj = {};

  for (var i = 0; i < rank.length; i++) {
    for (var j = 0; j < suit.length; j++) {
      cardObj[rank[i]] = suit[j];
      cardArr.push(cardObj);
      cardObj = {};
    }
  }
  data.cards = cardArr;
}

function blackjack(players, cardsPerHand) {
  createDeck(rank, suit);
  shuffle(data.cards);

  var score = 0;
  var cardIndex = 0;
  var obj = {};
  var playersScoresArr = [];
  var winnersCircle = [];

  for (var i = 0; i < players.length; i++) {
    score = 0;

    for (var k = 0; k < cardsPerHand; k++) {
      players[i].hand.push(data.cards[cardIndex]);

      cardIndex++;

      for (var value in players[i].hand[k]) {
        if (typeof players[i].hand[k][value] === 'number') {
          score += players[i].hand[k][value];
        } else if (players[i].hand[k][value] === 'Ace') {
          score += 11;
        } else {
          score += 10;
        }
      }

    }

    players[i].score = score;
    obj[players[i].name] = score;
    playersScoresArr.push(obj);
    obj = {};
  }

  data.playersScores = playersScoresArr;

  winnersCircle.push(playersScoresArr[0]);

  var key = Object.keys(winnersCircle[0]);

  for (i = 1; i < playersScoresArr.length; i++) {
    for (value in playersScoresArr[i]) {

      if (playersScoresArr[i][value] > winnersCircle[0][key]) {
        winnersCircle = [];
        winnersCircle.push(playersScoresArr[i]);
        key = Object.keys(winnersCircle[0]);

      } else if (playersScoresArr[i][value] === winnersCircle[0][key]) {

        winnersCircle.push(playersScoresArr[i]);
      }

    }

  }

  if (winnersCircle.length > 1) {
    console.log('There is a ' + winnersCircle.length + ' way tie!');
    console.log("Let's re-shuffle with the winners circle");
    var playerObj = {};
    players = [];
    data = { cards: [], playersScores: null };
    for (i = 0; i < winnersCircle.length; i++) {

      for (value in winnersCircle[i]) {
        playerObj.name = value;
        playerObj.hand = [];

        players.push(playerObj);
        playerObj = {};
      }
    }

    blackjack(players, cardsPerHand);
  } else {
    for (value in winnersCircle[0]) {
      console.log(value + ' is the winner with ' + winnersCircle[0][value] + ' points');
    }
  }

}

blackjack(players, 5);

function shuffle(array) {
  var randomNum = 0;
  var holder = 0;
  for (var j = array.length - 1; j > 0; j--) {
    randomNum = Math.floor(Math.random() * (j + 1));
    holder = array[j];
    array[j] = array[randomNum];
    array[randomNum] = holder;
    holder = 0;

  }
}
