import React from 'react'
import { SharedLayout } from '../../component'
import styled from "styled-components"
import { Input, Button } from '../../component'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <SharedLayout>
      <Section>
      
      <div className="form">
       <h1>Register</h1>
        <form>
          <div>
            <RegisterInput 
            name='username'
            placeholder="Type your username"
            type='text'
            />
          </div>

          <div>
            <RegisterInput 
            name='username'
            type='password'
            placeholder="Type your username"
            />
          </div>

          <RegisterButton>Register</RegisterButton>

          <div>
            <span>Already have an account? </span>
            <Link to='/account'> Login</Link>
          </div>
        </form>
        
      </div>
    </Section>
    </SharedLayout>
  )
}




const Section = styled.section`


h1{
  text-align:center;
}

a{
  text-decoration:none;
  color:${({theme}) => theme.colors.primary};
  font-weight:600;
}
form{
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  row-gap:1.5rem;
}

`

const RegisterInput = styled(Input)`
width:300px;
height:35px;
text-indent:10px;
border:none;
border-bottom:1.5px solid gray;
background:transparent;
cursor:pointer:

`

const RegisterButton = styled(Button)`
width:300px;
background-color:${({theme}) => theme.colors.primary};
height:35px;
color:${({theme}) => theme.colors.white};
font-weight:600;
`
export default SignUp