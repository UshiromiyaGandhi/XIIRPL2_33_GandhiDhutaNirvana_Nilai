const mongoose = require('mongoose')

const NilaiScema = new mongoose.Schema({
    namaPenilaian: {
        type: String,
        required: false,
        unique: false
    },
    nilaiPredikat: {
        type: String,
        required: [true, 'Masukan Nilai : SK, K, KK, BK'],
        unique: false
    },
    diatasKKM: {
        type: Boolean,
        required: false,
        unique: false
    },
    mapelId:{
        type: String,
        required: [true, 'Masukan Kode : IND, ING, JAWA, MAT, PPKN, KK1 - KK5'],
        unique: false,
    },
    siswaId :{
        type: String,
        required:[true, 'Masukan NIS Siswa'],
        unique: false,
    }
})

module.exports = mongoose.model('Nilai', NilaiScema)