(function () {
  function Game(map) {
    this.food = new Food();
    this.snake = new Snake();
    this.map = map;
  }

  Game.prototype.start = function () {
    this.food.render(this.map);
    this.snake.render(this.map);
    this.snake.move();
  };

  window.Game = Game;
})();

var map = document.getElementById('map');
var game = new Game(map);
game.start();
