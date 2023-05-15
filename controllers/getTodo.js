const Todo = require("../models/Todo");

exports.getTodo = async (req,res) => {
    try{
        //fetch all Todo items from database
        const todos = await Todo.find({});

        //response
        res.status(200).json(
            {
                success:true,
                data:todos,
                message:"Entire data fetched successfully"
            }
        )
    }
    catch(err){
        console.error(err);
        res.status(500).json(
            {
                success:false,
                error:err.message,
                message:"Server Error"
            }
        )
    }
}

exports.getTodoById = async(req, res) => {
    try{
        const id = req.params.id;
        const todo = await Todo.findById({_id:id});

        //id not found
        if(!todo){
            return res.status(404).json(
                {
                    success:false,
                    message:"Id not found"
                }
            )
        }

        //Data for given Id is found
        if(todo){
            res.status(200).json(
                {
                    success:true,
                    data:todo,
                    message:`Todo ${id} data successfully fetched`
                }
            )
        }
    }
    catch(err){
        console.error(err);
        res.status(500).json(
            {
                success:false,
                error:err.message,
                message:"Server Error"
            }
        )
    }
}