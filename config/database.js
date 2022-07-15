const mongoose = require('mongoose');

const URI = process.env.MONGO_DB_URI;

async function connectionDB() {
    try {
        await mongoose.connect(URI);
        console.log('🟢 SUCCESSFULL! Connected to MongoDB');
    } catch (error) {
        console.log('🔴 FAILED! Not connected to MongoDB');
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectionDB;
