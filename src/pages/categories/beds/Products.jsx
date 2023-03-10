import React from 'react'
import { Container, Section } from '../../shop/Products'
import BedCard from './BedCard'
import { useGetBedQuery } from '../../../services/category'
import {CircleLoader} from "react-spinners"

const Products = () => {
  const {isLoading, isSuccess, data} = useGetBedQuery()
  const item= data?.data[0].attributes?.products?.data
  
  return (
    <Container>
        <Section>
            {
              isSuccess && item?.map((product) => {
                const {id} = product
                const {slug, productName, price, description, rating, purchased} = product.attributes
                const {url} = product.attributes.image.data.attributes
                return(
                  <BedCard 
                  key={id}
                  id={id}
                  slug={slug}
                  url={url}
                  productName={productName}
                  price={price}
                  description={description}
                  rating={rating}
                  purchased={purchased}
                  />
                )
              })
            }
        </Section>
        {
          isLoading &&
          <div className="loader">
            <CircleLoader color="#db9277" size={150} />
          </div>
        }
    </Container>
  )
}

export default Products