/**
 * Created by wyw on 6/6/15.
 */

var pomelo = require('pomelo');
var GamePanel = require('./gamePanel.js');
var Uid = require('../../util/uid.js');
var id = 0;
var panelList = {};
var playerList = {};
var channelService = null;

exports.init = function(gameHallId) {
    id = gameHallId;
    var firstPanelId = panelIdGenerator.getUid();
    panelList[firstPanelId] = new GamePanel(this);
    setInterval(update, 100);
};


var panelIdGenerator = new Uid();

var update = function() {
  //TODO add the executions in each frame.
};

exports.getChannelService = function() {
    if (channelService) {
        return channelService;
    }
};

var getChannelService = exports.getChannelService;

exports.addPlayerToPanel = function(playerId, panelId) {
    if (panelId === undefined) {
        var minNumber = 100000;
        var minPanel = null;
        for(var panel in panelList) {
            if (panel.getPlayersNumber() < minNumber) {
                minNumber = panel.getPlayersNumber();
                minPanel = panel;
            }
        }
        panel.addPlayer(playerId);
    } else {
        panelList[panelId].addPlayer(playerId);
    }
};