import logo from './logo.svg';
import './App.css';
import {One} from '../item/item';
import {Square} from '../square/square';
import { CameraLayout } from '../camera/layout/layout';
import {Invoice} from '../invoice/invoice';

function App() {
  return (
    <div className="row m-2">
            <One image="https://5sfashion.vn/san-pham/bo-quan-ao-nam-mua-dong-5s-fashion-can-phoi-phom-slimfit-bni24018" title="Product 1" price="50.00" />
            <One image="https://bizweb.dktcdn.net/100/444/111/products/384781425-868256931533563-3522446496088188583-n.jpg?v=1697191865807" title="Product 2" price="75.00" />
            <One image="https://via.placeholder.com/300" title="Product 3" price="100.00" />
            <One image="https://via.placeholder.com/300" title="Product 4" price="87.00" />
        </div>
  );
}
function SquareParent (){
  return(
    <Square width="50px" height="50px" backgroundColor="red"></Square>
  );
}
function Camera(){
  return(
    <CameraLayout></CameraLayout>
  );
}
function Invoi(){
  return(
    <Invoice></Invoice>
  );
}
export  {App,SquareParent,Camera,Invoi};
