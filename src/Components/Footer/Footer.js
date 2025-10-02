import React from 'react'
import "./Footer.sass"
import icon from "../../Img/Logo.png"
import { Container } from 'react-bootstrap'
export default function Footer() {
  return (
    <Container>
      <div className='footer mt-5'>
        <div className='footer-content'>
          <div className='footer-left' data-aos="fade-right">
            <img src={icon} />
            <p className='py-3'>Биз Андижонда 10 йилдан бери профессионал дезинфексия ишларини олиб борамиз, шунинг учун биринчи марта зараркунандалардан қандай қутулишни биламиз.</p>
          </div>
          <div className='footer-right' data-aos="fade-left">
            <a className='footer-adress' href='https://maps.app.goo.gl/VPP6coJno8gaKi8f7'>
              <i class="bi bi-geo-alt-fill"></i>
              <span>Andijon viloyati, Andijon shahar</span>
            </a>
            <a className='footer-tel' href='tel:+998932281884'>
              <i class="bi bi-telephone-fill"></i>
              <span>+998 99 999 99 99</span>
            </a>
          </div>
        </div>
        <div className='social py-3'>
          <a href='#'>
            <i class="bi bi-telegram"></i>
          </a>
          <a href='#'>
            <i class="bi bi-instagram"></i>
          </a>
          <a href='#'>
            <i class="bi bi-facebook"></i>
          </a>
        </div>
        <p>Copyright &copy; 2024 — Akhmedov</p>
      </div>
    </Container>
  )
}