import React from "react";
import { Link } from "react-router-dom";
import '../css/Style.css';
import yourImage from '../images/bgImg.jpg';

function Home() {
    return (
        <div className="home-background">
            <div className="home-content">
                <h1 className="home-title">Welcome to the Todo App</h1>
                <p className="home-description">
                    Stay organized and keep track of your tasks with our simple and intuitive Todo App. 
                    Manage your tasks efficiently and improve your productivity.
                </p>
                <img className="home-image" src={yourImage} alt="Todo App illustration" />

                <div className="features-section">
                    <h2 className="features-title">Features</h2>
                    <ul className="features-list">
                        <li>✅ Easy task creation</li>
                        <li>📋 View all tasks at once</li>
                        <li>📝 Edit and update tasks</li>
                        <li>🗑️ Delete completed tasks</li>
                    </ul>
                </div>

                <div className="button-container">
                    <Link to="/add"><button className="home-button">Add Todo</button></Link>
                    <Link to="/todos"><button className="home-button">View Todos</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
