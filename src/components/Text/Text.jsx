import styled from "styled-components";

export const HeroText = styled.h2`
  font-weight: 700;
  font-size: 40px;
  line-height: 44px;
  letter-spacing: 3px;
  color: ${props => props.dark === "white" ? "#fafafa" : "#3C3C43"};
  @media (max-width: 600px) {
      font-size: 28px;
      line-height: 36px;
      letter-spacing: 2px;
      text-align: center;
  }
`;

export const MediumText = styled.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  color: ${props => props.dark === "white" ? "#fafafa" : "#3C3C43"};
  letter-spacing: 2px;
  font-weight: 700;
  @media (max-width: 600px) {
      font-size: 18px;
      line-height: 22px;
      letter-spacing: 2px;
  }
`;

export const StandarText = styled.p`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1px;
  color: ${props => props.dark === "white" ? "#fafafa" : "rgba(60, 60, 67, .78)"};
  @media (max-width: 600px) {
      font-size: 14px;
      line-height: 22px;
      letter-spacing: 2px;
      text-align: center;
  }
`;
