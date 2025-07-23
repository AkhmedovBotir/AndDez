import styled from 'styled-components';
import GuaranteImage from '../../assets/png/guarante.png'; // Import the PNG image
import GuaranteIcon from '../../assets/svg/dicons.svg'; // Import the SVG icon

export const GuaranteContainer = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
background: radial-gradient(95.44% 490.36% at 92.87% 11.25%, #1c4c9f 0%, #33FFF3 100%);
border-radius: 16px;
padding: 30px;

    

    @media (max-width:992px){
        padding: 25px 0px;
        justify-content: center;
        h3{
            font-size: 20px;
        }
    }

`;

GuaranteContainer.Image = styled.img.attrs({
    src: GuaranteImage 
})`
width:400px;
height:auto;
@media (max-width:992px){
width:300px;
height:300px;
margin-bottom:15px;
}
@media (max-width:330px){
    width:200px;
    height:200px;
        justify-content: center;
        h3{
            font-size: 20px;
        }
    }
`;


GuaranteContainer.Icon = styled.img.attrs({
    src: GuaranteIcon,
    width: '60px',
    height:'60px'
    })`
    @media (max-width:992px){
width:40px;
height:40px;
}
   
`;
