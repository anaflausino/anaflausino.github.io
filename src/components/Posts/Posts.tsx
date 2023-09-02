import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Post from "../Post/Post";

function Posts() {
    return (
        <Container>
            <Row>
                <Col>
                    <Post />
                </Col>
                <Col>
                    <Post />
                </Col>
                <Col>
                    <Post />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Post />
                </Col>
                <Col>
                    <Post />
                </Col>
                <Col>
                    <Post />
                </Col>
            </Row>
        </Container>
    );
}

export default Posts;
