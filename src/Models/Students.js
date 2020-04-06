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

    getById(id) {
        return new Promise((reject, resolve) => {
            conn.query(
                `SELECT * FROM students WHERE id = ${Number(id)}`,
                (err, res) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                }
            );
        });
    }

    getByName(name) {
        return new Promise((reject, resolve) => {
            conn.query(
                `SELECT * FROM students WHERE nama = ${name}`,
                (err, res) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                }
            );
        });
    }

    deletById(id) {
        return new Promise((reject, resolve) => {
            conn.query(`DELETE FROM students WHERE id = ${id}`, (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    }

    editStudent(data) {
        return new Promise((reject, resolve) => {
            conn.query(
                "UPDATE students SET nama = $2, jurusan = $2, kelas = $3, handphone = $4 WHERE id = $5",
                [data.name, data.jurusan, data.kelas, data.handphone, data.id],
                (err, res) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                }
            );
        });
    }
}

module.exports = new Students();
