import React from 'react'
import { Container, Inputs , GroupInput} from '../account/BillingAddress'
import { useForm } from '../../hooks'
import { Link } from 'react-router-dom'
import styled from "styled-components"

const Billing = () => {

    const {formData, handleInputChange} = useForm(
        {
          firstName:'',
          lastName:'',
          companyName:'',
          emailText:'',
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
    <Wrapper>
          <h2>Billing Address</h2>
        <form>
            <div className='groupInput'>
                <div>
                    <label>First name</label> <br/>
                    <GroupedInput
                    name='firstName'
                    onChange={handleInputChange}
                    value={firstName}
                    type="text" />
                </div>

                <div>
                    <label>Last name</label> <br/>
                    <GroupedInput 
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
        </form>

        <div className='create'>
           <Link to={`/auth/register`}>
                <div>Dont have account? Create an Account</div>
           </Link>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled(Container)`
padding-bottom:0;

a{
    text-decoration:none;
    font-size:1.2rem;
    color:${({theme}) => theme.colors.primary};
    @media all and (max-width:425px){
        font-size:1rem;
        text-align:center;
    }
}

.groupInput{
    @media all and (max-width:930px){
        grid-template-columns:1fr;
    }
}
`

const GroupedInput = styled(GroupInput)`
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

export default Billing