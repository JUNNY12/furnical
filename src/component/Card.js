import styled from 'styled-components'


export const Card = styled.div`
background-color:${({theme}) => theme.colors.white};
object-fit:cover;
height:320px;
padding:${({theme}) => theme.padding.lg};
border-radius:8px;
cursor:pointer;
transition:0.3s linear;
position:relative;

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
}

.price{
    margin-top:${({theme}) => theme.margin.sm};
    font-weight:500;
    color:${({theme}) => theme.colors.primary};
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
    background:${({theme}) => theme.colors.white};
    display:flex;
    gap:1rem;
    padding:${({theme}) => theme.padding.sm};
    transform:translate(-50% , -50%);
}
`