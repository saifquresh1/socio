require('dotenv').config();
const app = require('./src/app.js')
const connectDB = require('./src/db/db.js')

connectDB()
    .then(() => {
        app.listen(3000, ()=>{
            console.log('server is running');
        });
    })
    .catch((error) => {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1);
    });