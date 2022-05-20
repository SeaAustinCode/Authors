
const Author = require("../controllers/author.controller")

module.exports = (app) => {
    app.post("/api/authors", Author.create) // CREATE 
    app.get("/api/authors", Author.findAll) // READ ALL
    app.get("/api/authors/:id", Author.findOne) // READ ONE 
    app.put("/api/authors/:id", Author.update) // UPDATE 
    app.delete("/api/authors/:id", Author.delete) // DELETE
}