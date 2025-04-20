import React, { useEffect, useState } from "react";
import {Item} from "./item/item";
import {getData} from "./data";
var Invoice = ()=>{
    const [data, setData] = useState([]); // State để lưu dữ liệu

    useEffect(() => {
        const fetchData = async () => {
            const result = await getData();
            setData(result);
        };
        fetchData();
    }, []);
    return (
            <div className="row m-2">
                {data.map((element,index) => (
                <Item
                    key={index}
                    avatar={element.avatar}
                    name={element.name}
                    image={element.image}
                    price={element.price}
                />
                ))}
            </div>
    );
}
export {Invoice};