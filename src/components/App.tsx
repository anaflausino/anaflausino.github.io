import React from "react";
import { useNavigate } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const navigate = useNavigate();
    const goAbout = () => {
        navigate("/sobre");
    };
    const goStories = () => {
        navigate("/stories");
    };
    const goPosts = () => {
        navigate("/posts");
    };
    const goContact = () => {
        navigate("/contato");
    };
    return (
        <div className="home-container">
            <div className="top-row">
                <div className="top-left-column"></div>
                <div className="top-right-column">
                    <h1>Ana Flausino</h1>
                    <h3>Designer</h3>
                </div>
            </div>
            <div className="bot-row">
                <div className="bot-left-column"></div>
                <div className="bot-right-column">
                    <button className="main-btn" onClick={goAbout}>
                        SOBRE
                    </button>
                    <button className="main-btn" onClick={goStories}>
                        STORIES
                    </button>
                    <button className="main-btn" onClick={goPosts}>
                        POSTS
                    </button>
                    <button className="main-btn" onClick={goContact}>
                        CONTATO
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
