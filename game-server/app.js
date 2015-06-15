var pomelo = require('pomelo');
var gameHall = require('./app/servers/logic/gameHall.js')
var app = pomelo.createApp();
app.set('name', 'Galaxy');

app.configure('production|development', 'gate', function() {
    app.set('connectorConfig', {
        connector: pomelo.connectors.hybridconnector
    });
});

app.configure('production|development', 'connector', function() {
    app.set('connectorConfig', {
        connector: pomelo.connectors.hybridconnector,
        heartbeat: 30,
        useDict: true,
        useProtobuf: true
    });
});

app.configure('production|development', 'gameHall', function() {
    var gameHallId = app.get('curServer').gameHallId;
    if (!gameHallId && gameHallId < 0) {
        throw new Error('Load game hall config failed.');
    }
    gameHall.init(gameHallId);
});

app.start();

process.on('uncaughtException', function(err) {
    console.error('Caught exception: ' + err.stack);
});