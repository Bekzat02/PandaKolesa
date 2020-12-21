import React, {useEffect, useState} from "react";
 import $ from "jquery";
import {AddToCart, getCart, gym, RemoveFromCart} from "../jquery";
import { Cart, OrderProductDto} from "./Cart";
import {getObject} from "./GetObject";


const Foods = () => {
    const [foods, setFoods] = useState([]);
    const getFoods = () => {
        getObject().then(data => {
            setFoods(data.foods);
        });
    }
    let cart=new Cart();
    if(getCart()!=null) {
        cart.list=getCart().list;
    }
    useEffect(() => {
        getFoods();
    }, []);

    return foods.map((food) => {
    let quantity=gym(food.name,cart.list);
        return (
            <div
                className={'col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 text-center shadow rounded pt-3 mr-1 ' + food.category + ' d-none'}>

                <img src={food.image_url}/>
                <h2>{food.name}</h2>
                <h3>{food.category}</h3>
                <p><b>Size:</b></p>
                <h4 className="bg bg-warning">{food.size}</h4>
                <h4><b>Price:</b></h4>
                <b><h3>{food.price}tg</h3></b>
                <input type="number" className={'d-none '+food.name} name="price" value={food.price}/>
                <p>Cart:</p>
                <div className="row">
                    <div className="col-4 text-center">
                        <svg viewBox="0 0 16 16"
                             className="bi bi-dash-square  btn-outline-info"
                             fill="currentColor" id={food.name} onClick={()=>RemoveFromCart(new OrderProductDto(food.name,1,parseInt(food.price),food.image_url),cart)}
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                        </svg>
                    </div>
                    <div className="col-4"><input type="number" name="count" disabled value={quantity} min="0"
                                                  className="text-center shadow-sm inputInFood"
                                                  id={food.name}
                                                  />
                    </div>
                    <div className="col-4  text-center">
                        <svg viewBox="0 0 16 16"
                             className="bi bi-plus-square  btn-outline-info"
                             fill="currentColor" id={food.name} onClick={()=>AddToCart(new OrderProductDto(food.name,1,parseInt(food.price),food.image_url),cart)}
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                            <path fill-rule="evenodd"
                                  d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                    </div>
                </div>
            </div>

        )
    })
}
export default Foods;