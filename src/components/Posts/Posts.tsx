import React from "react";
import { useNavigate } from "react-router-dom";

import "./Posts.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { AiFillHome } from "react-icons/ai";

import Post from "../Post/Post";

// import * as list from "../../assets/posts/list.json";
// import * as img1 from "../../assets/posts/post-1.png";

function Posts() {
    const navigate = useNavigate();
    const goHome = () => {
        navigate("/");
    };

    // const { data } = list;
    // FIXME: image not being imported as desired
    return (
        <>
            <img src="../../assets/posts/post-1.png" alt="post image" />
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
            <button className="absolute-btn" onClick={goHome}>
                Início <AiFillHome />
            </button>
        </>
    );
}

export default Posts;
