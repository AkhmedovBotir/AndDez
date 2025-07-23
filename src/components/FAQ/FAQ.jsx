import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { Container, Box } from "@mui/material";
import { HeroText, MediumText, StandarText } from "../Text/Text";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FAQContainer } from "./style";

const FAQ = () => {
  const { t } = useTranslation();
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  // Array of FAQ items
  const faqItems = [
    {
      question: t('faq.question1'),
      answer: t('faq.answer1')
    },
    {
      question: t('faq.question2'),
      answer: t('faq.answer2')
    },
    {
      question: t('faq.question3'),
      answer: t('faq.answer3')
    }
  ];

  const handleChange = (panel) => (event, isExpanded) => {
    setExpandedAccordion(isExpanded ? panel : null);
  };

  return (
    <FAQContainer id="faq">
      <Container>
        <HeroText>{t('faq.title')}</HeroText>
        <Box sx={{ marginTop: "30px" }}>
          {/* Mapping through FAQ items and rendering accordion */}
          {faqItems.map((item, index) => (
            <Accordion
              key={index}
              expanded={expandedAccordion === `panel${index + 1}`}
              onChange={handleChange(`panel${index + 1}`)}
              sx={{ padding: "15px" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index + 1}-content`}
                id={`panel${index + 1}-header`}
              >
                <MediumText>{item.question}</MediumText>
              </AccordionSummary>
              <AccordionDetails>
                <StandarText>{item.answer}</StandarText>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </FAQContainer>
  );
};

export default FAQ;
