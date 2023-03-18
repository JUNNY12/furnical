import styled from "styled-components";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { Input } from "./Input";
import { devices } from "../config/mediaquery";
import { ImCancelCircle } from "react-icons/im";
import Sidebar from "./Sidebar";
import { useState, useEffect, useRef } from "react";
import { useGetProductsQuery } from "../services/product";
import { useNavigate , useLocation} from "react-router-dom";
import { Link } from "react-router-dom";

const MobileNav = ({ showSideBar, setShowSideBar }) => {
  const [search, setSearch] = useState("");
  const { data, error, isLoading, isSuccess } = useGetProductsQuery();
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const {pathname} = useLocation()

  useEffect(() => {
    setShowSideBar(false)
  },[pathname])

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const searchProduct = data?.data?.filter((product) => {
    const { productName } = product.attributes;
    return productName.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      {showSideBar && <Sidebar />}
      <Nav>
        <Link to={`/`}>
          <div className="furnical">
            <span>F</span>
          </div>
        </Link>
        {!showSideBar && (
          <div>
            <Search
              name="search"
              value={search}
              onChange={handleSearch}
              ref={inputRef}
              placeholder="I'm Searching for ..."
              type="search"
            />
          </div>
        )}

        {!showSideBar && (
          <div className="menuIcon" onClick={() => setShowSideBar(true)}>
            <AiOutlineMenu />
          </div>
        )}
        {showSideBar && (
          <div className="menuIcon" onClick={() => setShowSideBar(false)}>
            <ImCancelCircle />
          </div>
        )}
      </Nav>
      {search && (
        <SearchContainer>
          {isLoading && <p className="loading">Loading</p>}
          {isSuccess && searchProduct.length === 0 && (
            <p className="noResult">No results found</p>
          )}
          {isSuccess &&
            searchProduct.map((product) => {
              const { slug } = product.attributes;
              const { productName, price } = product.attributes;
              const { url } = product.attributes.image.data.attributes;

              return (
                <div
                  onClick={() => navigate(`/shop/item/${slug}`)}
                  className="searchItem"
                >
                  <div className="col-1">
                    <p>{productName}</p>
                  </div>
                  <div className="col-2">
                    <img className="img" src={url} alt={productName} />
                  </div>
                </div>
              );
            })}
        </SearchContainer>
      )}
    </>
  );
};

const Nav = styled.nav`
.furnical{
  font-family: 'Lobster', cursive;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px;
  border-radius: 5px;
  height: 40px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  cursor: pointer;
  position:absolute;
  top: 0;
  left: -0.4em;
}

.furnical span{
  display: inline-block;
  background-color: #ffffff;
  color: #000000;
  padding: 5px;
  height: 20px;
  width: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
}


  display: none;
  justify-content: center;
  align-items: center;
  height: 40px;
  position: relative;
  @media all and ${devices.tablet} {
    display: flex;
  }

  .dot {
    height: 0.5em;
    position: absolute;
    top: 0em;
    right: -0.5em;
    width: 0.5em;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
  }
  .menuIcon {
    font-size: 1.5rem;
    cursor: pointer;
    position: absolute;
    right: -1em;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Search = styled(Input)`
  width: 250px;
  height: 30px;
  text-indent: 10px;
  @media all and ${devices.mobileL} {
    width: 200px;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 15em;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.padding.md};
  border-radius: 4px;
  width: 250px;
  height: 250px;
  overflow: auto;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

  .noResult,
  .loading {
    text-align: center;
    font-size: 1.5rem;
  }
  .searchItem {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    cursor: pointer;
    align-items: center;
  }

  .searchItem img {
    width: 40px;
    height: 40px;
  }

  .col-1 {
    width: 70%;
  }

  .col-2 {
    width: 30%;
  }
`;

export default MobileNav;
