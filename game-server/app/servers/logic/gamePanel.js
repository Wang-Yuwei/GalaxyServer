/**
 * Created by wyw on 6/7/15.
 */

var Uid = require('../../util/uid.js');
var GameEntity = require('./gameEntity.js');

module.exports = function(gamehall) {
    return new GamePanel(gamehall);
};

function GamePanel(gameHall) {
    this.gameHall = gameHall;
    this.entityList = {};
    this.playerList = {};
}

GamePanel.prototype = {
    addPlayer: function(playerId) {
        var entity = new GameEntity({
            playerId: playerId,
            entityId: entityIdGenerator.getUid(),
        });
        this.entityList[entity.entityId] = entity;
        this.playerList[playerId] = entity;
    },
    removePlayer: function(playerId) {
        var entity = this.playerList[playerId];
        delete this.entityList[entity.entityId];
        delete this.playerList[playerId];
    },
    getPlayersNumber: function() {
        return this.playerList.length;
    },
    update: function() {
        //TODO add the actions of each frame
    },
    dispatchMessage: function(msg, targetUids) {
        this.gameHall.getChannelService().pushMessageByUids('onMsg', msg, targetUids, {}, function(err) {
            if (err) {
                console.log('Push Message Error: ' + err.stack);
            }
        });
    }
};

var entityIdGenerator = new Uid();
