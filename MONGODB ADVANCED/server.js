const express = require ("express");
const mongoose = require("mongoose")

const app = express();


// connect mongoDB
const connect = ()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/movie")  //copied from mongo commmand prompt
    //url or address of database or we can use  mongodb://localhost:27017/movie
}

// create scheme - basically a structure
const userSchema = mongoose.Schema({

    id: Number,
    name : String,
    genres : String,
    budget : Number,
    year : Number, 
  
} )

// connect model
// collection is pular so we use user not users coz mongo detect it
const User = mongoose.model("mov", userSchema)


app.get("/mov", async (req, res)=>{
    const userData = await User.find({}).lean().exec();
                                        // without lean also we get output 
    console.log(userData)
    return res.send(userData)
})


  

app.listen(4528,async()=>{
    try{
        await connectDB();
    }catch{
        console.log("Something went wrong")
    }
    console.log("listening at 4528");
})