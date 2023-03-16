import React from 'react'
import { Input } from '../../component'
import styled from "styled-components"
import { useSelector } from 'react-redux'
import { useState , useEffect} from 'react'
import { useUpdateUserMutation, useUserQuery } from '../../services/user'
import { toast } from "react-toastify";




const Details = () => {

  const userIdentity = useSelector((state) => state.auth.user)
  const {id} = userIdentity
  const {isSuccess, data} = useUserQuery(id)
  const [update] = useUpdateUserMutation()

  
  const [formData, setFormData] = useState(
    {
      firstName:'',
      lastName:'',
      displayName:'',
      email:'',
    }
  )

  const handleInputChange = (e) => {
    const {name, value} = e.target
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }

  useEffect(() => {
    if(isSuccess){
      setFormData({
        firstName: data?.firstName || '',
        lastName: data?.lastName || '',
        displayName: data?.username || '',
        email: data?.email || '',
      })
    }
  }, [isSuccess, data])

const {firstName, lastName, displayName, email} = formData


const handleUpdate = async (e) => {
 e.preventDefault()
 try {
  const updateUser = await update({
    id,
    body: {
      firstName,
      lastName,
      username: displayName,
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
 } catch (error) {
  console.log(error)
 }
}
  return (
    <Container>
      <form onSubmit={handleUpdate}>
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
          value={email}
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