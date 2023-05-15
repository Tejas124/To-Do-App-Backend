//import the model
const Todo = require("../models/Todo");

//define route handler
exports.createTodo = async(req,res) => {
    try{
        //extract title and description from request body
        const {title, description} = req.body;

        //create a new Todo object and insert in DB
        const response = await Todo.create({title, description});

        //send a json response with success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                messsage:"Entry created successfully"
            }
        )
    }
    catch(err){
        console.log(err);
        console.error(err);
        res.status(500).json(
            {
                success:false,
                data:"internal server error",
                message:err.message
            }
        )
    }

}