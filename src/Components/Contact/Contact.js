import React, { useState } from 'react'
import './Contact.sass'
import { Container, Image } from 'react-bootstrap'
import doctor from "../../Img/doctor.png"
import axios from 'axios'
export default function Contact() {
    let [name, setName] = useState("")
    let [phone, setPhone] = useState("")
    const resp = ()=>{
        axios.post('https://api.telegram.org/bot7080276745:AAHUVrSlHGhmH5KggTDRlmz-yLRhjyW2wDw/sendMessage', {
            chat_id: -1002002929801,
            text: `Ismi: ${name}`
        })
    }
    return (
        <>
            <br id='contact' />
            <br />
            <div id='gradient' className='my-5'>
                <Container >
                    <Image src={doctor} />
                    <div className='form p-5' data-aos="fade-down">
                        <h1 data-aos="fade-up">Малумотингизни қолдиринг</h1>
                        <form className='pt-2' data-aos="fade-down" >
                            <input value={name} placeholder='Исмингизни ёзинг ...' />
                            <input value={phone} className='my-3' placeholder='+998 XX XXX XX XX' />
                            <button className='btn btn-danger'>Юбориш</button>
                        </form>
                    </div>
                </Container>
            </div>
        </>
    )
}
