import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Contact() {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Volte quando quiser!</h1>
                </Col>
            </Row>
            <Row>
                <Col></Col>
                <Col>
                    <Row>
                        <Col>
                            <h4>Ana Flausino</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h5>anaflausino9@gmail.com</h5>
                            <h5>(64) 99275-0435</h5>
                        </Col>
                    </Row>
                    <Row>Instagram / Twitter / Facebook / LinkedIn</Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;
