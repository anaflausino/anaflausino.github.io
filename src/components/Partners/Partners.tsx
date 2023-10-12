import React from "react";
import { useNavigate } from "react-router-dom";

import "./Partners.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { AiFillHome } from "react-icons/ai";

function Partners() {
    const navigate = useNavigate();
    const goHome = () => {
        navigate("/");
    };
    return (
        <>
            <Container>
                <Row>
                    <Col>Partner</Col>
                    <Col>Partner</Col>
                    <Col>Partner</Col>
                </Row>
            </Container>
            <button className="absolute-btn" onClick={goHome}>
                Início <AiFillHome />
            </button>
        </>
    );
}

export default Partners;
