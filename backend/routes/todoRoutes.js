import express from "express";
import {
    getTodos,
    createTodo,
    getTodoById,
    updateTodo,
    deleteTodo,
} from "../controllers/todoController.js";

const router = express.Router();

// Route for view todo details
router.get("/todos", getTodos);

//Route for Crete new todo
router.post("/create-todo", createTodo);

//Route for view specific todo
router.get("/:todoId", getTodoById);

//Route for update todo
router.patch("/update/:todoId", updateTodo);

//Route for delete unwanted todo
router.delete("/delete/:todoId", deleteTodo);

export default router;
