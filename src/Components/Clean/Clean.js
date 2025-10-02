import React from 'react'
import { Container, Button } from 'react-bootstrap'
import './Clean.sass'

export default function Clean() {
    return (
        <Container>
            <div className='clean my-5' data-aos="fade-down">
                <div className='clean-content px-5'>
                    <h1 className='clean-h1'>Клапа ва зарарли ҳашорот енди йўқ деб ҳисобланг !!!</h1>
                    <p >Бизнинг кўп йиллардан бери ўз фаолиятини олиб келаётган компаниямиз. Мижозларимиз биздан мамнун</p>
                    <br />
                    <a href="#contact" className='btn btn-danger rounded-pill button-animation px-3 py-2'>Богланиш</a>
                </div>
            </div>
        </Container>
    )
}
