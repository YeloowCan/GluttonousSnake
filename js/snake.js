(function () {
  var position = 'absolute';
  var elements = [];

  function Snake(options) {
    const { width = 20, height = 20, direction = 'right' } = options || {};
    this.width = width;
    this.height = height;
    this.direction = direction;
    this.body = [
      { x: 3, y: 2, color: 'red' },
      { x: 2, y: 2, color: 'blue' },
      { x: 1, y: 2, color: 'blue' },
    ];
  }

  Snake.prototype.render = function (map) {
    remove();

    for (var i = 0, len = this.body.length; i < len; i++) {
      var object = this.body[i];
      var div = document.createElement('div');
      map.appendChild(div);
      elements.push(div);
      div.style.position = position;
      div.style.width = this.width + 'px';
      div.style.height = this.height + 'px';
      div.style.left = object.x * this.width + 'px';
      div.style.top = object.y * this.height + 'px';
      div.style.backgroundColor = object.color;
    }
  };

  Snake.prototype.move = function (food, map) {
    for (var i = this.body.length - 1; i > 0; i--) {
      this.body[i].x = this.body[i - 1].x;
      this.body[i].y = this.body[i - 1].y;
    }

    var head = this.body[0];
    switch (this.direction) {
      case 'right':
        head.x += 1;
        break;
      case 'left':
        head.x -= 1;
        break;
      case 'top':
        head.y -= 1;
        break;
      case 'bottom':
        head.y += 1;
        break;
    }

    var headx = head.x * this.width;
    var heady = head.y * this.height;
    if (headx === food.x && heady === food.y) {
      var last = this.body[this.body.length - 1];
      this.body.push({
        ...last,
      });
      food.render(map);
    }
  };

  function remove() {
    for (var i = elements.length - 1; i >= 0; i--) {
      elements[i].parentNode.removeChild(elements[i]);
      elements.splice(i, 1);
    }
  }

  window.Snake = Snake;
})();
