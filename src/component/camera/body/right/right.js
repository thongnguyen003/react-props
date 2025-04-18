import React  from "react";
import {Item} from "./item/item";
import { getData } from "./Data";
var Right = ()=>{
    const products = getData();
    return (
        <div id="right-content">
            <h2>Product :</h2>
            <div id="products">
                {products.map((product, index) => (
                    <Item 
                        key={index} 
                        name={product.name} 
                        image={product.image} 
                        type={product.type} 
                        price={product.price} 
                    />
                ))}
                <div style={{clear: 'both'}} />
            </div>
            <div style={{clear: 'both'}} />
        </div>

    );
}
export {Right};