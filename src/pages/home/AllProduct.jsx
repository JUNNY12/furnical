import styled from "styled-components"
import ProductCard from "./ProductCard"
import { Link } from "react-router-dom"
import AllProductHeader from "./AllProductHeader"
import { devices } from "../../config/mediaquery"

const AllProduct = () => {
  return (
   <Container>
       <AllProductHeader />
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
padding-bottom:5rem;

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

@media all and ${devices.laptop}{
  grid-template-columns:1fr 1fr 1fr;
  margin:${({theme}) => theme.margin.md};
  padding:${({theme}) => theme.padding.md};
  gap:1.5rem;

@media all and ${devices.tablet}{
  grid-template-columns:1fr 1fr;
}
@media all and (max-width:550px){
  grid-template-columns:1fr;
  margin:${({theme}) => theme.margin.md};
  padding:${({theme}) => theme.padding.md};
}
`

export default AllProduct