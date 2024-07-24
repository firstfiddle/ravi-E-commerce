/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

function CatPro({product}) {
    
  return (
   <>
    <div className="col-lg-4 col-md-6 mb-3">
    <div className="card ">
          <Link to={`/productDetail/${product._id}`}>
          <img className="w-100 efz"style={{width:'300px' , height:'300px'}} src={product.images.url} alt=""/>
          </Link>
          <div className="card-body bg-light">
          <Link to={`/productDetail/${product._id}`}>
            <h5 className="text-center aa">{product.name}</h5>
            </Link>
            <h5 className="text-center">{product.price} <span className="text-danger"><del>Rs300</del></span></h5>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-warning me-1"></small>
              <small className="fa fa-star text-warning me-1"></small>
              <small className="fa fa-star text-warning me-1"></small>
              <small className="fa fa-star text-warning me-1"></small>
              <small className="fa fa-star text-warning me-1"></small>
              <small>(99)</small>
            </div>
          </div>
        </div>
                </div>
   </>
  )
}

export default CatPro