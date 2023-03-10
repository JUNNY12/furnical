import styled from "styled-components"
import { SharedLayout } from "../../component"
import Header from "./Header"
import List from "./List"
import { devices } from "../../config/mediaquery"
import { useSelector } from "react-redux"




const WishList = () => {
  const {favoriteItems} = useSelector((state) => state.favorite)

  return (
    <SharedLayout>
      <Section>
      <div>
        <Header />
      </div>
      </Section>
      {
        favoriteItems.length === 0 &&
        <Container>
           <div className="text">Your Wish List is Empty</div>
        </Container>
      }
      {
        favoriteItems.length > 0 && <List />
      }

    </SharedLayout>
  )
}


const Section = styled.section`
margin:0 ${({theme}) => theme.margin.lg} 0 ${({theme}) => theme.margin.lg};
`

const Container= styled.div`
background:${({theme}) => theme.colors.white};
padding:${({theme}) => theme.padding.lg};
display: flex;
align-items: center;
justify-content: center;
height: 40vh;

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