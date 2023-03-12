import styled from "styled-components"
import { devices } from "../../config/mediaquery"
import {GrNext, GrPrevious} from "react-icons/gr"



const AllProductHeader = ({prevPage, nextPage, currentPage, totalPage}) => {
  return (
    <Section>
        <h1>FEATURED PRODUCTS</h1>
        <h4>All Categories</h4>

        <div className="navigate">
            <button className="span" 
            onClick={prevPage} 
            disabled={currentPage === 1}>
              <GrPrevious />
           </button>

            <button className="span"
             onClick={nextPage} 
             disabled ={currentPage === totalPage}>
              <GrNext />
              </button>
        </div>
    </Section>
  )
}


const Section = styled.section`
display:flex;
justify-content:space-between;
align-items:center;
margin:${({theme}) => theme.margin.lg};
padding:0 ${({theme}) => theme.padding.lg} 0 ${({theme}) => theme.padding.lg};
border-bottom:2px solid${({theme}) => theme.colors.primary} ;

@media all and ${devices.tablet}{
  justify-content:center;
  margin:${({theme}) => theme.margin.md};
  padding:0 ${({theme}) => theme.padding.md} 0 ${({theme}) => theme.padding.md};
}
h1{
  @media all and ${devices.tablet}{
    font-size:1.2rem;
  }
}

h4{
  @media all and ${devices.tablet}{
    display:none;
  }
}

.span{
    display:inline-block;
    margin-right:${({theme}) => theme.margin.lg};
    border:1.5px solid gray;
    border-radius:4px;
    padding:${({theme}) => theme.padding.sm};
    cursor:pointer;
    font-weight:500;
}

.navigate{
  @media all and ${devices.tablet}{
    display:none;
  }
}
`
export default AllProductHeader