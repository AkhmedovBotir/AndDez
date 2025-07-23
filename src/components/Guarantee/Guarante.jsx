import React from "react";
import { useTranslation } from 'react-i18next';
import { GuaranteContainer } from "./style";
import { Container, Box, Typography } from "@mui/material";
import { HeroText } from "../Text/Text";
import ButtonPrimary from "../Button/Button";

const Guarante = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <GuaranteContainer>
        <GuaranteContainer.Image data-aos="flip-right" data-aos-duration="300" />
        <Box sx={{ marginLeft:{xs:'0px', md:"100px", sm:"30px"}, width:{xs:"280px", sm:"40%"}}} data-aos="flip-left" data-aos-duration="300">
            <GuaranteContainer.Icon/>
            <Typography component={"h3"} sx={{fontSize:'28px',fontWeight:'700',  color:'#fff', margin:'30px auto'}}>
              {t('guarante.text')}
            </Typography>
            <ButtonPrimary>{t('guarante.buttonText')}</ButtonPrimary>
        </Box>
      </GuaranteContainer>
    </Container>
  );
};

export default Guarante;
