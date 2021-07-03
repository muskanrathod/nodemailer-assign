const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bookModel = require("./bookschema");

mongoose.connect(
    "mongodb+srv://muskandatabase:muskanrathod99@cluster0.domlt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    }
).then( (data) => {
    console.log('Connected to database');
})
.catch( (err) => {
    console.error(`Error connecting to the database`);
});

app.use(express.json());

app.post("/add/book", (req, res) => {
    const data = req.body;
    const book = new bookModel({
        bookName: data.bookName,
        price: data.price,
        author: data.author,
        language: data.language,
        aboutAuthor: data.aboutAuthor,
    });
    
    book.save()
    .then((data) => {
        if(!(data.bookName || data.price || data.author || data.language || data.aboutauthor)){
            res.send("Need to provide details");
        }else{
            res.send(data);
        }
    })
    .catch((err) => {
        res.send("This book already exist");
    });
});

app.get("/get/books", (req, res) => {
    bookModel.find()
        .then((data) => {
            if(data === null || data === undefined || data === '' || data.length === 0){
                res.send("There is no document in this collection");
            }else{
                res.status(200).send(data);
            }
        })
        .catch((err) => {
            res.status(500).send("Something went wrong");;
        });
});

app.delete("/delete/bookById", (req, res) => {
    const _id = req.query._id;
    if(_id){
    bookModel.findByIdAndDelete({_id: _id})
    .then((data) => {
        if(!data){
            res.send("Book does not exist")
        }else{
            res.status(200).send("Deleted successfully");
        }
    })
    .catch((err) => {
        res.status(500).send("Something went wrong");
    });
    }else{
        res.send("Need to provide book id");
    }
});

app.put("/update/bookById", (req, res) => {
    const _id = req.query._id;
    const data = req.body;
    if(_id){
    bookModel.findByIdAndUpdate(
        {_id: _id}, 
        {$set: {bookName: data.bookName, price: data.price, author: data.author, language: data.language, aboutAuthor: data.aboutAuthor}},
        {new : true})
        .then((data) => {
            if(!(data.bookName && data.price && data.author && data.language && data.aboutAuthor)){
                res.send("Need to provide updatable details");
            }else{
                res.send("Updated successfully");
            }
        })
        .catch((err) => {
            res.send("Book exist with same name");
        });
    }else{
        res.send("Need to provide book id");
    }    
}); 

app.listen(8080, function(){
    console.log("server is upto port 8080")
});