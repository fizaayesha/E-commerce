import styled from "styled-components";
import ProductList from "./pages/ProductList";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Pay from "./Pay";

const App = () => {
  return (
    <AppStyled>
      <Pay />
      {/* <Login/> */}
      {/* <Register /> */}
      {/* <Product /> */}
      {/* <NavBar /> */}
    </AppStyled>
  );
};
const AppStyled = styled.div`
  font-family: calibri;
`;
export default App;
