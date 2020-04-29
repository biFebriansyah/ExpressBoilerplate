const { Pool } = require("pg");

class dbConnect {
  
  constructor() {
        this.con = new Pool({
            user: process.env.PGUSER,
            host: process.env.PGHOST,
            database: process.env.PGDATABASE,
            password: process.env.PGPASSWORD,
            port: process.env.PGPORT,
        });
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
}

module.exports = new dbConnect();
