import React from 'react'
import styled from "styled-components"
import { Container, Inputs , GroupInput} from './BillingAddress'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks'

const ShippingAddress = () => {
    const userIdentity = useSelector((state) => state.auth.user)
    const {username, email} = userIdentity
    
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
          <h2>Shipping Address</h2>
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
                        type="text"
                      />
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
              <div >
                  <label>Street address</label> <br/>
                 <Inputs 
                 name='streetAddress'
                 onChange={handleInputChange}
                 value={streetAddress}
                 type="text"
                 />
              </div>

              <div>
                  <label>City / Town</label> <br/>
                 <Inputs
                    name='city'
                    onChange={handleInputChange}
                    value={city}
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

export default ShippingAddress