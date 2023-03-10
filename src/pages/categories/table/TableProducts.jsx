import React from 'react'
import { Container, Section } from '../../shop/Products'
import TableCard from './TableCard'
import { useGetTableQuery } from '../../../services/category'
import {CircleLoader} from "react-spinners"


const TableProducts = () => {
  const {isLoading, isSuccess, data} = useGetTableQuery()
  const item = data?.data[0].attributes?.products?.data

  return (
    <Container>
        <Section>
            {
              isSuccess && item?.map((product) => {
                const {id} = product
                const {slug, productName, price, description, rating, purchased} = product.attributes
                const {url} = product.attributes.image.data.attributes
                return(
                  <TableCard 
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

export default TableProducts