const express = require('express');
const cors = require("cors");
const connectDB = require('./config/db')
const studentRoutes = require('./routes/studentRoutes')

// db connection 
const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/students", studentRoutes);

app.listen(5000, () =>{
    console.log('Server is running on port 5000');
});