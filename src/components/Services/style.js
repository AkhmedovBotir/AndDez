import {
    Paper
} from '@mui/material'
import styled from 'styled-components'


export const ServicesContainer = styled.div `
overflow-y: auto;
scroll-behavior: smooth;
`
export const Card = styled(Paper).attrs({
    elevation: 3
})`
border-radius: 30px !important;
display: flex;
align-items: center;
justify-content:space-between;
padding: 20px 40px;
box-sizing: border-box;
margin-top: 30px;
div{
    width: 70%;
    p{
        margin-top:20px;
    }
}
@media (max-width:992px) {
    flex-direction:column;
    div{
        width:100%;
        h3{
            font-size:18px;
            margin-top:15px;
        }
        p{
            margin-top:10px;
            font-size:12px;
            line-height:18px;
            text-align:justify;
        }
    }
}
`

Card.Image = styled.img.attrs({
    width: '200px'
})
`
@media (max-width:992px) {
    width:100px;
}
`