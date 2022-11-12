(function () {
  var that;
  function Game(map) {
    this.food = new Food();
    this.snake = new Snake();
    this.map = map;
    that = this;
  }

  Game.prototype.start = function () {
    this.food.render(this.map);
    this.snake.render(this.map);
    runSnake();
    bindKey();
  };

  function bindKey() {
    document.addEventListener(
      'keydown',
      function (e) {
        switch (e.keyCode) {
          case 37:
            that.snake.direction = 'left';
            break;
          case 38:
            that.snake.direction = 'top';
            break;
          case 39:
            that.snake.direction = 'right';
            break;
          case 40:
            that.snake.direction = 'bottom';
            break;
          default:
            break;
        }
      },
      false
    );
  }

  function runSnake() {
    var timeId = setInterval(function () {
      that.snake.move(that.food, that.map);
      that.snake.render(that.map);

      var maxX = that.map.offsetWidth / that.snake.width;
      var maxy = that.map.offsetHeight / that.snake.height;
      var headx = that.snake.body[0].x;
      var heady = that.snake.body[0].y;
      if (headx < 0 || heady < 0 || headx >= maxX || heady >= maxy) {
        clearInterval(timeId);
        alert('Game Over');
      }
    }, 150);
  }

  window.Game = Game;
})();
