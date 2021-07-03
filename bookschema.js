const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    bookName: {
        type: String,
        unique: true,
    },
    price: {
        type: Number,
    },
    author: {
        type: String,
    },
    language: {
        type: String,
    },
    aboutAuthor: {
        type: String,
    }
});

const bookModel = mongoose.model("bookModel", bookSchema);
module.exports = bookModel; 