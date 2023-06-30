import React from "react";
import styled, { keyframes } from "styled-components";

// Animation keyframes for the pulse effect
const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

// Placeholder Card container
const CardContainer = styled.div`
  border-radius: 4px;
  padding: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 250px;
  background-color: #e5e5e5;
  animation: ${pulseAnimation} 1.8s infinite;
`;

// Placeholder Card content
const CardContent = styled.div`
  width: 100%;
  height: 100%;
`;

// Placeholder Card Title
const CardTitle = styled.div`
  width: 100%;
  height: 200px;
  background-color: #f5f5f5;
`;

// Placeholder Card Description
const CardDescription = styled.div`
  width: 100%;
  height: 40px;
  background-color: #f5f5f5;
  margin-top: 8px;
`;

const LoadingCard = () => {
  return (
    <CardContainer>
      <CardContent>
        <CardTitle />
        <CardDescription />
      </CardContent>
    </CardContainer>
  );
};

export default LoadingCard;
