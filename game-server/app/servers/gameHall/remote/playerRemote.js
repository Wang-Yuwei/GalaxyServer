/**
 * Created by wyw on 6/6/15.
 */

var gameHall = require('../../logic/gameHall');

exports.playerLeave = function(playerId, callback) {
//    gameHall.removePlayer(playerId);
    //TODO notify users that one player has leave the game
};

exports.playerJoin = function(playerId, callback) {
    gameHall.addPlayer(playerId);
};