import styled from 'styled-components'

export const ServiceTypesContainer = styled.div`
  margin: 60px auto;
`

export const Card = styled.div`
  width: 350px;
  height: 450px;
  background-color: #F3F6F6;
  border-radius: 12px;
  margin: 0px 5px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width:576px) {
    width: 300px;
    height: 350px;
    p{
      font-size:14px;
      line-height: 18px;
      text-align: justify;
    }
  }
`;

Card.Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  @media (max-width:576px) {
    width: 70px;
    height: 70px;
  }
`;
