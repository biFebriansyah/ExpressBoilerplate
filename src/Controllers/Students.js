const model = require("../Models/Students");
const respone = require("../Helpers/Respon");

class Students {
    
    async setStudnets(req, res) {
        const data = {
            nama: req.body.name,
            jurusan: req.body.jurusan,
            kelas: req.body.kelas,
            handphone: req.body.handphone,
        };

        try {
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

    async getById(req, res) {
        try {
            const result = await model.getById(req.params.id);
            return respone(res, 200, result);
        } catch (error) {
            return respone(res, 200, error);
        }
    }

    async getByName(req, res) {
        try {
            const result = await model.getByName(req.params.name);
            return respone(res, 200, result);
        } catch (error) {
            return respone(res, 200, error);
        }
    }

    async deletById(req, res) {
        try {
            const result = await model.deletById(req.params.id);
            return respone(res, 200, result);
        } catch (error) {
            return respone(res, 200, error);
        }
    }

    async editStudent(req, res) {
        try {
            const result = await model.editStudent(req.params.id);
            return respone(res, 200, result);
        } catch (error) {
            return respone(res, 200, error);
        }
    }
}

module.exports = new Students();
