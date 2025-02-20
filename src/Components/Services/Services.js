import React from 'react'
import { Container, Image } from 'react-bootstrap'
import "./Services.sass"
import img1 from "../../Img/dez1.png"
import img2 from "../../Img/dez2.png"
import img3 from "../../Img/dez3.png"
import ServicesType from './ServicesType.js'
export default function Services() {
    let servicesCard = [
        {
            id: 1,
            img: img1,
            title: "Дезинфексия - зарарли микро организмларни йўқ қилиш",
            sub: "Ҳар қандай дезинфексиянинг асосий вазифаси инфексиялар ва касалликларга олиб келиши мумкин бўлган хавфли микроорганизмларни йўқ қилишдир. Дезинфексия чоралари бўш жойни моғор, вирус, чириётган ва бактериялардан тозалайди. Жараён атроф-муҳитни патоген организмлардан тозалайди.Агар ўзингизни ёмон ҳис қилсангиз, чарчоқ ёки сабабсиз заифлашсангиз керак."
        },
        {
            id: 2,
            img: img2,
            title: "Дезинсексия - ҳашаротларни йўқ қилиш",
            sub: "Кўп одамлар биринчи навбатда 'дезинфестатсия' сўзини исталмаган қўшниларидан - чойшаблар, ҳамамбöcеклер, чумолилар ва бошқа ҳашаротлардан халос бўлиш ёлини қидирганда дуч келишади. Уларнинг ўзлари йўқимсиз ва улар ҳам маълум инфектсия ташувчилари. Дезинсексия - бу ҳашаротларни: чивинлар, чивинлар, чойшаблар, тараканлар, куя, шомил, қобиқ қўнғизлари, ёғоч битлари ва бошқа судралиб юрувчи ва учувчи жонзотларни йўқ қилиш. .",
        },
        {
            id: 3,
            img: img3,
            title: "Дератизатсия - кемирувчиларни йўқ қилиш.",
            sub: "Тошкентда дератизатсия кемирувчиларни йўқ қилишга қаратилган комплекс чора-тадбирларнинг бутун мажмуасидир. Маълумки, кемирувчилар жуда қаттиқ жонзотлар бўлиб, улар турли хил хавфли таъсирларга дош берадилар. Шунинг учун уларни йўқ қилиш учун бир қатор усуллардан фойдаланиш керак. Дератизатсия Тошкент шаҳрида кемирувчилар пайдо боʻлган жойларда: коʻп қаватли уйлар, омборлар, доʻконлар, умумий овқатланиш корхоналари амалга оширилади.",
        }
    ]
    return (
        <>
        <br id='services' />
        <br />
            <Container data-aos="fade-up">
                <div className='aboutTitle py-3' data-aos="fade-up">Хизматлар</div>
                <h4 className='services-title'>Биз сизга самарали ва кафолатли хизмат тақдим етамиз.</h4>
                <div className='services-content py-5'>
                    {
                        servicesCard.map(res => {
                            return (
                                <div className='services-card my-3 p-5' data-aos="fade-up">
                                    <Image src={res.img} className='mx-5' data-aos="fade-down" />
                                    <div className='services-main' data-aos="fade-up">
                                        <h3>{res.title}</h3>
                                        <h5>{res.sub}</h5>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <ServicesType />
            </Container>
        </>
    )
}
