import React from 'react'
import { Container, Image, Button } from 'react-bootstrap'
import "./Garant.sass"
import img from "../../Img/sec.png"
export default function Garant() {
  return (
    <Container>
      <div className='garant mb-5' data-aos="fade-down">
        <div className='garant-img' data-aos="fade-up"></div>
        <div className='garant-content py-5' data-aos="fade-down">
          <Image src={img} />
          <h1>Расмий кафолат - 1 йил. Биз жизмоний ва юридик шахсларга хизмат курсатамиз. Хизматлар лицензияланган!!!</h1>
          <a href="#contact" className='btn btn-danger rounded-pill button-animation px-3 py-2'>Богланиш</a>
        </div>
      </div>
      <hr />
    </Container>
  )
}
