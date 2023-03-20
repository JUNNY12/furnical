import React from 'react'
import { Card } from "../../../component"
import { MdFavorite } from "react-icons/md"
import { AiFillEye } from "react-icons/ai"
import { Rate } from '../../../component'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite } from '../../../state/slice/favoriteSlice'
import { addToCart } from '../../../state/slice/cartSlice'
import { formatPrice } from '../../../constants/formatPrice'


const BedCard = ({ id, url, slug, productName, rating, purchased, price, inStock }) => {

    const { favoriteItems } = useSelector((state) => state.favorite)
    const [isFavorite, setIsFavorite] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const existingItem = favoriteItems.find((item) => item.id === id);
        setIsFavorite(existingItem ? true : false);
    }, [favoriteItems, id])


    const dispatch = useDispatch();

    const handleAddfavorite = (id, url, price, productName) => {
        dispatch(
            addFavorite({
                id,
                url,
                price,
                productName,
            })
        );
        setIsFavorite(!isFavorite);
    };

    const handleAddToCart = (id, url, price, productName) => {
        dispatch(
            addToCart({
                id,
                url,
                price,
                productName,
            })
        );
    };


    const productItem = useSelector((state) => state.cart.cartItems.find((item) => item.id === id));
    const buttonText = productItem ? "In cart" : "Add To Cart";


    return (

        <Card>
            <img src={url} alt={productName} className='img' />
            <div className='cardBody'>
                <div className='name'>{productName}</div>
                <div className='rate'>
                    <span className='rating'><Rate rating={rating} /></span>
                    <span>({purchased})</span>
                </div>
                <div className='price'>
                    <span>{formatPrice(price)}</span>
                </div>
                <button
                    disabled={!inStock}
                    className={inStock ? "addCart" : "notAllowed"}
                    onClick={() => handleAddToCart(id, url, price, productName)}
                >
                    {inStock ? `${buttonText}` : <span className="outOfStock">Out of Stock</span>}
                </button>
            </div>

            <div className='preview'>
                <div className='view' onClick={() => navigate(`/shop/item/${slug}`)}><AiFillEye /></div>
                <div className={isFavorite ? 'isFavorite' : "favorite"}
                    onClick={() => handleAddfavorite(id, url, price, productName)}
                ><MdFavorite /></div>
            </div>

        </Card>

    )
}

export default BedCard