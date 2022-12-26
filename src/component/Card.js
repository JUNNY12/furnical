import styled from 'styled-components'
import { devices } from '../config/mediaquery'


export const Card = styled.div`
background-color:${({theme}) => theme.colors.white};
object-fit:cover;
height:330px;
padding:${({theme}) => theme.padding.lg};
border-radius:8px;
cursor:pointer;
transition:0.3s linear;
position:relative;
box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
:hover .preview{
    display:flex;
    transition:1s linear;
} 

@media all and (max-width:520px){
    padding:0.8rem;
}

.img{
    width:100%;
    height:200px;
}

.cardBody{
    margin-top:${({theme}) => theme.margin.sm};
}

.name{
    font-size:1.2rem;
    color:black;
    margin-top:${({theme}) => theme.margin.sm};
}
.rate{
    margin-top:${({theme}) => theme.margin.sm};
    display:inline-flex;
    align-items:center;
    column-gap:0.5rem;
}

.price{
    margin-top:${({theme}) => theme.margin.sm};
    font-weight:500;
    color:${({theme}) => theme.colors.primary};
}

.rating{
    display:inline-flex;
}
.view,
.favorite{
    font-size:2rem;
    color:${({theme}) => theme.colors.white};
}
.addCart{
    margin-top:${({theme}) => theme.margin.sm};
    outline:none;
    border:none;
    width:100%;
    color:${({theme}) => theme.colors.white};
    padding:${({theme}) => theme.padding.sm};
    background:${({theme}) => theme.colors.primary};
    font-weight:bold;
    cursor:pointer;
}

.preview{
    position:absolute;
    left:50%;
    top:50%;
    gap:1rem;
    padding:${({theme}) => theme.padding.sm};
    transform:translate(-50% , -50%);
    display:none;
    transition:1s linear;
}
`