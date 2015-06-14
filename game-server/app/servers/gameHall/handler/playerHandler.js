/**
 * Created by wyw on 6/5/15.
 */
var gameHall = require('../../logic/gameHall.js');

module.exports = function(app) {
    return new Handler(app);
};

var Handler = function(app) {
    this.app = app;
};

Handler.prototype = {
    addToGame: function(msg, session, next) {
        var playerId = session.get('playerId');
        console.log(playerId);
        gameHall.addPlayerToPanel(playerId);
        var panel = gameHall.getPanelByPlayerId(playerId);
        next(null, {
            playerList: panel.playerList,
            asterList: panel.asterList
        });
    },

    eject: function(msg, session, next) {
        console.log(msg);
        var asterId = gameHall.playerEject(session.get('playerId'), msg.angleVector);
        next(null, asterId);
    }
};
