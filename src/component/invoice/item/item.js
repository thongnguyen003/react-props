import React from "react";
var Item = ({name,avatar,image,price})=>{
    return(
        <div className="col-md-3">
            <div className="card invoice-card bg-white p-3">
                <div className="d-flex align-items-center mb-3">
                    <img className="${avatar}" src="avatar.jpg" alt="User Avatar" />
                    <h5 className="mb-0">{name}</h5>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <img className="${avatar}"src="product.jpg" alt="Product Image" />
                    <span className="price fs-4">{price}</span>
                </div>
            </div>
        </div>
    );
}