import React from "react";
import styled from "styled-components";
import { Input } from "./Input";
import { useGetProductsQuery } from "../services/product";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchSection = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const { data, error, isLoading, isSuccess } = useGetProductsQuery();

  const inputRef = useRef(null);
  
    useEffect(() => {
      inputRef.current.focus();
    }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const searchProduct = data?.data?.filter((product) => {
    const { productName } = product.attributes;
    return productName.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <Section>
      <div className="flex">
        <div>
          <Search
            ref={inputRef}
            type="search"
            placeholder="Enter your search"
            name="search"
            value={search}
            onChange={handleSearch}
          />
        </div>
      </div>

      {search && (
        <div className="searchContainer">
          {isLoading && <p className="loading">Loading</p>}
          {isSuccess && searchProduct.length === 0 && (
            <p className="noResult">No results found</p>
          )}
          {isSuccess &&
            searchProduct.map((product) => {

              const {slug} = product.attributes
              const { productName, price } = product.attributes;
              const { url } = product.attributes.image.data.attributes;

              return (
                <div 
                  onClick={() => navigate(`/shop/item/${slug}`)}
                  className="searchItem">
                  <div className="col-1">
                    <p>{productName}</p>
                  </div>
                  <div className="col-2">
                    <img className="img" src={url} alt={productName} />
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </Section>
  );
};

const Section = styled.section`
  margin: ${({ theme }) => theme.margin.lg};
  padding: ${({ theme }) => theme.padding.lg};
  z-index: 10;

  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .searchContainer {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 25em;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    background-color: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => theme.padding.md};
    border-radius: 4px;
    width: 400px;
    height: 250px;
    overflow: auto;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  }

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

  select {
    width: 200px;
    height: 40px;
    outline: none;
  }
`;

const Search = styled(Input)`
  text-indent: 10px;
  width: 400px;
  height: 40px;
`;

export default SearchSection;
