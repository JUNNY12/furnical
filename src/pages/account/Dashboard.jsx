import React from 'react'
import styled from "styled-components"

const Dashboard = () => {
  return (
    <Div>
      <h3>Welcome on board User</h3>
      <p>
        From your account dashboard you can view your recent orders, 
        manage your shipping and billing addresses,
        and edit your password and account details.
      </p>
    </Div>
  )
}

const Div = styled.div`

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