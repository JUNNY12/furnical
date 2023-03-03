import React from "react";
import { useState, useEffect } from "react";
import { useGetProductsQuery } from "../../services/product";
import ListProduct from "./ListProduct";
import Products from "./Products";
import { CiBoxList } from "react-icons/ci";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import useWidth from "../../hooks/useWidth";
import Sort from "./Sort";
import styled from "styled-components";

const ProductDisplay = () => {
  const width = useWidth();
  const [displayType, setDisplayType] = useState("grid");
  const { isLoading, isSuccess, isError, data } = useGetProductsQuery();
  const [sortOption, setSortOption] = useState("name");

  //toggle display type
  const toggleDisplayType = () => {
    setDisplayType(displayType === "grid" ? "list" : "grid");
  };

  //declaring isGrid
  const isGrid = width < 990 || displayType === "grid";

  //handling sort input
  const handleSort = (e) => {
    setSortOption(e.target.value);
  };

  // sorting logic
  let sortedData = data?.data;

  switch (sortOption) {
    case "name":
      if (isSuccess) {
        sortedData = [...sortedData].sort((a, b) =>
          a.attributes.productName.localeCompare(b.attributes.productName)
        );
      }
      break;
    case "priceLowToHigh":
      if (isSuccess) {
        sortedData = [...sortedData].sort(
          (a, b) => a.attributes.price - b.attributes.price
        );
      }
      break;
    case "priceHighToLow":
      if (isSuccess) {
        sortedData = [...sortedData].sort(
          (a, b) => b.attributes.price - a.attributes.price
        );
      }
      break;
    case "rating":
      if (isSuccess) {
        sortedData = [...sortedData].sort(
          (a, b) => b.attributes.rating - a.attributes.rating
        );
      }
      break;
    case "purchased":
      if (isSuccess) {
        sortedData = [...sortedData].sort(
          (a, b) => b.attributes.purchased - a.attributes.purchased
        );
      }
      break;
    default:
      break;
  }

  return (
    <>
      <Div>
        <Button
          onClick={toggleDisplayType}
          disabled={width < 990 ? true : false}
        >
          {displayType === "grid" ? <CiBoxList /> : <BsFillGrid3X3GapFill />}
        </Button>

        <Sort handleSort={handleSort} />
      </Div>
      {isGrid ? (
        <Products
          sortedData={sortedData}
          isSuccess={isSuccess}
          isLoading={isLoading}
        />
      ) : (
        <ListProduct
          sortedData={sortedData}
          isSuccess={isSuccess}
          isLoading={isLoading}
        />
      )}
    </>
  );
};

export default ProductDisplay;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
`;
const Button = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.padding.sm};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  cursor: pointer;
`;
