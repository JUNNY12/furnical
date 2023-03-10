import styled from "styled-components"
import ProductCard from "./ProductCard"
import { Link } from "react-router-dom"
import AllProductHeader from "./AllProductHeader"
import { devices } from "../../config/mediaquery"
import { useGetProductsQuery } from "../../services/product"
import {CircleLoader} from "react-spinners"

const AllProduct = () => {

  const {data ,isSuccess, isLoading} = useGetProductsQuery()
  
  return (
   <Container>
       <AllProductHeader />
     <Section>
        {
          isSuccess && data?.data?.map((product) => {
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
     {
        isLoading && <div className="loader"> <CircleLoader color="#db9277" size={150} /></div>
      }
     {
       isSuccess &&
       <div style={{textAlign:'center', marginBottom:'2rem'}} >
         <Link to={`/shop`}>
             <Button>View All</Button>
         </Link>
     </div>
     }
   </Container>
  )
}

const Container = styled.section`
padding-bottom:4rem;

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