(function () {
  var position = 'absolute';
  var elements = [];

  function Food(options) {
    const {
      x = 0,
      y = 0,
      width = 20,
      height = 20,
      color = 'green',
    } = options || {};
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  Food.prototype.render = function (map) {
    remove();

    // 随机生成方块
    this.x = Tools.getRandom(0, map.offsetWidth / this.width - 1) * this.width;
    this.y =
      Tools.getRandom(0, map.offsetHeight / this.height - 1) * this.width;

    var div = document.createElement('div');
    map.appendChild(div);

    elements.push(div);

    div.style.position = position;
    div.style.left = this.x + 'px';
    div.style.top = this.y + 'px';
    div.style.width = this.width + 'px';
    div.style.height = this.height + 'px';
    div.style.background = this.color;
  };

  function remove() {
    for (var i = elements.length - 1; i >= 0; i--) {
      elements[i].parentNode.removeChild(elements[i]);
      elements.splice(i, 1);
    }
  }

  window.Food = Food;
})();

var map = document.getElementById('map');
var food = new Food();
food.render(map);
