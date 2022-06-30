const mongoose = require('mongoose')

const mongoConnectDB = async() => {
    try {
        await mongoose.connect(process.env.DATABASE_LOCAL, {
            useNewUrlParser:true,
        })
        console.log('Mongoose Connect Database Success!!')
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}

module.exports = mongoConnectDB