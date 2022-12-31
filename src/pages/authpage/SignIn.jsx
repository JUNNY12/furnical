import { SharedLayout } from "../../component"
import styled from "styled-components"
import { Input } from "../../component"
import { Button } from "../../component"
import { Link , useNavigate} from "react-router-dom"
import { devices } from "../../config/mediaquery"
import { useForm } from "../../hooks"
import { useLoginMutation } from "../../services/auth"
import {useEffect} from "react"
import {toast} from "react-toastify"
import {BeatLoader} from "react-spinners"


const SignIn = () => {
  const [loginUser, {isLoading, data, error, isError, isSuccess}] = useLoginMutation()
  const navigate = useNavigate()
  
  //custom useForm Hook
  const {formData, handleInputChange} = useForm(
    {
      email:'',
      password:'',
    }
  )
  //Destrustured the formdata
  const {identifier, password} = formData

  //Posting the formdata with async function from the redux toolkit query
  const handleSubmit = async (e) => {
    e.preventDefault()
    await loginUser(
      {
      identifier,
      password
     }
    )
  }

  //redirecting after successful login
  useEffect(() => {
    if(isSuccess){
      toast.success('Login successfully ...',{
        position:"top-center",
        autoClose: 1000,
        closeButton:false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light"
        })
      setTimeout(() => {
        navigate('/account/dashboard')
      }, 2000);
    }
  },[isSuccess, navigate])
  return (
    <SharedLayout>
      <Section>
      
        <div className="form">
         <h1>Login to your Account</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <LoginInput 
              name='identifier'
              type='email'
              placeholder="Type your email"
              value={identifier}
              onChange={handleInputChange}
              required
              />
            </div>

            <div>
              <LoginInput 
              name='password'
              type='password'
              placeholder="Type your password"
              value={password}
              onChange={handleInputChange}
              required
              />
            </div>

            <LoginButton>
              {isLoading ? <span> <BeatLoader color='#ffffff' /></span> : 'Login'}
            </LoginButton>

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
padding-bottom:4rem;

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
  margin-top:1rem;
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
cursor:pointer;
@media all and ${devices.mobileM}{
  width:280px;
}
`
export default SignIn