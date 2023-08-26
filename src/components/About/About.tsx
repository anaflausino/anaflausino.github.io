import React from "react";

import "./About.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About() {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Chega mais, e vem me conhecer melhor...</h1>
                </Col>
            </Row>
            <Row>
                <Col></Col>
                <Col>
                    <Row>
                        <Col>#########################</Col>
                    </Row>
                    <Row>
                        <Col>
                            <h5>
                                <p className="p1">Olá,</p> me chamo Ana Carolina
                                e tenho 25 anos. Sou designer, graduada pela
                                ESAMC em Uberlândia, e durante os estudos me
                                especializei em moda. Ao voltar para o mercado
                                de trabalho, descobri as Redes Sociais como uma
                                nova paixão. Busco sempre aperfeiçoar tudo que
                                aprendi, e quem sabe juntar meus dois mundos
                                (moda e design gráfico) em um só. Aqui mostrarei
                                um pouquinho do que já realizei e todos os
                                aprendizados que ainda estão por vir, e espero
                                que se divirta ao acompanhar essa nova etapa
                                comigo.
                            </h5>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
