import React from 'react';
import {checkQuantity, getCart} from "../jquery";
import {Cart} from "./Cart";

const MyComponent = () => {
    let cart=new Cart();
    if(getCart()!=null) {
        cart.list=getCart().list;
        checkQuantity(cart.list);
    }
    return (
        <div>

        </div>
    );
};

export default MyComponent;
