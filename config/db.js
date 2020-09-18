const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async()=>{
    try{
        await mongoose.connect(db, {
            useFindAndModify: false,
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log('MongoDB Connected')
    }catch(err){
        console.log('Error Connecting MongoDB', err)
        process.exit(1)
    }
}

module.exports = connectDB;