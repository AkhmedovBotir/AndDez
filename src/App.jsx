import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Advantages from './components/Advantages/Advantages'
import Services from './components/Services/Services'
import ServiceTypes from './components/ServiceTypes/ServiceTypes'
import Guarante from './components/Guarantee/Guarante'
import FAQ from './components/FAQ/FAQ'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import AOS from 'aos';
import './App.css'
import { createTheme, ThemeProvider } from '@mui/material'

function App() {

  useEffect(() => {
    AOS.init();
  }, [])  

  const [snack, setSnack] = useState(false);

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 992,
        lg: 1200,
        xl: 1536,
      },
    },
    palette:{
      primary:{
        main:"#2257bf"
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
    <Navbar/>
    <About />
    <Advantages/>
    <Services/>
    <ServiceTypes/>
    <Guarante/>
    <FAQ/>
    <Contact />
    <Footer/>
    </ThemeProvider>
  )
}

export default App
