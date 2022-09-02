import styled from "styled-components";
import ProductList from "./pages/ProductList";
// import Home from "./pages/Home";
import Test from "./pages/Test";
const App = () => {
  return (
    <AppStyled>

      <ProductList />
      {/* <Home/> */}
      <Test/>
    </AppStyled>
  );
};
const AppStyled = styled.div`
  font-family: calibri;
`;
export default App;