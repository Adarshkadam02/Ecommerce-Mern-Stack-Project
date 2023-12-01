import express  from "express";
import mongoose from "mongoose";
import ecommerce from "./routes/prodroutes.js";

// const app = express();

// app.use(express.json());

  
// mongoose.connect(
//     "mongodb+srv://adarshkadamak47:project02@cluster0.hn7h9xh.mongodb.net/?retryWrites=true&w=majority",
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }
// );

// app.use('/ecommerce',ecommerce);

// app.listen(5000, () => {
//     console.log("Server of is running...");
// });



// const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

mongoose.connect(
        "mongodb+srv://adarshkadamak47:project02@cluster0.hn7h9xh.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );

    const db = mongoose.connection;

db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

db.once('open', () => {
    console.log('Connected to MongoDB');
})
    
    app.use('/ecommerce',ecommerce);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})