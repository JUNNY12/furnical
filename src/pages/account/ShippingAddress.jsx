import React from 'react'
import { Container, Inputs , GroupInput} from './BillingAddress'
import { useSelector } from 'react-redux'
import { useUpdateUserShippingAddressMutation , useUserQuery} from '../../services/user'
import { useState, useEffect } from 'react'
import { toast } from "react-toastify";


const ShippingAddress = () => {
    const userIdentity = useSelector((state) => state.auth.user)
    const{id} = userIdentity
    const {data, isSuccess} = useUserQuery(id)
    const shippingAddress = data?.shipping_address

    console.log(data)

    console.log(shippingAddress)
    const [update] = useUpdateUserShippingAddressMutation()

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
                firstName: shippingAddress?.firstName || '',
                lastName: shippingAddress?.lastName || '',
                email: shippingAddress?.email || '',
                phoneNumber: shippingAddress?.phoneNumber || '',
                streetAddress: shippingAddress?.streetAddress || '',
                companyName: shippingAddress?.companyName || '',
                city: shippingAddress?.city || '',
                state: shippingAddress?.state || ''
            })
        }
    }, [isSuccess, shippingAddress])

    const { firstName, lastName, companyName, streetAddress, city, state, phoneNumber, email} = formData

    const handleUpdate = async (e) => {
      e.preventDefault()
      try {
        const updateUser = await update({
          id,
          body:{
            'shippingAddress':{
              firstName,
              lastName,
              companyName,
              streetAddress,
              city,
              state,
              phoneNumber,
              email
          }
          }
        }).unwrap()
        // console.log(updateUser)
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
      }
      catch (err) {
        console.log(err)
      }
    }
    return (
      <Container>
          <h2>Shipping Address</h2>
          <form onSubmit={handleUpdate}>
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
                 name='phoneNumber'
                 onChange={handleInputChange}
                 value={phoneNumber}
                 type="text"
                 />
              </div>
              <div>
                  <label>Email Address</label> <br/>
                 <Inputs 
                 name='email'
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

export default ShippingAddress