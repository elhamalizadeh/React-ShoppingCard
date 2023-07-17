import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/products/action";
import { AddToCart } from "../redux/cart/action";
import Header from "../components/Header";
import { Box, List, ListItemButton, ListItemIcon, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ListItemText } from "@material-ui/core";
import FilterBar from "../components/FilterBar";
//import dayjs from "dayjs";


// const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
// const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
// dayjs.extend(isSameOrBefore);
// dayjs.extend(isSameOrAfter);


const Products = () => {

  const { products } = useSelector((state) => state.product);
  const { cart } = useSelector((state) => state.ShoppingCart);

const [allproducts, setproducts] = useState(products);
//console.log("all is :", allproducts);

  const generateColorDataForDropdown = () => {
    return [...new Set(products.map((item)=>item.color ))]
  };

  const generateBrandDataForDropdown = () => {
    return [...new Set(products.map((item)=>item.brand ))]
  };
  
  const handleFilterName = (name) =>{
    const filteredProducts = products.filter((item)=>{
      if(item.name.toLowerCase().includes(name.toLowerCase())){
        return item;
      }
    })
    setproducts(filteredProducts)
  }


  const handleFilterBrand = (brand) =>{
    const filteredProducts = products.filter((item)=>{
      if(item.brand === brand){
        return item;
      }
    })
    setproducts(filteredProducts)
  }


  const handleFilterColor= (color) =>{
    const filteredProducts = products.filter((item)=>{
      if(item.color === color){
        return item;
      }
    })
    setproducts(filteredProducts)
  }

  const handleFilterFrom= (from) =>{
    const filteredProducts = products.filter((item)=>{
      if(item.from === from){
        return item;
      }
    })
    setproducts(filteredProducts)
  }

  const handleFilterTo= (to) =>{
    const filteredProducts = products.filter((item)=>{
      if(item.to === to){
        return item;
      }
    })
    setproducts(filteredProducts)
  }

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
{/* ----------------------------------------------- */}
<FilterBar colors={generateColorDataForDropdown()} 
brands={ generateBrandDataForDropdown()} 
onFilterName={handleFilterName}
onFilterBrand={handleFilterBrand}
onFilterColor={handleFilterColor}
onFilterFrom={handleFilterFrom}
onFilterTo={handleFilterTo}

/>

    {/* ----------------------------------- */}
    <Box flex={10} p={2} >
    <div className="container"> 
        <div className="row mt-5 g-3">
            {allproducts && allproducts.map(product => (
                <div className="col-md-3" key={product.id} >
                    <div className="card">
                        <img className="card-img-top" src={product.image} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">
                                {product.description}
                            </p>
                            <p className="card-text">color: {product.color}</p>
                            <p className="card-text">date: {product.date}</p>
                            { product.quantity? <p className="card-text">quantity: {product.quantity}</p> : <p className="text-danger">No quantity</p>}
                            
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
