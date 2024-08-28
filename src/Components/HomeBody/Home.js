import React from 'react'
import './Home.sass'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import img from "../../Img/img.png"
import Aos from 'aos'
export default function Home() {
    Aos.init();
    return (
        <Container className='colhome'>
            <Row>
                <Col className='home-col' data-aos="fade-up">
                    <h1 className='home-h1' data-aos="fade-down"> 
                        Дизинфексия хизмати
                    </h1>
                    <p data-aos="fade-down">Биз Андижонда 10 йилдан бери профессионал дезинфексия ишларини олиб борамиз, шунинг учун биринчи марта зараркунандалардан қандай қутулишни биламиз.</p>
                    <a href="#contact" className='btn btn-danger rounded-pill button-animation px-3 py-2'>Богланиш</a>
                </Col>
                <Col className='home-col' data-aos="fade-up">
                    <Image data-aos="fade-up" src={img} className='home-img'></Image>
                </Col>
            </Row>
        </Container>
    )
}
