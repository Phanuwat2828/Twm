import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const LoadingExample = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [dots, setDots] = useState(""); // สถานะเก็บจุด
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      const dotInterval = setInterval(() => {
        setDots((prevDots) => {
          if (prevDots.length < 3) {
            return prevDots + "."; 
          }
          return ""; 
        });
      }, 1000);
  
      return () => {
        clearTimeout(timer);
        clearInterval(dotInterval);
      };
    }, []);

  if (isLoading) {
    return (
      <LoaderContainer>
        <Spinner />
        <Text>Loading .{dots}</Text>
      </LoaderContainer>
    );
  }

  return (
    <>
    </>
  );
};

// Animation สำหรับ Spinner
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid #ccc;
  border-top: 5px solid #E0324B;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const Text = styled.p`
  margin-top: 15px;
  font-size: 16px;
  color: #555;
`;

export default LoadingExample;
