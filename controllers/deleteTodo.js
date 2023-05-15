//import the model
const Todo = require("../models/Todo");

//define route handler
exports.deleteTodo = async(req,res) => {
    try{
        const {id} = req.params;
        
        await Todo.findByIdAndDelete(id);

        res.status(200).json(
            {
                success:true,
                
                messsage:"Todo deleted successfully"
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