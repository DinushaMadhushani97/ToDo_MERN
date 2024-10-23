import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home.js";
import AddTodo from "./components/AddTodo.js";
import UpdateTodo from "./components/UpdateTodo.js";
import TodoList from "./components/TodoList.js";
import ViewTodo from "./components/ViewTodo.js";
// import NavBar from './components/NavBar';

function App() {
    return (
        <Router>
            {/* <NavBar /> */}
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add" element={<AddTodo />} />
                    <Route path="/todos" element={<TodoList />} />
                    <Route path="/view/:id" element={<ViewTodo />} />
                    <Route path="/update/:id" element={<UpdateTodo />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
