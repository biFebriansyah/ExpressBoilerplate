const conn = require("../Configs/conn").con;

class Students {
    
    setStudnets(data) {
        return new Promise((reject, resolve) => {
            conn.query(
                "INSERT INTO students (nama, jurusan, kelas, handphone) VALUES ($1, $2, $3, $4)",
                [data.nama, data.jurusan, data.kelas, data.handphone],
                (err, res) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res.rowCount);
                    }
                }
            );
        });
    }

    getStudents() {
        return new Promise((reject, resolve) => {
            conn.query("SELECT * FROM students ORDER BY id ASC", (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res.rows);
                }
            });
        });
    }
}

module.exports = new Students();
