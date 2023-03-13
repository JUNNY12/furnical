import styled from "styled-components"
import ProductCard from "./ProductCard"
import { Link } from "react-router-dom"
import AllProductHeader from "./AllProductHeader"
import { devices } from "../../config/mediaquery"
import {CircleLoader} from "react-spinners"
import { useGetProductsQuery } from "../../services/product"
import { usePagination } from "../../hooks"
import Pagination from "../../component/Pagination"



const AllProduct = () => {
  const{data ,isSuccess, isLoading} = useGetProductsQuery()
  const dataItems = data?.data
  const itemsPerPage = 8
  const visiblePages = 2

  const {
    currentData, 
    nextPage, 
    prevPage, 
    jumpPage,
    currentPage,
    hasMorePages,
    visiblePageRange,
    totalPage} = usePagination(dataItems, itemsPerPage, visiblePages)

  console.log(currentData())

  return (
   <Container>
       <AllProductHeader
       prevPage={prevPage}
       currentPage={currentPage}
       nextPage={nextPage}
       totalPage={totalPage}
       />
     <Section>
        {
          isSuccess && currentData()?.map((product) => {
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
        isLoading && <div className="loader"> <CircleLoader color="#db9277" size={150} /></div>
      }
       {
        isSuccess &&
          <Pagination 
          prevPage={prevPage}
          currentPage={currentPage}
          nextPage={nextPage}
          totalPage={totalPage}
          jumpPage={jumpPage}
          hasMorePages={hasMorePages}
          visiblePageRange={visiblePageRange}
          />

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


.active{
  background-color:${({theme}) => theme.colors.primary};
  color:${({theme}) => theme.colors.white};
}

.num{
  outline:none;
  border:none;
  cursor:pointer;
  border:1.5px solid ${({theme}) => theme.colors.primary};
}

.pageNum{
  display:flex;
  justify-content:center;
  align-items:center;
  margin-bottom:1.5rem;
}
.paginationContainer{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  border: 1px solid ${({theme}) => theme.colors.primary};
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