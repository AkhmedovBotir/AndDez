import React from 'react'
import { Container } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import "./FAQ.sass"
export default function FAQ() {
    let faq = [
        {
            id: 1,
            title: "Зараркунандаларни йўқ қилиш қандай амалга оширилади?",
            sub: "Махсус асбоб-ускуналар ёрдамида инсектитсидлар аерозолли туманга айланади ва девор қоғози, деворлар ва тахта плиталари орасидаги енг кичик бўшлиқларга, кўзга кўринмас ҳашаротлар учун потентсиал 'яшириш жойлари' га киради."
        },
        {
            id: 2,
            title: "Сиз фойдаланадиган дорилар хавфлими?",
            sub: "Препаратлар одамлар, уй ҳайвонлари ва ўсимликлар учун хавфли емас. Аммо даволанишдан кейин хонани 40 дақиқа давомида вентилятсия қилиш керак."
        },
        {
            id: 3,
            title: "Менга уйимни даволанишга тайёрлашнинг қандайдир усули керакми?",
            sub: "Асосан, идиш-товоқ ва шахсий гигиена воситаларини изолятсия қилишингиз керак. Даволаш пайтида уй ҳайвонлари ҳам изолятсия қилиниши керак. Мебел ёки маиший техникани кўчиришга ҳожат йўқ."
        },
    ]

    return (
        <>
            <br id='faq' />
            <br />
            <Container className='faq d-flex justify-content-between py-5' >
                <div className='aboutTitle col-3' data-aos="fade-left">ФАҚ</div>
                <Accordion defaultActiveKey={faq[0].id} data-aos="fade-down" className='col-8'>
                    {
                        faq.map(res => {
                            return (
                                <Accordion.Item eventKey={res.id} data-aos="fade-up">
                                    <Accordion.Header>{res.title}</Accordion.Header>
                                    <Accordion.Body className='py-4 fw-bold'>
                                        {res.sub}
                                    </Accordion.Body>
                                </Accordion.Item>
                            )
                        })
                    }
                </Accordion>
            </Container>
        </>
    )
}
