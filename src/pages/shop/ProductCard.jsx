import { Card } from "../../component";
import { MdFavorite } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { Rate } from "../../component";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../state/slice/cartSlice";
import { addFavorite } from "../../state/slice/favoriteSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { formatPrice } from "../../constants/formatPrice";

const ProductCard = ({
  slug,
  id,
  productName,
  rating,
  purchased,
  price,
  url,
  inStock,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);

  const { favoriteItems } = useSelector((state) => state.favorite);

  // check if the current product is already in favorites
  useEffect(() => {
    const existingItem = favoriteItems.find((item) => item.id === id);

    setIsFavorite(existingItem ? true : false);
  }, [favoriteItems]);

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

  const productItem = useSelector((state) => state.cart.cartItems.find((item) => item.id === id));
  const buttonText = productItem ? "In cart" : "Add To Cart";
  return (
    <Card>
      <img src={url} alt={id} className="img" />
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
          className={isFavorite ? "isFavorite" : "favorite"}
          onClick={() => handleAddfavorite(id, url, price, productName)}
        >
          <MdFavorite />
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
