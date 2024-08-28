import React from 'react'
import './About.sass'
import { Container } from 'react-bootstrap'
import Aos from 'aos'
Aos.init(2000)
export default function About() {
    let abouts = [
        {
            id: 1,
            icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="about_card_icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"></path></svg>',
            title: "Тезда Хизмат Кўрсатиш",
            sub: "АРИЗАЛАР КУНИГА 24 СОАТ ҚАБУЛ ҚИЛИНАДИ. АГАР МУАММО ШОШИЛИНЧ БЎЛСА, БИЗ ДАРҲОЛ КЕТИШИМИЗ МУМКИН. ШУ БИЛАН БИРГА, СИФАТ МУКАММАЛ БЎЛИБ ҚОЛАДИ."
        },
        {
            id: 2,
            icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" class="about_card_icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M176,96a48,48,0,1,1-48-48A48,48,0,0,1,176,96Z" opacity="0.2"></path><path d="M216,96A88,88,0,1,0,72,163.83V240a8,8,0,0,0,11.58,7.16L128,225l44.43,22.21A8.07,8.07,0,0,0,176,248a8,8,0,0,0,8-8V163.83A87.85,87.85,0,0,0,216,96ZM56,96a72,72,0,1,1,72,72A72.08,72.08,0,0,1,56,96ZM168,227.06l-36.43-18.21a8,8,0,0,0-7.16,0L88,227.06V174.37a87.89,87.89,0,0,0,80,0ZM128,152A56,56,0,1,0,72,96,56.06,56.06,0,0,0,128,152Zm0-96A40,40,0,1,1,88,96,40,40,0,0,1,128,56Z"></path></svg>',
            title: "Йетук Мутаҳасислаpимиз",
            sub: "БИЗНИНГ ХОДИМЛАРИМИЗ ҲАММА НАРСАГА ҒАМХЎРЛИК ҚИЛАДИ: ҲИСОБ-КИТОБЛАР, ХОНАНИ ТАЙЁРЛАШ, ҚАЙТА ИШЛАШ, ЯКУНИЙ ТОЗАЛАШ, ВЕНТИЛЯТСИЯ ВА НАЗОРАТ ТЕКШИРУВИ."
        },
        {
            id: 3,
            icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="about_card_icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12.22 19.85c-.18.18-.5.21-.71 0a.504.504 0 010-.71l3.39-3.39-1.41-1.41-3.39 3.39c-.19.2-.51.19-.71 0a.504.504 0 010-.71l3.39-3.39-1.41-1.41-3.39 3.39c-.18.18-.5.21-.71 0a.513.513 0 010-.71l3.39-3.39-1.42-1.41-3.39 3.39c-.18.18-.5.21-.71 0a.513.513 0 010-.71L9.52 8.4l1.87 1.86c.95.95 2.59.94 3.54 0 .98-.98.98-2.56 0-3.54l-1.86-1.86.28-.28c.78-.78 2.05-.78 2.83 0l4.24 4.24c.78.78.78 2.05 0 2.83l-8.2 8.2zm9.61-6.78a4.008 4.008 0 000-5.66l-4.24-4.24a4.008 4.008 0 00-5.66 0l-.28.28-.28-.28a4.008 4.008 0 00-5.66 0L2.17 6.71a3.992 3.992 0 00-.4 5.19l1.45-1.45a2 2 0 01.37-2.33l3.54-3.54c.78-.78 2.05-.78 2.83 0l3.56 3.56c.18.18.21.5 0 .71-.21.21-.53.18-.71 0L9.52 5.57l-5.8 5.79c-.98.97-.98 2.56 0 3.54.39.39.89.63 1.42.7a2.458 2.458 0 002.12 2.12 2.458 2.458 0 002.12 2.12c.07.54.31 1.03.7 1.42.47.47 1.1.73 1.77.73.67 0 1.3-.26 1.77-.73l8.21-8.19z"></path></svg>',
            title: 'Сизга Мақул Вақтда',
            sub: "СИЗ ЎЗИНГИЗ УЧУН МАҚУЛ ВА ҚУЛАЙ ВАҚТНИ ТАНЛАНГ ВА БИЗГА МУРОЖАТ ҚИЛИНГ. СИЗГА КАФОЛАТЛАНГАН ВА САМАРАЛИ НАТИЖАНИ ОЛИБ БОРАМИЗ",
        }
    ]
    return (
        <>
            <br id='about' />
            <br />
            <Container>
                <div data-aos="fade-down" className='aboutTitle py-3'>Ҳақида</div>
                <hr />
                <div className='about-main  py-3' data-aos="fade-down">
                    {
                        abouts.map(res => {
                            return (
                                <div className='about-content col-3'>
                                    <div className='about-icon py-3' dangerouslySetInnerHTML={{ __html: res.icon }}></div>
                                    <div className='about-title fw-bold fs-2 lh-1 py-4'>{res.title}</div>
                                    <div className='about-sub'>{res.sub}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </Container>
        </>
    )
}
