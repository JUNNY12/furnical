import { Outlet } from "react-router-dom"
import Header from "./Header"
import SearchSection from "./SearchSection"
import SecondNav from "./SecondNav"
import styled from "styled-components"
import Footer from "./Footer"
import { devices } from "../config/mediaquery"

const SharedLayout = ({children}) => {
  return (
    <>
    <Container>
        <Header />
    </Container>

    {children}
    </>
  )
}


const Container = styled.div`
background-color:white;
padding:${({theme}) => theme.padding.xmd};

@media all and ${devices.mobileM}{
  padding:${({theme}) => theme.padding.md};
}

`
export default SharedLayout