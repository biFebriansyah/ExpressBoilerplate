const sequelize = require("../Configs/conn").sequelize;
const Sequelize = require("sequelize");

class UsersModel {
    constructor() {
        this.Users = sequelize.define("Users", {
            email: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            fullName: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            Address: {
                type: Sequelize.STRING,
            },
            Username: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            Password: {
                type: Sequelize.STRING,
                allowNull: false,
            },
        });
    }

    commit() {
        return ture;
    }

    findAll() {
        this.Users.findAll()
            .then((res) => {
                console.log(JSON.stringify(res, null, 4));
            })
            .catch((err) => {
                console.log("Error" + err);
            });
    }
}

module.exports = new UsersModel();
