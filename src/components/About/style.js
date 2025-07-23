import styled from 'styled-components';
import homeImage from '../../assets/png/homeBg.avif';

export const AboutContainer = styled.div`
  padding: 100px 0px; /* Default padding for larger screens */
  background-image: linear-gradient(to bottom, rgba(35, 39, 86, 0.5), rgba(35, 39, 86, 0.9)), url(${homeImage});
  background-repeat: no-repeat;
  background-position: right 0px;
  background-attachment: fixed;
  background-size: cover;
  max-height: 100vh;

  @media (max-width: 576px) {
    padding: 30px 0px; 
  }

  .about-info {
    width: 50%;
    color: #fff;
    @media (max-width: 600px) {
      width: 100%;
      text-align: center;
    }

    p {
      margin-top: 30px;
      margin-bottom: 40px;
      font-weight: 500;
      color: #fff; 
    }
  }
`;
export const ImageContainer = styled.div`
  width: 500px;
  height: 450px;
`;
