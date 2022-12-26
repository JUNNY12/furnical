import React from 'react'
import styled from "styled-components"
import { Container, Inputs , GroupInput} from './BillingAddress'


const ShippingAddress = () => {
    return (
      <Container>
          <h2>Shipping Address</h2>
          <form>
              <div className='groupInput'>
                  <div>
                      <label>First name</label> <br/>
                      <GroupInput />
                  </div>
  
                  <div>
                      <label>Last name</label> <br/>
                      <GroupInput />
                  </div>
  
              </div>
              <div>
                  <label>Comapny name (optional)</label> <br/>
                 <Inputs />
              </div>
              <div>
                  <label>Street address</label> <br/>
                 <Inputs />
              </div>
              <div>
                  <label>City / Town</label> <br/>
                 <Inputs />
              </div>
              <div>
                  <label>State</label> <br/>
                  <select>
                      <option>Choose</option>
                      <option>Lagos</option>
                      <option>Fct</option>
                  </select>
              </div>
              <div>
                  <label>Phone</label> <br/>
                 <Inputs />
              </div>
              <div>
                  <label>Email Address</label> <br/>
                 <Inputs />
              </div>
              <button className='saveBtn'>Save Address</button>
          </form>
      </Container>
    )
  }

export default ShippingAddress