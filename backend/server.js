require('dotenv').config();
const app = require('./src/app.js')
const connectDB = require('./src/db/db.js')

connectDB()
const port = process.env.PORT || 4000 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})