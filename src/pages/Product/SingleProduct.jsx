import React from "react";
import { Link } from "react-router-dom";

function SingleProduct(props) {
  const { product } = props;
  return (
    <>
      <div className="card relative w-72  shadow-lg mb-12">
        <div className="card-img">
          <img src={product.imageCover} alt="product-img" className="rounded-lg"/>
        </div>
        <div className="card-body absolute -bottom-5 left-4 bg-white shadow-lg rounded-xl ">
          <Link to={`/product/${product._id}}`} className="title">{product.title}</Link>
          <div className="tocart flex flex-row items-center ">
            <button className="btn addToCart ">Add to cart</button>
            <p className="text-end font-bold">{product.price}</p>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
