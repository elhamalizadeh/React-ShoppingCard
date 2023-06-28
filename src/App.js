import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Header from "./components/Header";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/products" element={<Products />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
