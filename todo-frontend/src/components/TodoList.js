import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Style.css';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/todos');
                const data = await response.json();
                if (data.success) {
                    setTodos(data.data);
                } else {
                    console.error('Failed to fetch todos');
                }
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };

        fetchTodos();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:4000/api/delete/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                // Remove the todo from the state
                setTodos(todos.filter(todo => todo._id !== id));
            } else {
                console.error('Failed to delete todo');
            }
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    return (
        <div className="todo-board">
            <h1>Your Todo Board</h1>
            {todos.length > 0 ? (
                <div className="todo-grid">
                    {todos.map(todo => (
                        <div className="todo-card" key={todo._id}>
                            <h3>{todo.text}</h3>
                            <p>Priority: {todo.priority}</p>
                            <p>Deadline: {todo.deadline}</p>
                            <div className="todo-card-actions">
                                <button 
                                    className="view-button" 
                                    onClick={() => navigate(`/view/${todo._id}`)}
                                >
                                    View
                                </button>
                                <button 
                                    className="update-button" 
                                    onClick={() => navigate(`/update/${todo._id}`)}
                                >
                                    Update
                                </button>
                                <button 
                                    className="delete-button" 
                                    onClick={() => handleDelete(todo._id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No todos found. Please add some!</p>
            )}
            <div className="todo-actions">
                <Link to="/add" className="action-button">Add New Todo</Link>
                <Link to="/" className="action-button">Home</Link> {/* Home Link */}
            </div>
        </div>
    );
};

export default TodoList;
