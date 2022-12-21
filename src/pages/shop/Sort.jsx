import React from 'react'
import styled from "styled-components"

const Sort = () => {
  return (
    <div>
        <select>
            <option>sort by latest</option>
            <option>sort by average rating</option>
            <option>sort price: low to high</option>
            <option>sort price: high to low</option>
            <option>sort by popularity</option>
        </select>
    </div>
  )
}

export default Sort