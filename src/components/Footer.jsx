import React from "react";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import payment1 from "../Assets/atm-card.png";
import payment2 from "../Assets/debit-card.png";
import payment3 from "../Assets/money.png";
import payment4 from "../Assets/visa.png";
const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const SocialIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 5px;
  font-size: 13px;
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const Logo = styled.div``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 8%;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Ayesha.</Logo>
        <Desc>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
          sunt adipisci eveniet provident fugit consequatur vero, exercitationem
          cum dolore omnis!
        </Desc>
        <SocialContainer>
          <SocialIcon color="286DB1">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="F102BE">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="DA0021">
            <PinterestIcon />
          </SocialIcon>
          <SocialIcon color="1C99E6">
            <TwitterIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomIcon htmlColor="blue" /> Lorem ipsum, dolor sit amet.
        </ContactItem>
        <ContactItem>
          <PhoneIcon htmlColor="green" /> +91-2345678901
        </ContactItem>
        <ContactItem>
          <EmailIcon htmlColor="red" /> abc123@gmail.com
        </ContactItem>
        <Payment src={payment1} />
        <Payment src={payment2} />
        <Payment src={payment3} />
        <Payment src={payment4} />
      </Right>
    </Container>
  );
};

export default Footer;
