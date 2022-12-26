import React from 'react'
import styled from "styled-components"
import { Input } from '../../component'

const BillingAddress = () => {
  return (
    <Container>
        <h2>Billing Address</h2>
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