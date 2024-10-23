import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import '../css/Style.css'; 
import { Link } from 'react-router-dom';

function UpdateTodo() {
    const { id } = useParams();
    const [text, setText] = useState("");
    const [priority, setPriority] = useState("");
    const [deadline, setDeadline] = useState("");
    const navigate = useNavigate();

    const fetchTodo = useCallback(async () => {
        const response = await fetch(`/api/${id}`);
        const data = await response.json();
        setText(data.data.text);
        setPriority(data.data.priority);
        setDeadline(data.data.deadline);
    }, [id]);

    useEffect(() => {
        fetchTodo();
    }, [fetchTodo]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const updatedTodo = { text, priority, deadline };

        await fetch(`http://localhost:4000/api/update/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedTodo),
        });
        navigate("/todos");
    };

    return (
        <div className="add-todo-container">
             <div className="image-nav-buttons">
                <Link to="/" className="nav-button">Home</Link>
                <Link to="/todos" className="nav-button">Todo List</Link>
            </div>
            <div className="form-section">
                <div className="todo-form-card">
                    <h1 className="form-title">Update Todo</h1>
                    <form className="todo-form" onSubmit={handleUpdate}>
                        <div className="form-group">
                            <label htmlFor="todo-text">Todo Text</label>
                            <input 
                                type="text" 
                                id="todo-text"
                                placeholder="Todo Text" 
                                value={text} 
                                onChange={(e) => setText(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="todo-priority">Priority</label>
                            <input 
                                type="text" 
                                id="todo-priority"
                                placeholder="Priority" 
                                value={priority} 
                                onChange={(e) => setPriority(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="todo-deadline">Deadline</label>
                            <input 
                                type="date" 
                                id="todo-deadline"
                                value={deadline} 
                                onChange={(e) => setDeadline(e.target.value)} 
                                required 
                            />
                        </div>
                        <button type="submit" className="submit-button">Update Todo</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdateTodo;
