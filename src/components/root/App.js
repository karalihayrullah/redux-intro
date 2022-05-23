import { Container } from "reactstrap"
import Navi from '../navi/Navi';
import Dashboard from './Dashboard';
import { Route, Routes } from "react-router-dom"
import CartDetails from "../cart/CartDetails";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";
function App() {
  return (
    <Container>
      <Navi />
      <Routes>
        <Route path="/" exact element={<Dashboard />} ></Route>
        <Route path="/product" exact element={<Dashboard />} ></Route>
        <Route path="/saveproduct/:productId" element={<AddOrUpdateProduct />} ></Route>
        <Route path="/cartDetails" exact element={<CartDetails />} ></Route>
        <Route element={<NotFound />}></Route>
      </Routes>
    </Container>
  );
}

export default App;
