import React from 'react'
import styled from "styled-components"
import { useSelector } from 'react-redux'
import { devices } from "../../config/mediaquery"

const Dashboard = () => {
  const userIdentity = useSelector((state) => state.auth.user)
  
  
  return (
    <Div>
      <h3>
        <span> Welcome on board </span>
        <span> {userIdentity?.username} </span>
      </h3>
      <p>
        From your account dashboard you can view your recent orders, 
        manage your shipping and billing addresses,
        and edit your password and account details.
      </p>
    </Div>
  )
}

const Div = styled.div`

@media ${devices.tablet} {
  margin-bottom:4rem;
}
h3{
  text-align:center;
  font-size:1.5rem;
  font-weight:550;
}
p{
  font-size:1.1rem;
}
`

export default Dashboard