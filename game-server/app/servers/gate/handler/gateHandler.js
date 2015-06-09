/**
 * Created by wyw on 6/5/15.
 */

var dispatcher = require('../../../util/dispatcher');
const CONSTANT = require('../../../../../shared/constants');

module.exports = function(app) {
    return new Handler(app);
};

var Handler = function(app) {
    this.app = app;
};

var nextUid = 0;

Handler.prototype.queryEntry = function(msg, session, next) {
    var connectors = this.app.getServersByType('connector');
    if (!connectors || connectors.length === 0) {
        next(null, {code: CONSTANT.code.GATE.NO_SERVER_AVAILABLE});
        return;
    }

    var uid = nextUid;
    nextUid++;
    var result = dispatcher.dispatch(uid, connectors);
    next(null, {code: CONSTANT.code.OK, host: result.host, port: result.clientPort, uid: uid});
};
