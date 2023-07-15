import React from "react";
import "./App.css";
import HomeBtn from "./HomeBtn/HomeBtn";

function App() {
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
                <HomeBtn title="Sobre" page="sobre" />
                <HomeBtn title="Stories" page="sobre" />
                <HomeBtn title="Posts" page="sobre" />
                <HomeBtn title="Contato" page="sobre" />
            </div>
        </div>
    );
}

export default App;
