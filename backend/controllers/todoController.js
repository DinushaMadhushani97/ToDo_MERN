import { Todo } from "../models/todo.model.js";

// Get all todos
export const getTodos = async (req, res) => {
    try {
        const result = await Todo.find();
        res.send({
            success: true,
            message: "Todo List Retrieved Successfully..!",
            data: result,
        });
    } catch (error) {
        res.send({
            success: false,
            message: "Failed to Retrieve the Todo List..!",
        });
    }
};

// Create a new todo
export const createTodo = async (req, res) => {
    const todoDetails = req.body;
    try {
        const result = await Todo.create(todoDetails);
        res.send({
            success: true,
            message: "Todo List Created Successfully..!",
            data: result,
        });
    } catch (error) {
        console.log(error);
        res.send({
            success: false,
            message: "Failed to Create Todo List..!",
        });
    }
};

// Get a todo by ID
export const getTodoById = async (req, res) => {
    const todoId = req.params.todoId;
    try {
        const result = await Todo.findById(todoId);
        res.send({
            success: true,
            message: "Todo Retrieved Successfully..!",
            data: result,
        });
    } catch (error) {
        res.send({
            success: false,
            message: "Failed to Retrieve the Todo..!",
        });
    }
};

// Update a todo by ID
export const updateTodo = async (req, res) => {
    const todoId = req.params.todoId;
    const updatedTodo = req.body;
    try {
        const result = await Todo.findByIdAndUpdate(todoId, updatedTodo, { new: true });
        res.send({
            success: true,
            message: "Todo Updated Successfully..!",
            data: result,
        });
    } catch (error) {
        res.send({
            success: false,
            message: "Failed to Update Todo..!",
        });
    }
};

// Delete a todo by ID
export const deleteTodo = async (req, res) => {
    const todoId = req.params.todoId;
    try {
        await Todo.findByIdAndDelete(todoId);
        res.send({
            success: true,
            message: "Todo Deleted Successfully..!",
        });
    } catch (error) {
        res.send({
            success: false,
            message: "Failed to Delete Todo..!",
        });
    }
};
