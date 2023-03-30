import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Container, Inputs, GroupInput } from './BillingAddress';
import { useUpdateUserShippingAddressMutation, useUserQuery } from '../../services/user';

const ShippingAddress = () => {
  const userIdentity = useSelector((state) => state.auth.user);
  const { id } = userIdentity;
  const { data, isSuccess } = useUserQuery(id);
  const shippingAddress = data?.shipping_address;

  const [update, { isLoading }] = useUpdateUserShippingAddressMutation();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    streetAddress: '',
    city: '',
    state: '',
    phoneNumber: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

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
        state: shippingAddress?.state || '',
      });
    }
  }, [isSuccess, shippingAddress]);

  const { firstName, lastName, companyName, streetAddress, city, state, phoneNumber, email } = formData;

  const shipping_address = formData;

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await update({ id, body: { shipping_address } }).unwrap();
      toast.success('Saved successfully', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        closeButton: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'light',
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <h2>Shipping Address</h2>
      <form onSubmit={handleUpdate}>
        <div className="groupInput">
          <div>
            <label>First name</label> <br />
            <GroupInput name="firstName" onChange={handleInputChange} value={firstName} type="text" />
          </div>
          <div>
            <label>Last name</label> <br />
            <GroupInput name="lastName" onChange={handleInputChange} value={lastName} type="text" />
          </div>
        </div>
        <div>
          <label>Company name (optional)</label> <br />
          <Inputs name="companyName" onChange={handleInputChange} value={companyName} type="text" />
        </div>
        <div>
          <label>Street address</label> <br />
          <Inputs name="streetAddress" onChange={handleInputChange} value={streetAddress} type="text" />
        </div>
                <div>
                    <label>City / Town</label> <br />
                    <Inputs
                        name='city'
                        onChange={handleInputChange}
                        value={city}
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