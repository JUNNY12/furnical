import React from 'react'
import { Input } from '../../component'
import styled from "styled-components"
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks'

const Details = () => {

  const userIdentity = useSelector((state) => state.auth.user)
  const {username, email} = userIdentity
  
  const {formData, handleInputChange} = useForm(
    {
      firstName:'',
      lastName:'',
      displayName:'' || username,
      emailText:'' || email
    }
  )
  const {firstName, lastName, displayName, emailText} = formData

  return (
    <Container>
      <form>
        <div className='groupInput'>
          <div>
            <label>First name</label> <br/>
            <GroupInput 
            name='firstName'
            onChange={handleInputChange}
            value={firstName}
            type="text"
            />
          </div>
          <div>
            <label>Last name</label> <br />
            <GroupInput 
            name='lastName'
            onChange={handleInputChange}
            value={lastName}
            type="text"
            />
          </div>
        </div>
        <div className='displayName'>
          <label>Display name</label> <br />
          <Inputs 
          name='displayName'
          onChange={handleInputChange}
          value={displayName}
          type="text"
          />
        </div>

        <div className='email'>
          <label>Email Address</label> <br />
          <Inputs 
          name='email'
          onChange={handleInputChange}
          value={emailText}
          type="email"
          />
        </div> 

        <div>
          <button className='saveBtn'>SAVE CHANGES</button>
        </div>
      </form>

    </Container>
  )
}

const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-top:2rem;
@media all and (max-width:800px){
  padding-bottom:4rem;
}


.groupInput{
  display:flex;
  column-gap:10px;
  margin-bottom:1rem;
  text-indent:8px;
  @media all and (max-width:800px){
    flex-direction:column;
  }
 
}

.email{
  margin-top:1rem;
}

label{
  font-weight:500;
}

.saveBtn{
  outline:none;
  background:${({theme}) => theme.colors.primary};
  color:${({theme}) => theme.colors.white};
  border:none;
  font-weight:550;
  padding:${({theme}) => theme.padding.md};
  margin-top:${({theme}) => theme.padding.lg};
  cursor:pointer;
}
`

const GroupInput = styled(Input)`
width:250px;
height:35px;
text-indent:8px;

@media all and (max-width:800px){
  margin-bottom:0.5rem;
  width:400px;
}
@media all and (max-width:460px){
  width:250px;
}
`

const Inputs = styled(Input)`
width:520px;
height:35px;
text-indent:8px;
@media all and (max-width:800px){
  width:400px;
}
@media all and (max-width:460px){
  width:250px;
}
`

export default Details