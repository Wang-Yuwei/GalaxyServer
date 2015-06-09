/**
 * Created by wyw on 6/7/15.
 */

module.exports = function(options) {
    return new GameEntity(options);
};

GameEntity = function(options) {
    this.entityId = options.entityId;
    this.position = options.position ? options.position : {x: 0, y: 0};
    this.speed = options.speed ? options.speed : {x: 0, y: 0};
    this.property = options.speed ? options.property : 'neutral';
    this.radius = options.radius ? options.radius : 10;
    this.playerId = options.playerId;
};