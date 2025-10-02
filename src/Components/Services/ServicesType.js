import React from 'react'
import "./Services.sass"
import img1 from "../../Img/type1.jpg"
import img2 from "../../Img/type2.jpg"
import img3 from "../../Img/type3.jpg"
import img4 from "../../Img/type4.jpg"
import img5 from "../../Img/type5.jpg"
import { Button, Image } from 'react-bootstrap'
export default function ServicesType() {
    let typeCard = [
        {
            id: 1,
            title: "КЛАПАЛАР",
            sub: "Улар тўшакда, юмшоқ мебелда, тўқимачиликда, ешик ромлари ва дераза ромлари остида яшайдилар. Улар одамлар ва иссиқ қонли ҳайвонларнинг қони билан озиқланади. Аллергия ва оғир психологик ноқулайликни қўзғатинг...",
            img: img1
        },
        {
            id: 2,
            title: "ТАРАКАНЛАР",
            sub: "Улар патогенларни олиб юрадилар. Улар ёриқларда, таглик тагида, мебел орқасида, ҳаммом остида, шкафлар остида ва ҳоказоларда яшайдилар. Улар озиқ-овқат, маиший чиқиндилар, чарм буюмлар ва қоғоз билан озиқланадилар.",
            img: img2
        },
        {
            id: 3,
            title: "ЧАЁН",
            sub: "Ҳашаротлар ва арахнидлар билан озиқланадиган иссиқликни яхши кўрадиган жонзотлар. Улар омборларда ва уйларда яшашлари мумкин, лекин кўпинча улар ёғоч биноларда топилади ...",
            img: img3
        },
        {
            id: 4,
            title: "КЕМИРУВЧИЛАР",
            sub: "Енг кенг тарқалган каламушлар ва сичқонлар. Улар патогенларни олиб юради, барча сиртларда ишлайди, девор ва шифтларда ўтиш жойларини яратади, структуранинг ишончлилигини пасайтиради. Улар озиқ-овқат ва маиший чиқиндилар билан озиқланади...",
            img: img4
        },
        {
            id: 5,
            title: "БУРГАЛАР",
            sub: "Улар уй ҳайвонлари танасига кириб, қўшнилардан кўчиб кетишади. Улар юмшоқ мебеллар, кўрпа-тўшаклар, гиламлар, юмшоқ ўйинчоқлар, таглик тагида ва дераза ва ешик ромларида яшайдилар. Улар одамлар ва ҳайвонларнинг қони билан озиқланади. Улар касалликларга олиб келади ...",
            img: img5
        }
    ]
    return (
        <>
            <div className='aboutTitle py-3'>Хизмат тури</div>
            <div className='type-content pb-5'>
                {
                    typeCard.map(res => {
                        return (
                            <div className='type-card m-3 p-4' data-aos="fade-down">
                                <div className='type-top'>
                                    <h3>{res.title}</h3>
                                    <h6>{res.sub}</h6>
                                </div>
                                <div className='type-bottom'>
                                    <a href='#contact' className='btn btn-danger button-animation rounded-pill mx-2 px-3 py-2'>Богланиш</a>
                                    <Image src={res.img} className='rounded-pill' />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
