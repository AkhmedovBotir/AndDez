import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Box } from "@mui/material";
import ButtonPrimary from "../Button/Button";
import { HeroText, MediumText, StandarText } from "../Text/Text";
import { ServiceTypesContainer, Card } from "./style";
import { getTranslatedServices } from "./services";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const ServiceTypes = () => {
  const { t } = useTranslation();
  const services = getTranslatedServices();

  const handleDragStart = (e) => e.preventDefault();

  const cards = services.map((service, idx) => (
    <div
      style={{ width: "100%", display: "flex", justifyContent:'center' }}
      key={idx}
      onDragStart={handleDragStart}
      role="presentation"
    >
      <Card>
        <Box>
          <MediumText>{service.heading}</MediumText>
          <StandarText style={{ marginTop: "15px" }}>
            {service.title}
          </StandarText>
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
            alignItems: "end",
          }}
        >
          <ButtonPrimary style={{ width: "50px" }} />
          <Card.Image src={service.imgSrc} alt={service.heading} />
        </Box>
      </Card>
    </div>
  ));

  const responsive = {
    0: { items: 1, itemsFit: "contain" },
    600: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <ServiceTypesContainer>
      <Container>
        <HeroText style={{ marginBottom: "40px" }}>
          {t("serviseTypesHeading")}
        </HeroText>
        <Box>
          <AliceCarousel
            mouseTracking
            items={cards}
            responsive={responsive}
            infinite={true} // Enable infinite loop
            autoPlay={true}
            disableButtonsControls={true}
            centerMode
          />
        </Box>
      </Container>
    </ServiceTypesContainer>
  );
};

export default ServiceTypes;
