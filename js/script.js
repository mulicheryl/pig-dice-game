var playerOne = "";
var playerTwo = "";

var throwdice = function () {
 return Math.floor(6 * Math.random()) + 1;
}

function Player(turn) {
 this.roll = 0;
 this.tempscore = 0;
 this.totalscore = 0
 this.turn = turn;
 this.playerName;

}

Player.prototype.rollone = function () {
 if (this.roll === 1) {
  this.tempscore = 0;
  alert("Sorry " + this.playerName + ", you rolled a 1! Your turn is over!");
 } else {
  this.tempscore += this.roll;
 }
}


Player.prototype.hold = function () {
 this.totalscore += this.tempscore;
 this.tempscore = 0;
 alert(this.playerName + ", your turn is over, pass the mouse!");
}


Player.prototype.winnerCheck = function () {
 if (this.totalscore >= 50) {
  alert(this.playerName + " You are the winner!");
 }
}

Player.prototype.newGame = function () {
 this.roll = 0;
 this.tempscore = 0;
 this.totalscore = 0;
 this.playerName = "";
}

var clearValues = function () {
 $(".player0ne").val("");
 $(".playerTwo").val("");
}

$(document).ready(function () {

 $("button#play").click(function (event) {
  playerOne = new Player(true);
  playerTwo = new Player(false);
  $("#gameSection").show();
  $("#nameDetails").hide();
  $(".jumbotron").hide();

  var player_one = $(".playerOne").val();
  $("#playerOne").text(player_two);

  var player_two = $(".playerTwo").val();
  $("#playerTwo").text(player_two);

  playerOne.playerName = player_one;
  playerTwo.playerName = player_two;

 });
 $("button#newGame").click(function (event) {
  $("#gameSection").hide();
  clearValues();
  playerOne.newGame();
  playerTwo.newGame();
  $("#round-total-1").empty();
  $("#total-score-1").empty();
  $("#dice-roll-1").empty();
  $("#round-total-2").empty();
  $("#total-score-2").empty();
  $("#die-roll-2").empty();

  $("#nameDetails").show();
  $(".jumbotron").show();
 });

 $("button#playerOne-roll").click(function (event) {
  playerOne.roll = throwdice();
  $("#dice-roll-1").text(playerOne.roll);
  playerOne.rollone();
  $("#round-total-1").text(playerOne.tempscore);
 });

 $("button#playerTwo-roll").click(function (event) {
  playerTwo.roll = throwdice();
  $("#dice-roll-2").text(playerTwo.roll);
  playerTwo.rollone();
  $("#round-total-2").text(playerTwo.tempscore);
 });

 $("button#playerOne-hold").click(function (event) {
  playerOne.hold();
  $("#total-score-1").text(playerOne.totalscore);
  $("#round-total-1").empty();
  $("#dice-roll-1").empty();
  playerOne.winnerCheck();
 });

 $("button#playerTwo-hold").click(function (event) {
  playerTwo.hold();
  $("#total-score-2").text(playerTwo.totalscore);
  $("#round-total-2").empty();
  $("#dice-roll-2").empty();
  playerTwo.winnerCheck();
 });


});