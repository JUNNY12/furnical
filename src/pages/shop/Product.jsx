import styled from "styled-components"
import { useParams } from "react-router-dom"
import data from "../../component/Data"

const Product = () => {
  const {item} = useParams()

  const product = data.find((singleItem) => {
    return (
      singleItem.id === Number(item)
    )
  })

  return (
    <Container>

    </Container>
  )
}

const Container = styled.div`

`

export default Product