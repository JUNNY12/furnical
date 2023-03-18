import React from "react";
import { Rate } from "../../component";
import { MdFavorite } from "react-icons/md"
import { AiFillEye } from "react-icons/ai"
import { addFavorite } from '../../state/slice/favoriteSlice'
import { addToCart } from '../../state/slice/cartSlice'
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ListCard = ({id, url, price, productName, rating, slug, purchased, description, inStock}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleAddToCart = ({ id, price, url, productName }) => {
        dispatch(addToCart({
            id,
            price,
            url,
            productName
        }))
    }
    const [isFavorite, setIsFavorite] = useState(false);

    const { favoriteItems } = useSelector((state) => state.favorite);

    // check if the current product is already in favorites
    useEffect(() => {
        const existingItem = favoriteItems.find((item) => item.id === id);

        setIsFavorite(existingItem ? true : false);
    }, [favoriteItems]);

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


    return (
        <div className="list" key={id}>
            <div className="listImg">
                <img className="img" src={url} alt={productName} />
                <div className="viewFav">
                    <span 
                    onClick={() => navigate(`/shop/item/${slug}`)}
                    className="span">
                        <AiFillEye />
                    </span>
                    <span 
                    onClick={() => handleAddfavorite(id, url, price, productName)}
                    className={isFavorite ? "isFavorite " : "span"}>
                        <MdFavorite />
                    </span>
                </div>
            </div>
            <div>
                <h4>{productName} </h4>

                <div className="price">
                    <span>₦</span>
                    <span>{price}</span>
                </div>
                <div className="rate">
                    <Rate rating={rating} />
                    <span>({purchased})</span>
                </div>
                <div className="desc">{description}</div>

                <div>
                    <button
                        className="addCart"
                        onClick={() => handleAddToCart({ id, price, url, productName })}
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ListCard;
