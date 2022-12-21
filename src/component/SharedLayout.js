import { Outlet } from "react-router-dom"
import Header from "./Header"
import SearchSection from "./SearchSection"
import SecondNav from "./SecondNav"
import styled from "styled-components"
import Footer from "./Footer"

const SharedLayout = ({children}) => {
  return (
    <>
    <Container>
        <Header />
        <SearchSection />
        <SecondNav />
    </Container>

    {children}
    </>
  )
}


const Container = styled.div`
background-color:white;
padding:${({theme}) => theme.padding.xmd};

`
export default SharedLayout