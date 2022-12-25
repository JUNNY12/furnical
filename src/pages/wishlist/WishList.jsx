import styled from "styled-components"
import { SharedLayout } from "../../component"
import Header from "./Header"
import List from "./List"
import { devices } from "../../config/mediaquery"

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
      <List />
    </SharedLayout>
  )
}


const Section = styled.section`
margin:0 ${({theme}) => theme.margin.lg} 0 ${({theme}) => theme.margin.lg};
padding:${({theme}) => theme.padding.lg};
`

const Container= styled.div`
background:${({theme}) => theme.colors.white};
padding:${({theme}) => theme.padding.lg};

.text{
  text-align:center;
  font-weight:600;
  font-size:2rem;
  @media all and ${devices.mobileL}{
    font-size:1.5rem;
  }
  
}
`
export default WishList