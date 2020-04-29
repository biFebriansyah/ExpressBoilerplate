const { Pool } = require("pg");
const { Sequelize } = require("sequelize");

class dbConnect {
    constructor() {
        this.con = new Pool({
            user: process.env.PGUSER,
            host: process.env.PGHOST,
            database: process.env.PGDATABASE,
            password: process.env.PGPASSWORD,
            port: process.env.PGPORT,
        });

        this.sequelize = new Sequelize(
            process.env.PGDATABASE,
            process.env.PGUSER,
            process.env.PGPASSWORD,
            {
                host: "localhost",
                port: 5431,
                dialect: "postgres",
            }
        );
    }

    dbConnect() {
        this.con.connect((err) => {
            if (err) {
                console.log(err);
                return;
            } else {
                console.log("Database Connected");
            }
        });
    }

    sequelizeTest() {
        this.sequelize
            .authenticate()
            .then(() => {
                console.log("Connection has been established successfully.");
            })
            .catch((err) => {
                console.error("Unable to connect to the database:", err);
            });
    }
}

module.exports = new dbConnect();
