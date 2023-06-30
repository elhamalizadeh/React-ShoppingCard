import { useDispatch, useSelector } from "react-redux";
import { Increment, Decrement } from '../redux/cart/action'

const ShoppingCart = () => {
  const { cart } = useSelector((state) => state.ShoppingCart);
  const dispatch = useDispatch();

  const handleIncrement = (productId)=>{
dispatch(Increment(productId))
  }

  const handleDecrement=(productId)=>{
    dispatch(Decrement(productId))
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 pl-3 pt-3">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th style={{ width:'10%'}}>Quantity</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
              </thead>
              <tbody>
              {cart && cart.map(product => (
                  <tr>
                    <td className="align-middle">
                        <div className="row" >
                            <div className="col-lg-2">
                                    <img src={product.image} className="img-fluid"/>
                            </div>
                            <div className="col-lg-10">
                                <h5>{product.name}</h5>
                                <p>{product.description}</p>
                            </div>
                        </div>
                    </td>
                    <td className="align-middle">{product.price}</td>
                    <td className="align-middle">
                        <button onClick={()=>handleIncrement(product.id)}className="btn btn-sm btn-dark me-2">+</button>
                        {product.qty}
                        <button onClick={()=>handleDecrement(product.id)} className="btn btn-sm btn-dark ms-2">-</button></td>
                    <td className="align-middle">{product.price * product.qty}</td>
                    <td className="align-middle"><button className="btn btn-danger" >Delete</button></td>
                  </tr>
                ))}

                <tr>
                    <td className="align-middle"><button className="btn btn-dark">Clear Cart</button></td>
                    <td></td>
                    <td></td>
                    <td className="hidden-xs text-center" style={{ width:'15%' }}><strong>Total : { cart.reduce((total,product) => {
                        return total + product.price * product.qty
                    },0)} </strong></td>
                    <td><button className="btn btn-success">Checkout</button></td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
