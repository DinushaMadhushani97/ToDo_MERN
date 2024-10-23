import express from "express";
import dotenv from "dotenv";
import cors from "cors"; 
import connectToDB from "./database/db.js";
import todoRoutes from "./routes/todoRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors()); 
app.use(express.json());

// Connect to the database
connectToDB();

// Use the todo routes
app.use("/api", todoRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
    console.log("Successfully worked");
});
