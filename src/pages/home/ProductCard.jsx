import { Card } from "../../component";
import { MdFavorite } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { Rate } from "../../component";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../state/slice/cartSlice";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite } from "../../state/slice/favoriteSlice";
import { formatPrice } from "../../constants/formatPrice";
import {memo, useMemo} from 'react'



const ProductCard = ({
  slug,
  id,
  productName,
  rating,
  purchased,
  price,
  url,
  inStock
}) => {

const productItem = useSelector((state) => state.cart.cartItems.find((item) => item.id === id));
const buttonText = productItem ? "In cart" : "Add To Cart";

  const { favoriteItems } = useSelector((state) => state.favorite);

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const existingItem = favoriteItems.find((item) => item.id === id);
    setIsFavorite(existingItem ? true : false);
  },[favoriteItems, id]);

  const dispatch = useDispatch();

  const handleAddfavorite = useMemo(() => {
    return (id, url, price, productName, inStock) => {
      dispatch(
        addFavorite({
          id,
          url,
          price,
          productName,
          inStock
        })
      );
      setIsFavorite(!isFavorite);
    };
  },[dispatch, isFavorite]);
  
  const handleAddToCart = useMemo(() => {
    return (id, url, price, productName) => {
      dispatch(
        addToCart({
          id,
          url,
          price,
          productName,
        })
      );
    };
  }, [dispatch]);

  const navigate = useNavigate();
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
          onClick={() => handleAddToCart(id, url, price, productName)}
        >
          {inStock? `${buttonText}` : <span className="outOfStock">Out of Stock</span>}
        </button>
      </div>

      <div className="preview">
        <div className="view" onClick={() => navigate(`/shop/item/${slug}`)}>
          <AiFillEye />
        </div>
        <div
        onClick={() => handleAddfavorite(id, url, price, productName, inStock)}
        className={isFavorite ? "isFavorite" : "favorite"}>
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

const memoizedProductCard = memo(ProductCard, areEqual)

export default memoizedProductCard;
