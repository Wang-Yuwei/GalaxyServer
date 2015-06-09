/**
 * Created by wyw on 6/7/15.
 */

module.exports = function() {
    return new Uid();
};

var Uid = function() {
    this.nextUid = 0;
};

Uid.prototype.getUid = function() {
    return this.nextUid++;
};