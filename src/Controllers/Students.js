const model = require("../Models/Students");
const response = require("../Helpers/Response");

class Students {
    async setStudnets(req, res) {
        try {
            const data = {
                nama: req.body.name,
                jurusan: req.body.jurusan,
                kelas: req.body.kelas,
                handphone: req.body.handphone,
            };

            const result = await model.setStudnets(data);
            return response(res, 200, result);
        } catch (error) {
            return response(res, 500, error);
        }
    }

    async getStudents(req, res) {
        try {
            const result = await model.getStudents();
            return response(res, 200, result);
        } catch (error) {
            console.log("masuk");
            console.log(error);
            return response(res, 500, error);
        }
    }
}

module.exports = new Students();
