/**
 * Created by wyw on 6/6/15.
 */

var pomelo = require('pomelo');
var GamePanel = require('./gamePanel.js');
var Constant = require('./global.js');
var Uid = require('../../util/uid.js');
var id = 0;
var panelList = {};
var playerList = {};
var channelService = null;

exports.init = function(gameHallId) {
    id = gameHallId;
    var firstPanelId = panelIdGenerator.getUid();
    panelList[firstPanelId] = new GamePanel(this);
    setInterval(update, 1000 / Constant.globals.frameRate);
};


var panelIdGenerator = new Uid();

var update = function() {
    for (var panel in panelList) {
        panelList[panel].update();
    }
};

exports.getChannelService = function() {
    if (channelService) {
        return channelService;
    }
};

var getChannelService = exports.getChannelService;

exports.addPlayerToPanel = function(playerId, panelId) {
    if (panelId === undefined) panelId = 0;
    panelList[panelId].addPlayer(playerId);
    playerList[playerId] = panelList[panelId];
};

exports.playerEject = function(playerId, angleVector) {
    return playerList[playerId].playerEject(playerId, angleVector);
};

exports.removePlayer = function(playerId) {
    if (playerList[playerId]) {
        playerList[playerId].removePlayer(playerId);
        delete playerList[playerId];
    }
};

exports.getPanelByPlayerId = function(playerId) {
    return playerList[playerId];
};