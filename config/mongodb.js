const mongoose = require('mongoose')

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.DATABASE_LOCAL, {
            useNewUrlParser:true,
        })
        console.log('Connect DB Success!!')
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}

module.exports = connectDB