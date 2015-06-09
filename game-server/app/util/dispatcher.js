/**
 * Created by wyw on 6/5/15.
 */

module.exports.dispatch = function(uid, connectors) {
    var index = Number(uid) % connectors.length;
    return connectors[index];
}