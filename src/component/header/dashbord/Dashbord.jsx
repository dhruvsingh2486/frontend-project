import React, { useEffect, useState } from "react";
import Slider from "./Slider.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { addtoCart } from "../../../store/slice/CartSlice.jsx";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const Dashbord = () => {
  const [state, setState] = useState([]);
  const [cate, setCate] = useState([]);
  const _useNavigate = useNavigate();
  // const useSearchparams = useSearchParams();
  // const [Searchparams] = useSearchparams();
  // const query = Searchparams.get('cate_name')
  const dispatch = useDispatch();
  const getAllCategory = () => {
    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      setCate(res.data);
    });
  };
  const getAllProduct = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res);
      setState(res.data);
    });
  };
  useEffect(() => {
    getAllCategory();
    getAllProduct();
  }, []);
  const addtoCartData = (item) => {
    dispatch(addtoCart(item));
    toast.success("added to cart successfully ");
  };
  const viewProductData = (id) => {
    // alert(id)
    _useNavigate(`/Productdetail/${id}`);
  };

  const getAllCate = (categoryName) => {
    axios
      .get("https://fakestoreapi.com/products/category/" + categoryName)
      .then((res) => {
        setState(res.data);
      });
  };
  return (
    <>
      <Toaster />
      <Slider />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <ul class="list-group " style={{ paddingTop: "12%" }}>
              <li class="list-group-item active" aria-current="true">
                Select Categoery
              </li>
              {cate.map((item) => (
                <li class="list-group-item">
                  <a
                    onClick={() => {
                      getAllCate(item);
                    }}
                    href="javascript:void(0)"
                    style={{ textDecoration: "none" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-10">
            <div className="container" style={{ marginTop: "2%" }}>
              <div className="row ">
                {state.map((item, index) => (
                  <div className="col-md-3" style={{ marginBottom: "1.5%" }}>
                    <div
                      className="card"
                      style={{ width: "16rem", height: "460px" }}
                    >
                      <img
                        src={item.image}
                        className="card-img-top  product_img_mng"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          {item.title.substring(0, 20)}
                        </h5>
                        <p className="card-text">
                          {item.description.substring(0, 60)}
                        </p>
                      </div>

                      <div className="card-body">
                        <input
                          type="Submit"
                          value="Add to Cart"
                          className="btn btn-success"
                          onClick={() => {
                            addtoCartData(item);
                          }}
                        />

                        <span style={{ marginLeft: "20%" }}>
                          <button
                            className="btn btn-primary"
                            onClick={() => {
                              viewProductData(item.id);
                            }}
                          >
                            View
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashbord;
