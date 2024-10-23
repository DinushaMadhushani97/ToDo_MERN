import mongoose, { model, Schema } from "mongoose";

const todoSchema = new Schema ({

    text: {
        type : String,
        required: true
    },
    priority: {
        type : String,
        required: true
    },
    deadline: {
        type : String, 
        required: true
    },

});

// either reuses an existing Todo model if it exists, or creates and exports a new one using the provided schema.
export const Todo = mongoose.models.Todo || new model("Todo", todoSchema);
