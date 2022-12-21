import { SharedLayout } from "../../component"
import styled from "styled-components"
import { Input } from "../../component"
import { Button } from "../../component"
import { Link } from "react-router-dom"



const SignIn = () => {
  return (
    <SharedLayout>
      <Section>
      
        <div className="form">
         <h1>Login</h1>
          <form>
            <div>
              <LoginInput 
              name='username'
              placeholder="Type your username"
              type='text'
              />
            </div>

            <div>
              <LoginInput 
              name='username'
              type='password'
              placeholder="Type your username"
              />
            </div>

            <LoginButton>Login</LoginButton>

            <div>
              <span>Don't have an account? </span>
              <Link to='register'> Register</Link>
            </div>

            <div className="forgetPassword">Forget Password</div>
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

.forgetPassword{
  font-weight:600;
}
`

const LoginInput = styled(Input)`
width:300px;
height:35px;
text-indent:10px;
border:none;
border-bottom:1.5px solid gray;
background:transparent;
cursor:pointer:

`

const LoginButton = styled(Button)`
width:300px;
background-color:${({theme}) => theme.colors.primary};
height:35px;
color:${({theme}) => theme.colors.white};
font-weight:600;
`
export default SignIn