import Header from "../../component/Header"
import SearchSection from "./SearchSection"
import { SecondNav } from "../../component"
import styled from "styled-components"
import AllProductHeader from "./AllProductHeader"
import AllProduct from "./AllProduct"

const Home = () => {
  return (
    <>
      <Section>
          <Header />
          <SearchSection />
          <SecondNav />
          <AllProductHeader />
      </Section>
      <AllProduct />
   </>

  )
}

const Section = styled.section`
background-color:${({theme}) => theme.colors.white};
margin-bottom:${({theme}) => theme.margin.sm};
padding-bottom:${({theme}) => theme.padding.sm};
`



export default Home