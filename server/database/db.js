import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const Connection = () => {
    const MONGODB_URI = process.env.URI;
    // ===================================
    mongoose.set('strictQuery', true);
    // ===================================
    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
    mongoose.connection.on('connected', () => {
        console.log("database is sussessfully connected");
    })

    mongoose.connection.on('disconnected', () => {
        console.log("Data base Disconnected");
    })

    mongoose.connection.on('error', () => {
        console.log('Error While Connecting with the DataBase',error.message);
    })
}

export default Connection;