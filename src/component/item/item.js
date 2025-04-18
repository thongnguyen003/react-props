import React from "react";
var One = ({image,title,price})=>{
    return(
        <div className="col-md-3">
            <div className="card shadow-sm style={{ height: '300px' }}">
                <div className="h-50 w-100 d-flex align-items-center justify-content-center">
                    <img  src={image} className="card-img-top img-fluid w-100 h-100" alt="Product Image" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text text-primary fw-bold">{price}</p>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        </div>
    );
}
export {One};