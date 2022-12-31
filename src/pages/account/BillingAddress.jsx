import React from 'react'
import styled from "styled-components"
import { Input } from '../../component'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks'

const BillingAddress = () => {

    const userIdentity = useSelector((state) => state.auth.user)
    const {email} = userIdentity
    
    const {formData, handleInputChange} = useForm(
      {
        firstName:'',
        lastName:'',
        companyName:'',
        emailText:'' || email,
        streetAddress:'',
        city:'',
        state:'',
      }
    )
    const {
        firstName,
        lastName,
        displayName,
        emailText, 
        companyName,
        city,
        state,
        streetAddress,
        phone,
     } = formData
  return (
    <Container>
        <h2>Billing Address</h2>
        <form>
            <div className='groupInput'>
                <div>
                    <label>First name</label> <br/>
                    <GroupInput
                    name='firstName'
                    onChange={handleInputChange}
                    value={firstName}
                    type="text" />
                </div>

                <div>
                    <label>Last name</label> <br/>
                    <GroupInput 
                    name='lastName'
                    onChange={handleInputChange}
                    value={lastName}
                    type="text"/>
                </div>

            </div>
            <div>
                <label>Comapny name (optional)</label> <br/>
               <Inputs 
               name='companyName'
               onChange={handleInputChange}
               value={companyName}
               type="text"
               />
            </div>
            <div>
                <label>Street address</label> <br/>
               <Inputs
               name='streetAddress'
               onChange={handleInputChange}
               value={streetAddress}
               type="text" />
            </div>
            <div>
                <label>City / Town</label> <br/>
               <Inputs
               name='city'
               onChange={handleInputChange}
               value={city}
               type="text"
               />
            </div>
            <div>
                <label>State</label> <br/>
                <select
                name='state'
                onChange={handleInputChange}
                value={state}
                type="text"
                >
                    <option>Choose</option>
                    <option>Lagos</option>
                    <option>Fct</option>
                </select>
            </div>
            <div>
                <label>Phone</label> <br/>
               <Inputs
               name='phone'
               onChange={handleInputChange}
               value={phone}
               type="tel"
               />
            </div>
            <div>
                <label>Email Address</label> <br/>
               <Inputs
               name='emailText'
               onChange={handleInputChange}
               value={emailText}
               type="email"
               />
            </div>
            <button className='saveBtn'>Save Address</button>
        </form>
    </Container>
  )
}

export const Container = styled.section`
padding-bottom:4rem;

.groupInput{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:10px;
    margin-bottom:1rem;
    @media all and (max-width:768px){
        grid-template-columns:1fr; 
    }
}

select{
    border:1.5px solid gray;
    outline:none;
    width:630px;
    height:40px;
    margin-bottom:1rem;
    @media all and (max-width:930px){
        width:500px;
    }
    @media all and (max-width:768px){
        width:400px;
    }
    @media all and (max-width:500px){
        width:260px;
    }
}
.saveBtn{
    outline:none;
    background:${({theme}) => theme.colors.primary};
    color:${({theme}) => theme.colors.white};
    border:none;
    font-weight:550;
    padding:${({theme}) => theme.padding.md};
    margin-top:${({theme}) => theme.padding.sm};
    cursor:pointer;
  }

  label{
      font-weight:500;
  }

`

export const GroupInput = styled(Input)`
width:300px;
height:35px;
text-indent:8px;
@media all and (max-width:930px){
    width:240px;
}
@media all and (max-width:768px){
    width:400px;
}
@media all and (max-width:500px){
    width:250px;
}
`
export const Inputs = styled(Input)`
width:620px;
height:35px;
margin-bottom:1rem;
text-indent:8px;
@media all and (max-width:930px){
    width:500px;
}
@media all and (max-width:768px){
    width:400px;
}
@media all and (max-width:500px){
    width:250px;
}
`

export default BillingAddress