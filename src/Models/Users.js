const sequelize = require("../Configs/conn").sequelize;
const Sequelize = require("sequelize");

class Users {
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
        return new Promise((reslove, reject) => {
            if (process.env.MODE == "Dev") {
                this.Users.sync()
                    .then(() => {
                        reslove("Commit succsess");
                    })
                    .catch((err) => {
                        reject("Something hapen while commiting \n", err);
                    });
            }
            if (process.env.MODE == "Prod") {
                reject("Youre on mode Production");
            }
        });
    }

    add(data) {
        return new Promise((reslove, reject) => {
            this.Users.create({
                email: data.email,
                fullName: data.fullName,
                Address: data.Address,
                Username: data.Username,
                Password: data.Password,
            })
                .then((res) => {
                    reslove(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    findAll() {
        return new Promise((reslove, reject) => {
            this.Users.findAll()
                .then((res) => {
                    reslove(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }
}

module.exports = new Users();
