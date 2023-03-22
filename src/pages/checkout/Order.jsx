import React from 'react'
import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux'
import { getTotals } from '../../state/slice/cartSlice'
import { useEffect } from 'react'
import PaystackPop from "@paystack/inline-js"
import { toast } from "react-toastify";
import { clearCart } from '../../state/slice/cartSlice'
import { addToOrder, setOrderItemFailed} from '../../state/slice/orderSlice'
import { generateId } from '../../constants/generateId'
import { formatPrice } from '../../constants/formatPrice'
import { Link } from 'react-router-dom'


const Order = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)

    const userIdentity = useSelector((state) => state.auth.user)
    const id = userIdentity?.id
    const email = userIdentity?.email
    const username = userIdentity?.username

    console.log(cart)

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    useEffect(() => {
        getTotals()
    }, [cart, dispatch])

    const config = require('../../config/paystack')

    console.log(config.publicKey)

    const amount = cart.totalAmount

    const handleAddToOrder = () => {
        dispatch(addToOrder(
            { 
                cart:cart.cartItems,
                id: generateId(),
             }
            ))
    }

    const handlePaymentDecline = () => {
        dispatch(setOrderItemFailed({
            id: generateId(),
            cart: cart.cartItems,
        }))
      }

    const redirect = () => {
        setTimeout(() => {
            window.location.href = '/account/orders'
        }, 8000)
    }
    const handlePaymentClick = () => {

        const { publicKey } = config

        const paystack = new PaystackPop()
        const amount = cart.totalAmount
        console.log(amount)

        paystack.newTransaction({
            key: publicKey,
            amount: 20 * 100,
            email: email,
            firstName: username,

            onSuccess(transaction) {
                let message = `Payment Completed Refefrence ${transaction.reference}. You will be redirected in 8s`
                toast.success(` ${message} `, {
                    position: 'top-center',
                    autoClose: 8000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    closeButton: true,
                    progress: undefined,
                    theme: "light",
                })
                handleAddToOrder()
                handleClearCart()
                redirect()
            },

            onCancel() {
                toast.info("You canceled the transaction", {
                    position: 'top-center',
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    closeButton: true,
                    progress: undefined,
                    theme: "light",
                })

                handlePaymentDecline();
            },
        })
    }


    return (
        <Container>

            {
                cart.cartItems.length > 0 ? (

                    <div>
                        <h2>Order Summary</h2>
                        <div className='wrapper'>

                            <div className='head'>
                                <div>Product</div>
                                <div>Subtotal ( ₦ )</div>
                            </div>
                            {
                                cart?.cartItems?.map(({ id, productName, price, cartQuantity }) => {
                                    return (
                                        <div className='product' key={id}>
                                            <div>
                                                <span> {productName} </span>
                                                <span> X  {cartQuantity}</span>
                                            </div>
                                            <div>{formatPrice(price * cartQuantity)} </div>
                                        </div>
                                    )
                                })
                            }
                            <div className='total'>
                                <div>Total</div>
                                <div>{formatPrice(cart.totalAmount)}</div>
                            </div>

                            {
                                id ? (
                                    <div className='placeOrder'>
                                        <button onClick={() => handlePaymentClick()}>Place Order</button>
                                    </div>
                                )
                                    :
                                    (
                                       <Link to={`/auth/login`}>
                                             <div className='login'>
                                                 <button>Login</button>
                                            </div>
                                       </Link>
                                    )
                            }
                        </div>
                    </div>
                )
                    :
                    (
                        <div className='empty'>
                            <h3>No order in Cart</h3>
                        </div>
                    )
            }

        </Container>
    )
}

const Container = styled.div`
padding-bottom:4rem;
a{
    text-decoration:none;
}
.placeOrder,
.login{
    margin-top:2rem;
    display:flex;
    justify-content:flex-end;
    margin:1rem;
}


.placeOrder button,
.login button{
    background:${({ theme }) => theme.colors.primary};
    outline:none;
    border:none;
    color:white;
    font-size:1rem;
    padding:0.7rem;
    width:150px;
    cursor:pointer;
    font-weight:bold;
}

h2{
    text-align:center;
}

.head,
.product,
.total{
    display:flex;
    justify-content:space-between;
    margin-bottom:1rem;
    font-weight:550;
}
.head{
    border-bottom:2px solid gray;
    padding:1rem;
}

.total{
    padding:1rem;
}
.product{
    margin-bottom:1.5rem;
    padding:0 1rem 0.5rem 1rem;
}

.empty{
    text-align:center;
}

.total{
    border-top:2px solid gray;
}

.wrapper{
    border:2px solid gray;
    margin:1rem;
    margin-top:2.5rem;
    @media all and (max-width:930px){
        margin-top:0;
    }
}
`

export default Order