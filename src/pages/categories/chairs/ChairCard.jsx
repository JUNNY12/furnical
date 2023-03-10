import React from "react";
import { Card } from "../../../component";
import { MdFavorite } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { Rate } from "../../../component";
import { useNavigate } from "react-router-dom";
import { useGetChairQuery } from "../../../services/category";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../state/slice/cartSlice";
import { addFavorite } from "../../../state/slice/favoriteSlice";
import { useState, useEffect } from "react";

const ChairCard = ({ id, slug, url, productName, price, description, rating, purchased }) => {

  const [isFavorite, setIsFavorite] = useState(false);
  const { favoriteItems } = useSelector((state) => state.favorite)

  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
    const existingItem = favoriteItems.find((item) => item.id === id);
    setIsFavorite(existingItem ? true : false);
  });

  const handleAddToCart = (id, price, productName, url) => {
    dispatch(
      addToCart({
        id,
        price,
        productName,
        url,
      })
    )
  }

  const handleAddFavorite = (id, price, productName, url) => {
    dispatch(
      addFavorite({
        id,
        price,
        productName,
        url,
      })
    )
  }

  return (
    <Card>
      <img src={url} alt="img" className="img" />
      <div className="cardBody">
        <div className="name">{productName}</div>
        <div className="rate">
          <span className="rating">
            <Rate rating={rating} />
          </span>
          <span>({purchased})</span>
        </div>
        <div className="price">
          <span>₦</span>
          <span>{price}</span>
        </div>
        <button
          className="addCart"
          onClick={() => handleAddToCart(id, price, productName, url)}
        >
          Add To Cart
        </button>
      </div>

      <div className="preview">
        <div
          className="view"
          onClick={() => navigate(`/shop/item/${slug}`)}
        >
          <AiFillEye />
        </div>
        <div
          className={isFavorite ? "isFavorite" : "favorite"}
          onClick={() => handleAddFavorite(id, url, price, productName)}>
          <MdFavorite />
        </div>
      </div>
    </Card>
  );
};

export default ChairCard;
