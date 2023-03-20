import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'
import { devices } from '../../config/mediaquery'
import { useSelector, useDispatch } from 'react-redux'
import { clearOrder } from '../../state/slice/orderSlice'
import { formatPrice } from '../../constants/formatPrice'


const Orders = () => {

  const orders = useSelector((state) => state.order)

  const dispatch = useDispatch()

  const handleClearOrder = () => {
    dispatch(clearOrder())
  }

  return (
    <Container>
      <div>
        {
          orders?.orderItems ?.length === 0 ? (
            <div>
              <h3 >No order has been made yet</h3>
              <Link to='/shop'>
                <button className='browse'>Browse Products</button>
              </Link>

            </div>
          ) :
            (
              <div>
                <h3>Order History</h3>

                <div className='container'>

                  <div className='table'>
                    <table>
                      <thead>
                        <tr>
                          <th>S/N</th>
                          <th>Date</th>
                          <th>Product</th>
                          <th>Total Amount(₦)</th>
                          <th>Status</th>
                        </tr>
                      </thead>

                      <tbody>
                        {
                          orders?.orderItems?.map((order, index) => {

                            console.log(order)
                            const { id } = order
                            const { orderDate } = order
                            // Create a new Date object from the ISO string
                            const newDate = new Date(orderDate);
                            const year = newDate.getFullYear();
                            const month = ("0" + (newDate.getMonth() + 1)).slice(-2); // Add leading zero if needed
                            const day = ("0" + newDate.getDate()).slice(-2); // Add leading zero if needed
                            const dateString = `${year}-${month}-${day}`;


                            const { cart } = order
                            const { success } = order

                            let totalAmount = 0;

                            cart.forEach(item => {
                              totalAmount += item.price * item.cartQuantity;
                            });

                            console.log(totalAmount)

                            return (
                              <tr key={id}>
                                <td>{index + 1}.</td>
                                <td>{dateString}</td>
                                <td>
                                  {
                                    cart?.map((item) => {
                                      return (
                                        <div key={item.id} className='prod'>
                                          <p className='qty'>X {item.cartQuantity}</p>
                                          <p className='price'>{formatPrice(item.price)}</p>
                                          <img className='img' src={item.url} alt={item.productName} />
                                        </div>
                                      )
                                    })
                                  }
                                </td>
                                <td>{formatPrice(totalAmount)}</td>
                                <td>{success ? <span className='success'>Sucesss</span> : <span className='failed'>Failed</span>} </td>
                              </tr>
                            )
                          })
                        }
                      </tbody>
                    </table>

                    <div className='clearWrap'>
                       <button className='clear' onClick={ () => handleClearOrder()}>Clear History</button>
                    </div>
                  </div>
                </div>
              </div>
            )
        }

      </div>
      
    </Container>
  )
}

const Container = styled.div`
@media ${devices.tablet} {
  margin-bottom:3rem;
}

.browse{
  outline:none;
  border:1px solid ${({ theme }) => theme.colors.primary};
  padding:0.5rem;
  font-weight:500;
  border-radius:2px;
  background: ${({ theme }) => theme.colors.white};
  cursor:pointer;
}
h3{
  text-align:center;
  font-size:1.5rem;
  font-weight:550;
}

.img{
  width:30px;
  height:30px;
}

.img,
.qty,
.price{
  margin:0 0.5rem;
}



td:nth-child(3){
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
}

.prod{
  display:flex;
  align-items:center;
  justify-content:center;
  margin:0.5rem 0;
}
.success{
  color:green;
  font-weight:700;
}

.failed{
  color:red;
  font-weight:500;
}

.table {
  border-collapse: collapse;
  width: 100%;
  font-size: 14px;
  font-family: sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  margin: auto;
  overflow:auto;

  @media ${devices.tablet} {
    font-size: 12px;
  }
}

.table thead tr {
  background-color: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  text-align: left;
}

.table th,
.table td {
  padding: 12px 35px;
}

.table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.table tbody tr:hover{
  cursor:pointer;
  color:${({ theme }) => theme.colors.white};
  background:${({ theme }) => theme.colors.primary};
  transition:all 0.3s ease-in-out;
}

.table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}

.clear{
  outline:none;
 border:none;
 color:${({ theme }) => theme.colors.white};
  padding:0.5rem;
  font-weight:700;
  border-radius:2px;
  background: ${({ theme }) => theme.colors.primary};
cursor:pointer;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.clear:hover{
  background: ${({ theme }) => theme.colors.white};
  color:${({ theme }) => theme.colors.primary};
  border:1px solid ${({ theme }) => theme.colors.primary};
  transition:all 0.3s ease-in-out;
}

.clearWrap{
  display:flex;
  justify-content:center;
  margin:1.5rem 0;
}
`

export default Orders