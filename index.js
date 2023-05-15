const express = require("express")
const app = express();

//load configurations from env
require("dotenv").config();

const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import the routes for TODO api
const todoRoutes = require("./routes/todos")

//mount the todo API routes
app.use("/api/v1", todoRoutes);

//start server
app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})

//connect to database
const dbConnect = require("./config/database")

dbConnect();

//default route
app.get('/', (req,res) => {
    res.send("This is Home Page")
})
