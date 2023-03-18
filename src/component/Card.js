import styled from 'styled-components'
import { devices } from '../config/mediaquery'


export const Card = styled.div`
background-color:${({theme}) => theme.colors.white};
object-fit:cover;
height:320px;
padding:${({theme}) => theme.padding.md};
border-radius:8px;
box-sizing:border-box;
cursor:pointer;
position:relative;
box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.5);
:hover .preview{
    display:flex;
    transition:.3s ease-in-out;
} 



@media all and (max-width:520px){
    padding:0.5rem;
    height:250px;
}

.img{
    width:100%;
    height:150px;

    @media all and (max-width:520px){
        height:100px;
    }
}

.isFavorite{
    color:red;
    font-size:2rem;
    @media all and (max-width:520px){
        font-size:1.5rem;
     }
}

.cardBody{
    margin-top:${({theme}) => theme.margin.sm};
}

.name{
    font-size:12px;
    color:black;
    margin-top:${({theme}) => theme.margin.sm};

    @media all and (max-width:520px){
        font-size:10px;
    }
}
.rate{
    margin-top:${({theme}) => theme.margin.sm};
    display:inline-flex;
    align-items:center;
    column-gap:0.5rem;
    font-size:12px;

    @media all and (max-width:520px){
        font-size:10px;
    }
}

.price{
    margin-top:${({theme}) => theme.margin.sm};
    font-weight:500;
    font-size:14px;
    color:${({theme}) => theme.colors.primary};

    @media all and (max-width:520px){
        font-size:12px;
    }
}

.rating{
    display:inline-flex;
}
.view,
.favorite{
    font-size:2rem;
    color:${({theme}) => theme.colors.white};
    @media all and (max-width:520px){
    font-size:1.5rem;
     }

}
.addCart{
    margin-top:${({theme}) => theme.margin.sm};
    outline:none;
    border:none;
    width:90%;
    color:${({theme}) => theme.colors.white};
    padding:${({theme}) => theme.padding.sm};
    background:${({theme}) => theme.colors.primary};
    font-weight:bold;
    cursor:pointer;
    position:absolute;
    bottom:0;
    left:50%;
    transform:translate(-50%,-50%);

    @media all and (max-width:520px){
        padding:0.3rem;
        margin-top:0.3rem;
        font-weight:normal;
        border-radius:4px;
    }
}

.preview{
    position:absolute;
    left:50%;
    top:30%;
    gap:1rem;
    padding:${({theme}) => theme.padding.sm};
    transform:translate(-50% , -50%);
    display:none;
    transition:1s linear;
  
}
`