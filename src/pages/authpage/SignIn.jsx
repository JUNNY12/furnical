import { SharedLayout } from "../../component"
import styled from "styled-components"
import { Input } from "../../component"
import { Button } from "../../component"
import { Link } from "react-router-dom"
import { devices } from "../../config/mediaquery"



const SignIn = () => {
  return (
    <SharedLayout>
      <Section>
      
        <div className="form">
         <h1>Login to your Account</h1>
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
              <Link to='/auth/register'> Register</Link>
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
  margin-top:2rem;
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
cursor:pointer;
margin-top:2rem;
background:transparent;
@media all and ${devices.mobileM}{
  width:280px;
}

`

const LoginButton = styled(Button)`
width:300px;
background-color:${({theme}) => theme.colors.primary};
height:35px;
color:${({theme}) => theme.colors.white};
margin-top:2rem;
margin-bottom:1rem;
font-weight:600;
@media all and ${devices.mobileM}{
  width:280px;
}
`
export default SignIn