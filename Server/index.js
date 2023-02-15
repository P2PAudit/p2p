const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors");
require("dotenv").config();
const faqmodel = require('./models/faq')
const PORT = 5000;

const app = express();

app.use(express.json());
app.use(cors());

// connecting to cluster in mogodb atlas inserting password and database name
mongoose.connect("mongodb+srv://p2paudit-xyz:dNs38324Hp1sv8nn@cluster0.mbyp3tj.mongodb.net/p2paudit?retryWrites=true&w=majority", {
  useNewUrlParser: true,
})


app.get('/getfaqs',async (req, res)=> {
    try {
        await faqmodel.find({}, (err, result) => {
            if (err) {
            res.send(err)
            } else {
            res.send(result);
            }
        }).clone();

    } catch (err) {
        console.log("error in faqmodel.find" + err);
    }
});


app.listen(PORT, (error) =>{
    if(!error) {
        console.log("Server is Successfully Running, and App is listening on port http://localhost:"+ PORT);
    }
    else { 
        console.log("Error occurred, server can't start", error);
    }
  }
);