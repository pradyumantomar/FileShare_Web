require('dotenv').config();
const mongoose = require('mongoose');

const url = process.env.MONGO_CONNECTION_URL;

const connectDB = async() =>{
    try{
        await mongoose.connect(url);
        console.log('Database connected 🥳🥳🥳🥳');
    }catch(error){
        console.log('Connection failed ☹️☹️☹️☹️');
        console.log('Error while connecting' + error.message);
    }
};

module.exports = connectDB;