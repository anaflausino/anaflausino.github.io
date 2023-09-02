import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { AiFillHome } from "react-icons/ai";

import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import About from "./About/About";

function App() {
    const navigate = useNavigate();
    const [content, setContent] = useState("Home");

    const goAbout = () => {
        setContent("About");
    };
    const goContact = () => {
        setContent("Contact");
    };
    const goHome = () => {
        setContent("Home");
    };

    const goStories = () => {
        navigate("/stories");
    };
    const goPosts = () => {
        navigate("/posts");
    };

    return (
        <Container className="h-100">
            <Row className="h-100">
                <Col md={6}></Col>
                <Col md={6}>
                    <Row className="h-10"></Row>
                    <Row className="h-60">
                        {content === "About" ? (
                            <About />
                        ) : content === "Contact" ? (
                            <Contact />
                        ) : (
                            <Home />
                        )}
                    </Row>
                    <Row className="h-30">
                        <Col md={3}>
                            <button className="main-btn" onClick={goAbout}>
                                Sobre
                            </button>
                        </Col>
                        <Col md={3}>
                            <button className="main-btn" onClick={goStories}>
                                Stories
                            </button>
                        </Col>
                        <Col md={3}>
                            <button className="main-btn" onClick={goPosts}>
                                Posts
                            </button>
                        </Col>
                        <Col md={3}>
                            <button className="main-btn" onClick={goContact}>
                                Contato
                            </button>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <button className="absolute-btn" onClick={goHome}>
                Início <AiFillHome />
            </button>
        </Container>
    );
}

export default App;
