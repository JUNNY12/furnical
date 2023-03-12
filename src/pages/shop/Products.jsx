import ProductCard from "./ProductCard"
import styled from "styled-components"
import { devices } from "../../config/mediaquery"


const Products = (props) => {
  const { isSuccess, sortedData} = props

    return (
     <Container>
       <Section>
       {
         isSuccess && sortedData?.map((product) => {
          const {slug} = product.attributes
          const {id} = product
          const {productName ,rating, purchased, price, description} = product.attributes
          const {url} = product.attributes.image.data.attributes
          
          return (
            <ProductCard
              key={id}
              id={id}
              productName={productName}
              rating={rating}
              purchased={purchased}
              description={description}
              price={price}
              url={url}
              slug={slug}
            />
          )
        })
        }
       </Section>
      
     </Container>
    )
  }
  
  export const Container = styled.section`
  padding-bottom:${({theme}) => theme.padding.lg};
  
  .loader{
    display:flex;
    justify-content:center;
    align-items:center;
  }
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
  export const Section= styled.section`
  display:grid;
  grid-template-columns:1fr 1fr 1fr 1fr;
  gap:2rem;
  margin:0 ${({theme}) => theme.margin.lg} ${({theme}) => theme.margin.lg};;
  padding:${({theme}) => theme.padding.lg} ${({theme}) => theme.margin.lg};;
  @media all and ${devices.laptop}{
    grid-template-columns:1fr 1fr 1fr;
    margin:${({theme}) => theme.margin.md};
    padding:${({theme}) => theme.padding.md};
    gap:1rem;
  
  @media all and ${devices.tablet}{
    grid-template-columns:1fr 1fr;
  }
  @media all and (max-width:550px){
    grid-template-columns:1fr;
    margin:${({theme}) => theme.margin.md};
    padding:${({theme}) => theme.padding.md};
  }
  `
  
  export default Products