import axios, {} from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactImageMagnify from 'react-image-magnify';
import { addtoCart } from "../../../store/slice/CartSlice.jsx"
import { useDispatch} from 'react-redux'
import toast ,{ Toaster } from 'react-hot-toast';

const Productdetail = () => {
  const [state, setState] = useState([]);
  const dispatch = useDispatch()
  let { id } = useParams();
  const getSingleProduct = () => {
    axios.get("https://fakestoreapi.com/products/" + id).then((res) => {
      console.log(res);
      setState(res.data);
    });
  };
  useEffect(() => {
    getSingleProduct();
  }, []);
  
  const addtoCartData =(item)=>{
    dispatch(addtoCart(item))
    toast.success("added to cart successfully ")

  }
  return (
    <>
    <Toaster/>
     <div className="card mb-3 single_producte_mng">
  <div className="row g-0">
    <div className="col-md-4">
    
    <ReactImageMagnify { ...{
        smallImage:{
          alt:'Products Details',
          src: state.image,
          width: 350,
          height:400

        },
        largeImage:{
          src: state.image,
          width: 800,
          height:1280

        }
      }} />
      
    </div>
    <div className="col-md-8" style={{marginTop:"6%"}}>
      <div className="card-body">
        <h3 className="card-title">{state.title}</h3>
        <h5>{state.price}$</h5>
        <p className="card-text">
        {state.description}
        </p>
        <p className="card-text">
          <small className="text-body-secondary">Last updated 3 mins ago</small>
        </p>
        <div>
        <input type="Submit" value="Add to Cart"  className="btn btn-danger" onClick={()=> {addtoCartData(state)}} />
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Productdetail;
