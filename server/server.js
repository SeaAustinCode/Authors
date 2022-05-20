const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
const DB = "authors_schema";

// ===== middleware ======
app.use(cors(), express.json(), express.urlencoded({extended:true}))
// =======================
// console.log("hello")

// ====== DATABASE CONNECTION 
require("./config/mongoose.config")(DB)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// connect the routes 
require("./routes/routes")(app)


// start the server 
app.listen(PORT, () => console.log(`SERVER IS UP ON PORT: ${PORT}`))

