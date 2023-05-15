const mongoose = require("mongoose")

// To use the env variables we need to import it,
// -> first install dotenv package -> npm i dotenv
// The Below line import env variables
require("dotenv").config(); 

//This function is responsible for connection between node application and database
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, { //process.env is used to access the env variables
        useNewUrlParser: true,
        useUnifiedTopology: true
    }) 
    .then( () => console.log("DB connection successful"))
    .catch( (error) => {
        console.log("Error in DB connection");
        console.log(error.message);
        process.exit(1);
    })
}

module.exports = dbConnect;