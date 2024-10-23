import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../css/Style.css'; 

const AddTodo = () => {
    const [text, setText] = useState('');
    const [priority, setPriority] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const todoData = {
            text,
            priority,
            deadline,
        };

        try {
            const response = await fetch('http://localhost:4000/api/create-todo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(todoData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log(result);

            // Reset form fields
            setText('');
            setPriority('');
            setDeadline('');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="add-todo-container">
            <div className="image-nav-buttons">
                <Link to="/" className="nav-button">Home</Link>
                <Link to="/todos" className="nav-button">Todo List</Link>
            </div>
            <div className="form-section">
                <div className="todo-form-card">
                    <h1 className="form-title">Add New Todo</h1>
                    <form onSubmit={handleSubmit} className="todo-form">
                        <div className="form-group">
                            <label htmlFor="todo-text">Todo Text</label>
                            <input
                                type="text"
                                id="todo-text"
                                placeholder="What needs to be done?"
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
                                placeholder="High, Medium, Low"
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
                        <button type="submit" className="submit-button">Add Todo</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTodo;
