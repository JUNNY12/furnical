import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Rate, SharedLayout } from "../../component";
import { img } from "../../assets";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { devices } from "../../config/mediaquery";
import { useGetProductsQuery } from "../../services/product";
import { CircleLoader } from "react-spinners";
import { addToCart, decreaseCart } from "../../state/slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Product = () => {
  const { slug } = useParams();
  const { data } = useGetProductsQuery();

  const products = data?.data?.find((product) => {
    return product.attributes.slug === slug;
  });

  if (products) {
    var {
      attributes: {
        id,
        productName,
        rating,
        purchased,
        price,
        description,
        image: {
          data: {
            attributes: { url },
          },
        },
      },
    } = products;
  }

  //increase cart quantity
  const dispatch = useDispatch();
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

  //deacrease cart quantity
  const handleDecreaseCart = (id, url, price, productName) => {
    dispatch(
      decreaseCart({
        id,
        url,
        price,
        productName,
      })
    );
  };

  const { cartItems } = useSelector((state) => state.cart);

  // filter cart items by id to get the quantity
  function filterId(id) {
    return cartItems.filter((item) => item.id === id);
  }

  return (
    <SharedLayout>
      <Container>
        {products ? (
          <div className="flexProd">
            <div className="singleImg">
              <img src={url} alt={id} />
            </div>

            <div>
              <h2>{productName}</h2>
              <div className="rating">
                <Rate rating={rating} />
              </div>

              <div className="price">
                <span>#</span>
                <span>{price}</span>
              </div>

              <div className="status">In stock</div>

              <div className="quantity">
                <span
                  onClick={() => handleAddToCart(id, url, price, productName)}
                  className="increase"
                >
                  <AiOutlinePlus />
                </span>
                <span className="qty">
                  {filterId(id).length > 0 ? filterId(id)[0].cartQuantity : 0}
                </span>
                <span
                  onClick={() =>
                    handleDecreaseCart(id, url, price, productName)
                  }
                  className="decrease"
                >
                  <AiOutlineMinus />
                </span>
              </div>
              <div className="btnWrap">
                <button className="buy">Buy now</button>
              </div>

              <div className="desc">{description}</div>
              {/* <div className="category">
                <span> Category: </span>
                <span> Chair </span>
              </div> */}
              <div>
              <Link to='/shop'>
                 <button className="back">Back To Shop</button>
              </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="flexProd">
            <CircleLoader color="#f50057" size={100} />
          </div>
        )}
      </Container>
    </SharedLayout>
  );
};

const Container = styled.div`
  padding: 2rem 2rem 4rem 2rem;
  margin: 1rem;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
  background: ${({ theme }) => theme.colors.white};

  .buy{
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    padding: 0.5rem;
    border: none;
    width: 9rem;
    border-radius: 0.2rem;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease-in-out;
    &:hover{
      background: ${({ theme }) => theme.colors.white};
      color: black;
      border: 1.5px solid ${({ theme }) => theme.colors.primary};
      font-weight: bold;
      transition: all 0.3s ease-in-out;
    }
  }

  .back{
    margin-top: 1.5rem;
    background: ${({ theme }) => theme.colors.white};
    color: black;
    border: 1.5px solid ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    padding: 0.5rem;
    width: 9rem;
    border-radius: 0.2rem;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    
    &:hover{
      background: ${({ theme }) => theme.colors.primary};
      color: white;
      transition: all 0.3s ease-in-out;
    }
  }

  h2{
    font-size: 1rem;
  }
  .category {
    margin-bottom: 1rem;
    font-weight: 500;
  }
  .rating {
    display: flex;
    margin-bottom: 1rem;
  }

  .price {
    margin-bottom: 1rem;
    font-weight: 500;
  }

  .status {
    margin-bottom: 1rem;
  }
  .quantity {
    margin-bottom: 1rem;
    font-weight: 500;
  }

 
  .btnWrap {
    margin-bottom: 1rem;
    display: inline-flex;
  }

  .desc {
    max-width: 400px;
    margin-bottom: 1rem;
  }

  .singleImg {
    height: 400px;
    width: 50%;
    object-fit: cover;
    @media all and (max-width: 768px) {
      width: 400px;
    }
    @media all and (max-width: 520px) {
      width: 300px;
      height: 300px;
    }
    @media all and (max-width: 425px) {
      width: 250px;
      height: 250px;
    }
  }
  .singleImg > img {
    width: 100%;
    height: 100%;
  }

  .flexProd {
    display: flex;
    column-gap: 2rem;
    justify-content: center;
    @media all and (max-width: 960px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  .qty {
    border: 2px solid black;
    height: 1rem;
    width: 1rem;
    padding: 0.5rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 1rem 0 1rem;
    @media all and ${devices.tablet} {
      height: 0.5rem;
      width: 0.5rem;
      margin: 0 0.5rem 0 0.5rem;
      padding: 0.35rem;
    }
  }

  .increase,
  .decrease {
    font-size: 1.2rem;
    cursor: pointer;
    @media all and ${devices.tablet} {
      font-size: 1rem;
    }
  }
`;

export default Product;
