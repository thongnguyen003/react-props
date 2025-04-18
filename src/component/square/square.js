import React,{Component} from "react";
var Square = (props)=>{
    return(
        <div style={{width:props.width,height:props.height,backgroundColor:props.backgroundColor}}></div>
    );
}
export {Square};