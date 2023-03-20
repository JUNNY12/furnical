import ProductCard from "./ProductCard"
import styled from "styled-components"
import { devices } from "../../config/mediaquery"
import { CircleLoader } from 'react-spinners'

const Products = (props) => {
  const { isSuccess, isLoading,sortedData} = props

    return (
     <Container>
       <Section>
       {
         isSuccess && sortedData?.map((product) => {
          const {slug} = product.attributes
          const {id} = product
          const {productName ,rating, purchased, price, description, inStock} = product.attributes
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
              inStock={inStock}
            />
          )
        })
        }
       </Section>
      {
        isLoading 
        && (
        <div className="loader"> 
          <CircleLoader color="#db9277" size={150} />
        </div>
        )
      }
     </Container>
    )
  }
  
  export const Container = styled.section`
  padding-bottom:${({theme}) => theme.padding.sm};
  
  .loader{
    display:flex;
    justify-content:center;
    align-items:center;
  }
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
      margin:${({theme}) => theme.margin.md};
      padding:${({theme}) => theme.padding.md};
      gap:0.8rem;
    }
    
    @media all and ${devices.mobileL}{
      margin:${({theme}) => theme.margin.sm};
      padding:${({theme}) => theme.padding.sm};
    }
  `
  
  export default Products