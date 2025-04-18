import React from "react";
import { Header } from "../header/header";
import { Content } from "../body/content/content";
import { Footer } from "../footer/footer";
var CameraLayout= ()=>{
    return (
        <div id="container">       
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
        </div>
    );
}
export {CameraLayout}