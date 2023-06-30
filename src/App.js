import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Header from "./components/Header";
import Products from "./pages/Products";
import store from './redux/store';
import {Provider} from 'react-redux';
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/products" element={<Products />}/>
      <Route path="/cart" element={<ShoppingCart />}/>
    </Routes>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
