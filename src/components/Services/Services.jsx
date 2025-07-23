import React from "react";
import { useTranslation } from 'react-i18next';
import { Container, Box } from "@mui/material";
import { HeroText, MediumText, StandarText } from "../Text/Text";
import { Card, ServicesContainer } from "./style";
import bacteriaImg from '../../assets/png/dizinfeksiya1.png'
import insectImg from '../../assets/png/dizinfeksiya2.png'
import rodentImg from '../../assets/png/dizinfeksiya3.png'

const Services = () => {
  const { t } = useTranslation();

  const data = [
    {
      imgSrc: bacteriaImg,
      heading: t("serviceItems.decontamination.heading"),
      title: t("serviceItems.decontamination.title")
    },
    {
      imgSrc: insectImg,
      heading: t("serviceItems.insectControl.heading"),
      title: t("serviceItems.insectControl.title")
    },
    {
      imgSrc: rodentImg,
      heading: t("serviceItems.rodentControl.heading"),
      title: t("serviceItems.rodentControl.title")
    }
  ];

  return (
    <ServicesContainer id="services" style={{ overflowY: 'auto', scrollBehavior: 'smooth' }}>
      <Container>
        <Box sx={{ width: {xs:'100%' ,sm:"300px" }}}>
          <HeroText>{t("services.title")}</HeroText>
          <StandarText  style={{ marginTop: "20px" }}>
            {t("services.description")}
          </StandarText>
        </Box>
        <Box sx={{paddingBottom:'20px'}}>
          {data.map((item, index) => (
            <Card key={index} data-aos="zoom-in-right" data-aos-duration="2000">
              <Card.Image src={item.imgSrc} />
              <div>
                <MediumText>{item.heading}</MediumText>
                <StandarText >
                  {item.title}
                </StandarText>
              </div>
            </Card>
          ))}
        </Box>
      </Container>
    </ServicesContainer>
  );
};

export default Services;
