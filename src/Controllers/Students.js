const model = require("../Models/Students");
const respone = require("../Helpers/Respon");

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
            return respone(res, 200, result);
        } catch (error) {
            return respone(res, 200, error);
        }
    }

    async getStudents(req, res) {
        try {
            const result = await model.getStudents();
            return respone(res, 200, result);
        } catch (error) {
            return respone(res, 200, error);
        }
    }
}

module.exports = new Students();
