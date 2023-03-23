import React from "react";
import { Card } from "../../../component";
import { MdFavorite } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { Rate } from "../../../component";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../state/slice/cartSlice";
import { addFavorite } from "../../../state/slice/favoriteSlice";
import { useState, useEffect, useMemo } from "react";
import { formatPrice } from "../../../constants/formatPrice";

const ChairCard = ({ id, slug, url, productName, price, inStock, rating, purchased }) => {

  const [isFavorite, setIsFavorite] = useState(false);
  const { favoriteItems } = useSelector((state) => state.favorite)
  const productItem = useSelector((state) => state.cart.cartItems.find((item) => item.id === id));


  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
    const existingItem = favoriteItems.find((item) => item.id === id);
    setIsFavorite(existingItem ? true : false);
  }, [favoriteItems, id]);

  const handleAddToCart = useMemo(() => {
    return (id, price, productName, url) => {
      dispatch(
        addToCart({
          id,
          price,
          productName,
          url,
        })
      )
    }
  }, [dispatch])

  const handleAddFavorite = useMemo(() => {
    return (id, price, productName, url) => {
      dispatch(
        addFavorite({
          id,
          price,
          productName,
          url,
        })
      )
      setIsFavorite(!isFavorite)
    }
  }, [dispatch, isFavorite])



  const buttonText = productItem ? "In cart" : "Add To Cart";

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
          <span>{formatPrice(price)}</span>
        </div>
        <button
          disabled={!inStock}
          className={inStock ? "addCart" : "notAllowed"}
          onClick={() => handleAddToCart(id, price, productName, url)}
        >
          {inStock ? `${buttonText}` : <span className="outOfStock">Out of Stock</span>}
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


function areEqual(prevProps, nextProps) {
  return (
    prevProps.id === nextProps.id && prevProps.inStock === nextProps.inStock
  )
}

const memoChairCard = React.memo(ChairCard, areEqual);

export default memoChairCard;
