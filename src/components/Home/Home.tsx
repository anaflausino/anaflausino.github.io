import React from "react";

import "./Home.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
    BsInstagram,
    BsTwitter,
    BsFacebook,
    BsLinkedin,
    BsWhatsapp,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function Home() {
    return (
        <Container>
            <Row className="h-30">
                <Col>
                    <h1>Ana Flausino</h1>
                </Col>
            </Row>
            <Row className="h-70">
                <Col>
                    <Row className="h-30">
                        <Col>
                            <h4 className="p2">Designer</h4>
                        </Col>
                    </Row>
                    <Row className="h-40">
                        <Col>
                            <Row>
                                <a
                                    className="link"
                                    href="mailto:anaflausino9@gmail.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <MdEmail /> anaflausino9@gmail.com
                                </a>
                            </Row>
                            <Row>
                                <a
                                    className="link"
                                    href="https://wa.me/5564992750435"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <BsWhatsapp /> (64) 99275-0435
                                </a>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="h-30">
                        <Col md={2}>
                            <a
                                className="link icon"
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <BsInstagram />
                            </a>
                        </Col>
                        <Col md={2}>
                            <a
                                className="link icon"
                                href="https://twitter.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <BsTwitter />
                            </a>
                        </Col>
                        <Col md={2}>
                            <a
                                className="link icon"
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <BsFacebook />
                            </a>
                        </Col>
                        <Col md={2}>
                            <a
                                className="link icon"
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <BsLinkedin />
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
