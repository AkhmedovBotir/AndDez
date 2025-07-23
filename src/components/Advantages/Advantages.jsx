import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Box } from "@mui/material";
import { HeroText, MediumText, StandarText } from "../Text/Text";
import { AdvantagesContainer } from "./style";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import StarsIcon from "@mui/icons-material/Stars";
import HandshakeIcon from "@mui/icons-material/Handshake";
import ButtonPrimary from "../Button/Button";

const Advantages = () => {
  const { t } = useTranslation();

  const advantages = [
    {
      icon: <ElectricBoltIcon className="icon" />,
      name: t("advantages.fastService"),
      text: t("advantages.fastServiceDescription"),
    },
    {
      icon: <StarsIcon className="icon" />,
      name: t("advantages.experiencedStaff"),
      text: t("advantages.experiencedStaffDescription"),
    },
    {
      icon: <HandshakeIcon className="icon" />,
      name: t("advantages.convenientTiming"),
      text: t("advantages.convenientTimingDescription"),
    },
  ];

  return (
    <AdvantagesContainer id="about">
      <Container>
        <HeroText>{t("advantages.title")}</HeroText>
        <Box
          component={"div"}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "30px",
          }}
        >
          {advantages.map((advantage, index) => (
            <div data-aos="flip-left" key={index} className="advantage_card">
              {advantage.icon}
              <MediumText>{advantage.name}</MediumText>
              <StandarText style={{ marginTop: "10px" }}>
                {advantage.text}
              </StandarText>
            </div>
          ))}
        </Box>

        {/* <-section2-> */}
        <Box
          component={"div"}
          className="advantage_box"
          sx={{ color: "#FAFAFA" }}
        >
          <Box className="advantage_box_content" data-aos="flip-down">
            <HeroText dark="white">{t("advantages.featuredTitle")}</HeroText>
            <StandarText
              dark="white"
              color="white"
            >
              {t("advantages.featuredDescription")}
            </StandarText>
            <ButtonPrimary />
          </Box>
        </Box>
      </Container>
    </AdvantagesContainer>
  );
};

export default Advantages;
