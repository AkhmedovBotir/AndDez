import React from "react";
import { useTranslation } from 'react-i18next';
import {  Container, Typography } from "@mui/material";
import ButtonPrimary from "../Button/Button";
import { StandarText } from "../Text/Text";
import { AboutContainer } from "./style";

const About = () => {
  const { t } = useTranslation();

  return (
    <AboutContainer >
      <Container sx={{ display: "flex", justifyContent:"space-between"}}>
        <div className='about-info' data-aos="fade-right">
          <Typography component={"h1"} sx={{fontSize: {xs:"42px", fontWeight:'700', sm:"64px"}, lineHeight:{xs:"48px", sm:"72px"}, marginTop:"100px", letterSpacing:{xs:'2px', sm:'10px'},
        }}>{t('about.title')}</Typography>
          <StandarText white>{t('about.description')}</StandarText>
          <ButtonPrimary  />
        </div>
      </Container>
    </AboutContainer>
  );
};

export default About;
