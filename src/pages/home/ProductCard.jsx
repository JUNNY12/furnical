import { Card } from "../../component";
import { MdFavorite } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { Rate } from "../../component";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../state/slice/cartSlice";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite } from "../../state/slice/favoriteSlice";

const ProductCard = ({
  slug,
  id,
  productName,
  rating,
  purchased,
  price,
  url,
}) => {
  console.log(productName);

  const { favoriteItems } = useSelector((state) => state.favorite);

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const existingItem = favoriteItems.find((item) => item.id === id);
    setIsFavorite(existingItem ? true : false);
  });

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
          <span>₦</span>
          <span>{price}</span>
        </div>
        <button
          className="addCart"
          onClick={() => handleAddToCart(id, url, price, productName)}
        >
          Add To Cart
        </button>
      </div>

      <div className="preview">
        <div className="view" onClick={() => navigate(`/shop/item/${slug}`)}>
          <AiFillEye />
        </div>
        <div
        onClick={() => handleAddfavorite(id, url, price, productName)}
        className={isFavorite ? "isFavorite" : "favorite"}>
          <MdFavorite />
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
