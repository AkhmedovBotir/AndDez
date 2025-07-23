import React from "react";
import { FooterContainer } from "./style";
import { Container, Typography, Box } from "@mui/material";
import logo from '../../assets/svg/logo.svg';
import { useTranslation } from "react-i18next";
import PinDropIcon from '@mui/icons-material/PinDrop';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <Container sx={{display:'flex', flexDirection:{xs:'column', sm:"row"}}}>
      <Box sx={{ display: 'flex', alignItems:'center', color:'#2257bf'}}  data-aos="fade-right"
          data-aos-anchor="#example-anchor"
          data-aos-offset="2000"
          data-aos-duration="3000">
            <img src={logo} style={{width:'60px', marginTop:'10px'}} alt="" />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                ms: 2,
                mr: 3,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {t('navbar.appTitle')}
            </Typography>
      </Box>
      <Box sx={{m:{xs:'20px 0px', sm:'30px 0px 0px 100px'}}}  data-aos="fade-right"
          data-aos-anchor="#example-anchor"
          data-aos-offset="2000"
          data-aos-duration="3000"> 

        <Typography
        component="a"
        nowrap
        display={"block"}
        sx={{
          color:'#3C3C43',
          fontWeight:600,
          mb:'10px'
        }}
        href='/'
        >
          <PinDropIcon sx={{fontSize:'30px', mb:'-10px', mr:'10px'}} />
          {t('footer.location')}</Typography>
        <Typography
        component="a"
        nowrap
        display={"block"}
        sx={{
          color:'#3C3C43',
          fontWeight:600,
        }}
        href='/'
        >
          <LocalPhoneIcon sx={{fontSize:'30px', mb:'-10px', mr:'10px'}} />
          {t('footer.phone')}</Typography>
      </Box>  
      </Container>
    </FooterContainer>
  );
};

export default Footer;
