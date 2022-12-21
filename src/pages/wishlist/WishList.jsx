import styled from "styled-components"
import { SharedLayout } from "../../component"
import Header from "./Header"

const WishList = () => {
  return (
    <SharedLayout>
      <Section>
      <div>
        <Header />
      </div>
      </Section>
      <Container>
        <div className="text">Your Wish List is Empty</div>
      </Container>
    </SharedLayout>
  )
}


const Section = styled.section`
margin:${({theme}) => theme.margin.lg};
padding:${({theme}) => theme.padding.lg};
`

const Container= styled.div`
background:${({theme}) => theme.colors.white};
padding:${({theme}) => theme.padding.lg};

.text{
  text-align:center;
  font-weight:600;
  font-size:2rem;
}
`
export default WishList