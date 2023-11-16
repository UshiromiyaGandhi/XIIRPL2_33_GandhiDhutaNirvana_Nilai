const mongoose = require('mongoose')

const mongoDB = async function main(){
    await mongoose.connect('mongodb://localhost:27017/datamapel')
    console.log('DB connected')
}

module.exports = mongoDB