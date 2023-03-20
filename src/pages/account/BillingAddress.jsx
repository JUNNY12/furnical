import React from 'react'
import styled from "styled-components"
import { Input } from '../../component'
import { useSelector, useDispatch } from 'react-redux'
import { useUserQuery, useUpdateUserMutation } from '../../services/user'
import { useState, useEffect } from 'react'
import { toast } from "react-toastify";




const BillingAddress = () => {

    const userIdentity = useSelector((state) => state.auth.user)
    const { id } = userIdentity
    const { isSuccess, data } = useUserQuery(id)
    const [update] = useUpdateUserMutation()

    console.log(data)

    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        streetAddress: '',
        city: '',
        state: '',
        phoneNumber: '',
        email: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    useEffect(() => {
        if (isSuccess) {
            setFormData({
                firstName: data?.firstName || '',
                lastName: data?.lastName || '',
                email: data?.email || '',
                phoneNumber: data?.phoneNumber || '',
                streetAddress: data?.streetAddress || '',
                companyName: data?.companyName || '',
                city: data?.city || '',
                state: data?.state || ''
            })
        }
    }, [isSuccess, data])

    const { firstName, lastName, companyName, streetAddress, city, state, phoneNumber, email} = formData

    const handleUpdate = async (e) => {
        e.preventDefault()
        try{
          await update({
                id,
                body: { 
                    firstName,
                    lastName,
                    companyName,
                    streetAddress,
                    city,
                    state,
                    phoneNumber,
                    email
                }
            }).unwrap()
                toast.success('Saved successfully',{
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000,
                    closeButton: false,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "light",
                })
            }catch(err){
                console.log(err)
            }
    }
    return (
        <Container>
            <h2>Billing Address</h2>
            <form onSubmit={handleUpdate}>
                <div className='groupInput'>
                    <div>
                        <label>First name</label> <br />
                        <GroupInput
                            name='firstName'
                            onChange={handleInputChange}
                            value={firstName}
                            type="text" />
                    </div>

                    <div>
                        <label>Last name</label> <br />
                        <GroupInput
                            name='lastName'
                            onChange={handleInputChange}
                            value={lastName}
                            type="text" />
                    </div>

                </div>
                <div>
                    <label>Comapny name (optional)</label> <br />
                    <Inputs
                        name='companyName'
                        onChange={handleInputChange}
                        value={companyName}
                        type="text"
                    />
                </div>
                <div>
                    <label>Street address</label> <br />
                    <Inputs
                        name='streetAddress'
                        onChange={handleInputChange}
                        value={streetAddress}
                        type="text" />
                </div>
                <div>
                    <label>City / Town</label> <br />
                    <Inputs
                        name='city'
                        onChange={handleInputChange}
                        value={city}
                        type="text"
                    />
                </div>
                <div>
                    <label>State</label> <br />
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
                    <label>Phone</label> <br />
                    <Inputs
                        name='phoneNumber'
                        onChange={handleInputChange}
                        value={phoneNumber}
                        type="text"
                    />
                </div>
                <div>
                    <label>Email Address</label> <br />
                    <Inputs
                        name='emailText'
                        onChange={handleInputChange}
                        value={email}
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
    background:${({ theme }) => theme.colors.primary};
    color:${({ theme }) => theme.colors.white};
    border:none;
    font-weight:550;
    padding:${({ theme }) => theme.padding.md};
    margin-top:${({ theme }) => theme.padding.sm};
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