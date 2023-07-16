import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/products/action";
import { AddToCart } from "../redux/cart/action";
import Header from "../components/Header";
import { Box, List, ListItemButton, ListItemIcon, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ListItemText } from "@material-ui/core";

const Products = () => {
  const { products } = useSelector((state) => state.product);
  const { cart } = useSelector((state) => state.ShoppingCart);
  const dispatch = useDispatch();
  function handleCart(product) {
        dispatch(AddToCart(product))
  }
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  //console.log(cart);

  return (
    <>
    <Header />
    <Box>
    <Stack direction="row" spacing={2}>
    <Box flex={2} p={2} sx={{ display:{ xs:"none" , sm:"block"} }}>
    <Box position="fixed">
        <List>
          <NavLink to="/admin" className="nav-link">
          <ListItemButton>
            <ListItemIcon>
              Home
            </ListItemIcon>
            <ListItemText primary="Homepege" />
          </ListItemButton>
          </NavLink>

          <NavLink to="/admin/posts" className="nav-link">
          <ListItemButton>
            <ListItemIcon>
              Article
            </ListItemIcon>
            <ListItemText primary="Posts" />
          </ListItemButton>
          </NavLink>

          <NavLink to="/admin/media" className="nav-link">
          <ListItemButton>
            <ListItemIcon>
              media
            </ListItemIcon>
            <ListItemText primary="Media" />
          </ListItemButton>
          </NavLink>

          <NavLink to="/admin/groups" className="nav-link">
          <ListItemButton>
            <ListItemIcon>
              group
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
          </NavLink>

          <NavLink to="/admin/market" className="nav-link">
          <ListItemButton>
            <ListItemIcon>
              store
            </ListItemIcon>
            <ListItemText primary="Market Place" />
          </ListItemButton>
          </NavLink>

          <NavLink to="/admin/friends" className="nav-link">
          <ListItemButton>
            <ListItemIcon>
              diversity
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
          </NavLink>

          <NavLink to="/admin/setting" className="nav-link">
          <ListItemButton>
            <ListItemIcon>
              setting
            </ListItemIcon>
            <ListItemText primary="Setting" />
          </ListItemButton>
          </NavLink>

          <ListItemButton>
            <ListItemIcon>
              light
            </ListItemIcon>
          </ListItemButton>
        </List>
        </Box>
    </Box>
    {/* ----------------------------------- */}
    <Box flex={10} p={2} >
    <div className="container"> 
        <div className="row mt-5 g-3">
            {products && products.map(product => (
                <div className="col-md-3" key={product.id} >
                    <div className="card">
                        <img className="card-img-top" src={product.image} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">
                                {product.description}
                            </p>
                        </div>
                        <div className="card-footer d-flex justify-content-between">
                            <button onClick={()=>handleCart(product)}className="btn btn-sm btn-outline-success">
                                Add to cart
                            </button>
                            <span>{product.price}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    </Box>
    </Stack>
    </Box>
    </>

)
};

export default Products;
