// CONTROLLER = CRUD 
// MAKING QUERIES TO THE DB 
// USING THE MODEL 

const {Author} = require("../model/author.model") //import the model

module.exports = {

    // ======== CREATE ===========
    create: (req, res) => {
        // we are passing in body data which is an object
        console.log(req.body) // if this is undefined check middleware 
        Author.create(req.body)
            .then(newAuthor => {
                console.log("DB successfully created a new Author");
                return res.json(newAuthor)
            })
            .catch(err => {
                console.log("DB ERROR CREATED Author")
                return res.status(400).json(err)
            })
    },


    // ======== READ ONE ===========
    findOne: (req, res) => {
        console.log(req.params);
        // Note.findOne({_id : req.params.id}) <---- this is how the platform shows it 
        Author.findById(req.params.id)
            .then(note => res.json(note))
            .catch(err => res.json(err))
    },


    // ======== READ ALL ===========
    findAll: (req, res) => {
        Author.find()
            .then((authors) => {
                console.log(authors);
                // if we return the object it will be an array 
                return res.json(authors)
            })
            .catch(err => res.json(err))
    },


    // ======== UPDATE ===========
    update: (req, res) => {
        console.log("UPDATE: ", req.params.id);
        Author.findByIdAndUpdate(req.params.id, req.body, {
            new: true, runValidators: true
        })
            .then(updatedAuthor => res.json(updatedAuthor))
            .catch(err => {
                console.log("DB ERROR CREATED Author")
                return res.status(400).json(err)
            })
    },


    // ======== DELETE ===========
    delete: (req, res) => {
        console.log(req.params.id);
        Author.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json(err))
    }

}