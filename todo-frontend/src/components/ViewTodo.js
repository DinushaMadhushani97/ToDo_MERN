import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import '../css/Style.css'; 

const ViewTodo = () => {
    const { id } = useParams();
    const [todo, setTodo] = useState(null);
    const navigate = useNavigate(); 

    const fetchTodo = useCallback(async () => {
        try {
            const response = await fetch(`http://localhost:4000/api/${id}`);
            const data = await response.json();
            if (data.success) {
                setTodo(data.data);
            } else {
                console.error('Failed to fetch todo');
            }
        } catch (error) {
            console.error('Error fetching todo:', error);
        }
    }, [id]);

    useEffect(() => {
        fetchTodo();
    }, [fetchTodo]);

    return (
        <div className="view-todo-container">
            {todo ? (
                <div className="todo-item">
                    <h2 className="todo-title">{todo.text}</h2>
                    <div className="todo-details">
                        <p><strong>Priority:</strong> {todo.priority}</p>
                        <p><strong>Deadline:</strong> {todo.deadline}</p>
                        {/* <p><strong>Description:</strong> {todo.description || 'No description provided'}</p> */}
                    </div>
                    <button className="back-button" onClick={() => navigate('/todos')}>Back to Todo List</button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ViewTodo;
