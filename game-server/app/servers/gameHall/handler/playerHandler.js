/**
 * Created by wyw on 6/5/15.
 */
var GameEntity = require('../../logic/gameEntity.js');

module.exports = function(app) {
    return new Handler(app);
};

var Handler = function(app) {
    this.app = app;
};

Handler.prototype = {
    addToGame: function(msg, session, next) {
        var entities = []
        for (var i = 0; i < 10; i++) {
            entities.push(new GameEntity({
                entityId: i,
                position: {
                    x: Math.random() * 1000,
                    y: Math.random() * 800
                },
                speed: {
                    x: Math.random() * 3,
                    y: Math.random() * 3
                },
                radius: Math.random(),
                property: 0
            }));
        }
        next(null, entities);
    }
};