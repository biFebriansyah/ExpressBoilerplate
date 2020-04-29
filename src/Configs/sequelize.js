const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    process.env.PGDATABASE,
    process.env.PGUSER,
    process.env.PGPASSWORD,
    {
        host: "localhost",
        port: 5431,
        dialect: "postgres",
    }
);


module.exports = sequelize;
