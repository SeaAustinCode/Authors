const mongoose = require("mongoose");

module.exports = (DB) => {
mongoose.connect(`mongodb://localhost/${DB}`, {
    // useNewUrlParser: true,  =====> These have been deprecated 
    // useUnifiedTopology: true
}) //DB is schema name 

    .then(()=>console.log("Database connection established"))
    .catch(err=>console.log("There was an error connecting to the database", err));

}