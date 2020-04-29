const Model = require("./UserModel").Users;

class Users {
    findAll() {
        Model.findAll()
    }
}

module.exports = new Users();
