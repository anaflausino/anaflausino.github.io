import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { AiFillHome } from "react-icons/ai";

import Home from "./Home/Home";
import About from "./About/About";

function App() {
    const navigate = useNavigate();
    const [content, setContent] = useState("Home");

    const goAbout = () => {
        setContent("About");
    };
    const goHome = () => {
        setContent("Home");
    };
    const goPosts = () => {
        navigate("/posts");
    };
    const goPartners = () => {
        navigate("/parceiros");
    };

    return (
        <Container className="h-100">
            <Row className="h-100">
                <Col md={6}></Col>
                <Col md={6}>
                    <Row className="h-10"></Row>
                    <Row className="h-60">
                        {content === "About" ? <About /> : <Home />}
                    </Row>
                    <Row className="h-30">
                        <Col md={3}>
                            <button className="main-btn" onClick={goHome}>
                                Início <AiFillHome />
                            </button>
                        </Col>
                        <Col md={3}>
                            <button className="main-btn" onClick={goAbout}>
                                Sobre
                            </button>
                        </Col>
                        <Col md={3}>
                            <button className="main-btn" onClick={goPosts}>
                                Posts
                            </button>
                        </Col>
                        <Col md={3}>
                            <button className="main-btn" onClick={goPartners}>
                                Parceiros
                            </button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
