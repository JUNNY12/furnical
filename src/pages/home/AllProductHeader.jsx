import styled from "styled-components"



const AllProductHeader = () => {
  return (
    <Section>
        <h1>FEATURED PRODUCTS</h1>
        <h4>All Categories</h4>

        <div>
            <span className="span">prev</span>
            <span className="span">Next</span>
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


.span{
    display:inline-block;
    margin-right:${({theme}) => theme.margin.lg};
    border:1.5px solid gray;
    border-radius:4px;
    padding:${({theme}) => theme.padding.sm};
    cursor:pointer;
    font-weight:500;
}
`
export default AllProductHeader