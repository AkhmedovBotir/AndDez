import styled from 'styled-components'
import personImage from '../../assets/png/person1.jpg'
import { OutlinedInput } from '@mui/material';


export const ContactContainer = styled.div`
padding: 30px;
margin: 30px auto;
background-image: radial-gradient(58.39% 328.01% at 51.32% 69.21%, #2257bf 0%, rgba(2, 227, 214, 0.2) 100%);
border-radius: 10px;
position: relative;
@media (max-width:769px){
    display: flex;
    justify-content: center;
    align-items: center;
}
`

ContactContainer.Form = styled.div`
width: 350px;
max-height: 350px;
background-color: #fff;
border-radius: 10px;
padding: 25px 15px;
box-sizing: border-box;
.btn-send{
    width: 100%;
    height: 40px;
    color: #fff;
    border-radius: 10px;
    margin-top: 50px;
}
`
ContactContainer.Form.Input = styled(OutlinedInput)`
width: 100%;
height: 40px;
outline: none;
border: none;
background-color: #F2F2F2;
padding: 10px 15px;
box-sizing: border-box;
border-radius: 10px;
margin-top: 15px;
`


ContactContainer.Image = styled.img.attrs({
    src:personImage,
})`
width:250px;
position:absolute;
bottom:0px;
right:200px;
@media (max-width:992px){
    right:30px;
}
@media (max-width:769px){
    display:none;
}
`