import styled from "styled-components";
import ProductList from "./pages/ProductList";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <AppStyled>
      <Cart/>
      {/* <Register /> */}
      {/* <Product /> */}
    </AppStyled>
  );
};
const AppStyled = styled.div`
  font-family: calibri;
`;
export default App;
