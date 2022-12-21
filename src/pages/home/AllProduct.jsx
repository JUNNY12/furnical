import styled from "styled-components"
import ProductCard from "./ProductCard"
import { Link } from "react-router-dom"

const AllProduct = () => {
  return (
   <Container>
     <Section>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
     </Section>
     <div style={{textAlign:'center'}} >
         <Link to={`/shop`}>
             <Button>View All</Button>
         </Link>
     </div>
   </Container>
  )
}

const Container = styled.section`
padding-bottom:${({theme}) => theme.padding.lg};

`
const Button = styled.button`
outline:none;
border:none;
background-color:${({theme}) => theme.colors.primary};
padding:${({theme}) => theme.padding.sm};
width:11rem;
color:${({theme}) => theme.colors.white};
font-weight:600;
cursor:pointer;
`
const Section= styled.section`
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr;
gap:2rem;
margin:${({theme}) => theme.margin.lg};
padding:${({theme}) => theme.padding.lg};
`

export default AllProduct