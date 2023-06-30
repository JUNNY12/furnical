import React from 'react'
import { Container, Section } from '../../shop/Products'
import ChairCard from './ChairCard'
import { useGetChairQuery } from '../../../services/category'
import Pagination from '../../../component/Pagination'
import { usePagination } from '../../../hooks'
import LoadingCard from "../../../component/loadingCard"

const ChairProducts = () => {
  const {isLoading, isSuccess, data} = useGetChairQuery()
  const dataItems = data?.data[0].attributes?.products?.data
  let itemsPerPage = 4;
  let visiblePages = 2;

  const {
    currentData, 
    nextPage, 
    prevPage, 
    jumpPage,
    currentPage,
    hasMorePages,
    visiblePageRange,
    totalPage} = usePagination(dataItems, itemsPerPage, visiblePages)


  return (
    <Container>
        <Section>
           {
            isSuccess && currentData()?.map((product) => {
              const {id} = product
              const {slug, productName, price, description, rating, purchased, inStock} = product.attributes
              const {url} = product.attributes.image.data.attributes
              return(
                <ChairCard 
                key={id}
                id={id}
                slug={slug}
                url={url}
                productName={productName}
                price={price}
                description={description}
                rating={rating}
                purchased={purchased}
                inStock={inStock}
                />
              )
            })
           }
        {
          isLoading && [...Array(8)].map((_, index) => {
            return (
              <LoadingCard key={index} />
            )
          }
          )
        }
        </Section>
        {
          isSuccess && (
            <Pagination
            prevPage={prevPage}
            currentPage={currentPage}
            nextPage={nextPage}
            totalPage={totalPage}
            jumpPage={jumpPage}
            hasMorePages={hasMorePages}
            visiblePageRange={visiblePageRange}
           />
          )
        }
    </Container>
  )
}

export default ChairProducts