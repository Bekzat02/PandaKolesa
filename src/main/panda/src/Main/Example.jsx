import React, {useEffect, useState} from 'react';
import {AddToCart, createCookie, getCart, readCookie, RemoveFromCart} from "../jquery";
import {getFoodsByName} from "../Catalog-page/GetObject";
import Foods from "../Catalog-page/Food";
import {Cart, OrderProductDto} from "../Catalog-page/Cart";

export const cartName = "cart";

export const AddCookie = (Cart) => {
    createCookie(cartName, JSON.stringify(Cart), 4);
}
export const ReadCookie = () => {
    let list = JSON.parse(readCookie(cartName));
    if (list == null) {
        return '';
    }
    return list;
}



/*
{"list":[{"foodId":"Angus","quantity":1}]}*/
const MyComponent = () => {
    const [foods, setFoods] = useState([]);

    const GetObjectFromCookie = () => {
        setFoods(ReadCookie);
    }
    let cart=new Cart();
    if(getCart()!=null) {
        cart.list=getCart().list;
    }
    useEffect(() => {
        GetObjectFromCookie();
    }, []);

    if (foods.list) {
            return foods.list.map((food) => {
                return (
                    <div>
                        <div
                            className={'col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 text-center shadow rounded pt-3 mr-1 '}>

                            <img src={food.image_url}/>
                            <h2>{food.foodId}</h2>
                            <p><b>Size:</b></p>
                            <h4><b>Price:</b></h4>
                            <b><h3>{food.price}tg</h3></b>
                            <input type="number" className={'d-none ' + food.foodId} name="price" value={food.price}/>
                            <p>Cart:</p>
                            <div className="row">
                                <div className="col-4 text-center">
                                    <svg viewBox="0 0 16 16"
                                         className="bi bi-dash-square  btn-outline-info"
                                         fill="currentColor" id={food.foodId}
                                         onClick={() => RemoveFromCart(new OrderProductDto(food.foodId, 1, parseInt(food.price), food.image_url), cart)}
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                              d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                        <path fill-rule="evenodd"
                                              d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                                    </svg>
                                </div>
                                <div className="col-4"><input type="number" name="count" disabled value={food.quantity}
                                                              min="0"
                                                              className="text-center shadow-sm inputInFood"
                                                              id={food.foodId}
                                />
                                </div>
                                <div className="col-4  text-center">
                                    <svg viewBox="0 0 16 16"
                                         className="bi bi-plus-square  btn-outline-info"
                                         fill="currentColor" id={food.foodId}
                                         onClick={() => AddToCart(new OrderProductDto(food.foodId, 1, parseInt(food.price), food.image_url), cart)}
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                              d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                        <path fill-rule="evenodd"
                                              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                    </div>
                )
            });
    }else {
        return (
            <div>{foods}Try to add from catalog</div>
        );
    }
}

export default MyComponent;
