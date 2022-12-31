import React from 'react'
import { SharedLayout } from '../../component'
import styled from "styled-components"
import { Input, Button } from '../../component'
import { Link , useNavigate} from 'react-router-dom'
import { devices } from '../../config/mediaquery'
import {useForm} from "../../hooks"
import { useRegisterMutation } from '../../services/auth'
import { useEffect } from 'react'
import {toast} from "react-toastify"
import { BeatLoader } from 'react-spinners'



const SignUp = () => {
  const navigate = useNavigate()
  const [register, {isLoading, data, error, isError, isSuccess}] = useRegisterMutation()
  
  // custom useForm hook
  const {formData, handleInputChange} = useForm(
    {
      email:'',
      password:'',
      username:'',
    }
  )
  //Destrustured the formdata
  const {email , password, username} = formData

  //Posting the formdata with async function from the redux toolkit query
  const handleSubmit = async (e) => {
    e.preventDefault()
    await register ({
      email,
      password,
      username
    })
  }
  //redirecting after successful rigistration
  useEffect(() => {
    if(isSuccess){
      toast.success('You have been registered successfully ...',{
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
       <h1>Register an Account</h1>
        <form onSubmit={handleSubmit}>
        
          <div>
            <RegisterInput 
            name='username'
            value={username}
            placeholder="Type your username"
            type='text'
            onChange={handleInputChange}
            />
          </div>

          <div>
            <RegisterInput 
            name='email'
            value={email}
            placeholder="Type your email"
            type='text'
            onChange={handleInputChange}
            />
          </div>

          <div>
            <RegisterInput 
            name='password'
            type='password'
            value={password}
            onChange={handleInputChange}
            placeholder="Type your password"
            />
          </div>

          <RegisterButton>
          {isLoading ? <span> <BeatLoader color='#ffffff' /></span> : 'Register'}
          </RegisterButton>

          <div>
            <span>Already have an account? </span>
            <Link to='/auth/login'> Login</Link>
          </div>
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

`

const RegisterInput = styled(Input)`
width:300px;
height:35px;
text-indent:10px;
border:none;
border-bottom:1.5px solid gray;
background:transparent;
cursor:pointer;
margin-top:1rem;
@media all and ${devices.mobileM}{
  width:280px;
}

`

const RegisterButton = styled(Button)`
width:300px;
background-color:${({theme}) => theme.colors.primary};
height:35px;
color:${({theme}) => theme.colors.white};
font-weight:600;
margin-top:2rem;
margin-bottom:1rem;
cursor:pointer;
@media all and ${devices.mobileM}{
  width:280px;
}
`
export default SignUp