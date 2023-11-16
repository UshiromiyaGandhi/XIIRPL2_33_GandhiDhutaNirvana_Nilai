const Nilai = require('../model/Nilai')

module.exports =
    {
        getAll: async (req, res) => {
            try {
                const nilai = await Nilai.find()
                if (nilai.length > 0) {
                    res.status(200).json({
                        status: true,
                        data: nilai,
                        method: req.method,
                        url: req.url
                    })
                } else {
                    res.json({
                        status: false,
                        message: "Data masih kosong"
                    })
                }
            } catch (error) {
                res.status(400).json({success: false})
            }
        },
        getOne: async (req, res) => {
            try {
                const nilai = await Nilai.findById(req.params.id)
                res.status(200).json({
                    status: true,
                    data: nilai,
                    method: req.method,
                    url: req.url,
                    message: "Data berhasil didapat"
                })
            } catch (e) {
                res.status(400).json({success: false, message: e.toString()})
            }
        },
        create: async (req, res) => {
            try {
                const isExist = await Nilai.exists(
                    {
                        namaPenilaian: req.body.namaPenilaian,
                        siswaId: req.body.siswaId
                    })
                if(isExist != null) throw "Siswa sudah memiliki nilai"

                const nilai = await Nilai.create(req.body)
                res.status(200).json({
                    status: true,
                    data: nilai,
                    method: req.method,
                    url: req.url,
                    message: "Data berhasil ditambahkan"
                })
            } catch (e) {
                res.status(400).json({success: false, message: e.toString()})
            }
        },
        update: async (req, res) => {
            try {
                const isExist = await Nilai.exists(
                    {
                        namaPenilaian: req.body.namaPenilaian,
                        siswaId: req.body.siswaId
                    })
                if(isExist != null) throw "Siswa sudah memiliki nilai"
                const user = await Nilai.findByIdAndUpdate(req.params.id, req.body, {
                    new: true,
                    runValidators: true
                })
                res.status(200).json({
                    status: true,
                    data: user,
                    method: req.method,
                    url: req.url,
                    message: "Data berhasil diubah"
                })
            } catch (e) {
                res.status(400).json({success: false, message: e.toString()})
            }
        },
        delete: async (req, res) => {
            try {
                await Nilai.findByIdAndDelete(req.params.id,)
                res.json({
                    status: true,
                    method: req.method,
                    url: req.url,
                    message: "Data berhasil dihapus"
                })
            } catch (e) {
                res.status(400).json({success: false, message: e.toString()})
            }
        },
    }
