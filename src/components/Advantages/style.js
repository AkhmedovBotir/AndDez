import styled from 'styled-components'
import bgImg from '../../assets/png/advantage.png'

export const AdvantagesContainer = styled.div `
margin-top: 50px;
.icon{
    color: #1C4CF7;
    width: 90px;
    height: auto;
}
.advantage_card{
    width: 28%;
}



.advantage_box{
width: 100%;
max-height: 450px;
margin: 50px auto;
border-radius: 20px;
display: flex;
justify-content: end;
background-image: linear-gradient(to bottom, rgba(35, 39, 86, 0.5), rgba(35, 39, 86, 0.9)), url(${bgImg});
  background-repeat: no-repeat;
  background-position: right 0px;
  background-size: cover;

.advantage_box_content{
color:'#FAFAFA' !important;
width: 50%;
padding: 50px;
box-sizing: border-box;
p{
    margin: 30px 0px 40px 0px;
}
}

}

@media (max-width:769px) {
    .advantage_card{
        width: 250px;
        text-align: center;
        height: auto;
    }
    .icon{
    width: 60px;
    height: auto;
    margin: 0px;
    margin-top: 25px;
    }
}
@media (max-width:1200px) {
    .advantage_box{
        .advantage_box_content{
            width: 100%;
            
        }
    }
}
@media (max-width:576px) {
    .advantage_box{
        .advantage_box_content{
            padding: 25px;
            width: 100%;
            h2{
                font-size: 20px;
                line-height: 22px;
            }
            p{
                margin: 15px 0px 25px 0px;
                    font-size: 12px;
            }
        }
    }
}
    

`