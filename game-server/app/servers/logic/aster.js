module.exports = function(options) {
    return new Aster(options);
};

var Aster = function(options) {
    this.position = options.position;
    this.velocity = options.velocity;
    this.radius = options.radius;
    this.property = options.property;
    this.asterId = options.asterId;
};

Aster.prototype = {
    move: function() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    },
    reverseVelocityX: function () {
        this.velocity.x = - this.velocity.x;
    },
    reverseVelocityY: function () {
        this.velocity.y = - this.velocity.y;
    }
};