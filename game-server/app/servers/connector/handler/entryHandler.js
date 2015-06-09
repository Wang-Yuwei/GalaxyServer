const CONSTANT = require('../../../../../shared/constants');

module.exports = function(app) {
	return new Handler(app);
};

var Handler = function(app) {
	this.app = app;
	this.serverId = app.get('serverId').split('-')[2];
};

var nextPlayerId = 1;

Handler.prototype.entry = function(msg, session, next) {
	var self = this;
	var playerId = parseInt(this.serverId + nextPlayerId, 10);
	nextPlayerId += 1;
	session.bind(playerId);
	session.set('playerId', playerId);
	session.set('gameHallId', 1);
	session.on('closed', onUserLeave.bind(null, self.app));
	session.pushAll();
	next(null, {code: CONSTANT.code.OK, playerId: playerId});
};

var onUserLeave = function(app, session, reason) {
	if (session && session.uid) {
		app.rpc.gameHall.playerRemote.playerLeave(session.uid, null);
	}
}