import React, { useState } from "react";
import styled from "styled-components";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { slideBarItems } from "../data";
const Container = styled.div`
  width: 100%;
  height: 85.6vh;
  display: flex;
  /* background-color: #ff2a00; */
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease-in-out;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  gap: 3rem;
  background-color: #${(props) => props.bg};
`;
const ImageContainer = styled.div`
  margin-top: 2rem;
  height: 100%;
`;
const Image = styled.img`
  height: 80%;
  width: 30vw;
`;
const InfoContainer = styled.div`
  color: black;
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 3.5rem;
  /* color:black; */
`;
const Desc = styled.p`
  margin: 20px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1px;
`;
const Button = styled.button`
  background-color: grey;
  color: black;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 15px;
  font-weight: bold;
  border: 2px solid black;
  &:hover {
    color: white;
    background-color: black;
  }
`;
const SlideBar = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : slideBarItems.length - 1);
    } else {
      setSlideIndex(slideIndex < slideBarItems.length - 1 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {slideBarItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>Shop Now</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightIcon />
      </Arrow>
    </Container>
  );
};

export default SlideBar;
