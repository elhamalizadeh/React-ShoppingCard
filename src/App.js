import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Header from "./components/Header";
import Products from "./pages/Products";
import store from './redux/store';
import {Provider} from 'react-redux';
import ShoppingCart from "./pages/ShoppingCart";
import About from "./pages/About";
import AdminPage from "./adminPannel/Admin";
import Posts from "./adminPannel/pages/posts";
import Media from "./adminPannel/pages/media";
import GroupsPage from "./adminPannel/pages/groups";
import SettingPage from "./adminPannel/pages/setting";
import Market from "./adminPannel/pages/market";
import Friends from "./adminPannel/pages/friends";

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
    {/* <Header /> */}
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/products" element={<Products />}/>
      <Route path="/cart" element={<ShoppingCart />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/admin" element={<AdminPage />}/>
      <Route path="/admin/posts" element={<Posts />}/>
      <Route path="/admin/media" element={<Media />}/>
      <Route path="/admin/groups" element={<GroupsPage />}/>
      <Route path="/admin/setting" element={<SettingPage />}/>
      <Route path="/admin/market" element={<Market />}/>
      <Route path="/admin/friends" element={<Friends />}/>
    </Routes>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
