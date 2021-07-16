require('dotenv').config();

const mongoose = require('mongoose');
const {GridFsStorage} = require('multer-gridfs-storage');

function connectDB() {
    // Database connection 🥳
    mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });
    const connection = mongoose.connection;
    let gfs;
    connection.once('open', () => {
        console.log('Database connected 🥳🥳🥳🥳');
        gfs = new mongoose.mongo.GridFSBucket(connection.db, {
            bucketName: "files"
          });
    
    }).catch(err => {
        console.log('Connection failed ☹️☹️☹️☹️');
    });
}

// JH2j608EHdVGcLaG

module.exports = connectDB;