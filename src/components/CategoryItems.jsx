import React from "react";
import styled from "styled-components";
import {mobile} from "../responsive";
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  ${mobile({height:"20vh"})}
`;
const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: #2c2201;
  /* margin-bottom: 20px; */
`;
const Button = styled.button`
  border: none;
  outline: none;
  padding: 10px;
  background-color: darkred;
  color: white;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: black;
  }
`;
const CategoryItems = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Shop Now</Button>
      </Info>
    </Container>
  );
};

export default CategoryItems;
