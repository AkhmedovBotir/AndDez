import { Image } from 'react-bootstrap';
import Logo from '../../Img/Logo.png'
import "./Navbar.sass"


import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavScrollExample() {
    return (
        <Navbar expand="lg" className="">
            <Container className='w-100 d-flex justify-content-between'>
                <Navbar.Brand href="#">
                    <Image className='brandLogo' src={Logo}></Image>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
                    <Nav>
                        <Nav.Link href="#" className='px-2'>Асосий</Nav.Link>
                        <Nav.Link href="#about" className='px-2'>Биз ҳақимизда</Nav.Link>
                        <Nav.Link href="#services" className='px-2'>Хизматлар</Nav.Link>
                        <Nav.Link href="#faq" className='px-2'>ФАҚ</Nav.Link>
                        <a href='#contact' className='btn btn-danger button-animation rounded-pill mx-2 px-3 py-2'>Богланиш</a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;