/**
 * Created by panda on 15/7/20.
 */
var mongodb = require('./db');

function User(user){
    this.name = user.name;
    this.password = user.password;
};

User.prototype.save = function (callback) {
    var user = {
        name:this.name,
        password:this.password
    };

    mongodb.open();
}
module.exports = User;

