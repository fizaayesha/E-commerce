import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import NavBar from "../components/NavBar";
import NewsLetter from "../components/NewsLetter";
import Product from "../components/Product";
import Footer from "../components/Footer";
const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Filter = styled.div`
  margin: 20px;
`;
const ProductList = () => {
  return (
    <div>
      anzal
    </div>
      /*
    // <Container>
       <NavBar /> 
      <Announcement />
      
      
      <Title>Dresses</Title>
       <FilterContainer>
        <Filter>Filter1</Filter>
        <Filter>Filter2</Filter>
      </FilterContainer>
      <Product />
      <NewsLetter />
      <Footer/> 
      // </Container>
    */
  );
};
export default ProductList;