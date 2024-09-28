import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart, decreaseCart } from "../../../store/slice/CartSlice";
import { Link } from "react-router-dom";
import "./addcart.css";
function Addtocard() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch() 

  const Valueinc = (productItem)=>{
    dispatch(addtoCart(productItem))

  }
  const Valuedec =(product)=>{
    dispatch(decreaseCart(product))
  }
  return (
    <>
      <div className="container-fluid cart">
      <div className="row">
        <div className="col-md-12">
        <Link to="/" className="startshop">
          <h1>start shopping</h1>
        </Link>
        {cart.cartItems.length === 0 ? (
          <div className="addtocart_page">
            <h3>your cart is empty</h3>
            <Link to="/">
              <button className="shopping_btn">&larr; start shopping </button>
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-title">
              <p className="product">product</p>
              <p className="price">price</p>
              <p className="qty">quantity</p>
              <p className="total">total</p>
            </div>

            <div className="cart-products">
              {cart.cartItems.map((cartItems) => (
                <div className="product-detail" key={cartItems.id}>
                  <div className="product_img">
                    <img src={cartItems.image} alt={cartItems.name} />

                    <div className="product_name">
                      <p className="product_title">{cartItems.title}</p>
                    </div>
                    <div className="cart_price">
                      <p>${cartItems.price}</p>
                    </div>
                    <div className="qty_mng">
                    <div className="minus_btn">
                    <button onClick={()=>{Valuedec(cartItems)}} >-</button>
                    </div>
                    <div className="cart_qty"><h6>{cartItems.cartQty}</h6></div>
                    <div className="plus_btn">
                    <button onClick={()=>{Valueinc(cartItems)}} >+</button>
                    </div>
                    </div>
                    <div className="cart_total">
                      <h6>${cartItems.cartQty*cartItems.price}</h6>
                    </div>
                  </div>
                </div>
              ))}
              <div>
              <Link to="/">
              <button className="shopping_btn2">
                &larr; continue shopping
              </button>
            </Link>
              </div>
            </div>
            </>
        )}
        
      </div>
        </div>
      </div>
        
    </>
  );
}

export default Addtocard;
