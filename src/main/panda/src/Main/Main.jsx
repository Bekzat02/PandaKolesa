import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

const DisplayAllFoods = () => {
    const [foods, setFood] = useState([]);
    const getFood = () => {
        axios.get('http://localhost:8081/foodsss').then(res => {
            console.log(res);
            setFood(res.data);
        })
    }

    useEffect(() => {
        getFood();
    }, []);
    return foods.map((food,index)=>{
        return(
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-center shadow rounded pt-5 my-5">

                        <img src={food.image_url}/>
                        <h2>{food.name}</h2>
                        <p>{food.category}</p>
                        <p><b>Size:{food.size}</b></p>
                        <h4/>
                        <h4><b>Price:{food.price}</b> tg </h4><br/>

                        <p><a className="btn btn-secondary" role="button">View
                            details »</a></p>

                        <div className="row text-center">
                            <a className="btn btn-success mb-4 mx-4" role="button">Edit
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-tools" fill="currentColor"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M0 1l1-1 3.081 2.2a1 1 0 0 1 .419.815v.07a1 1 0 0 0 .293.708L10.5 9.5l.914-.305a1 1 0 0 1 1.023.242l3.356 3.356a1 1 0 0 1 0 1.414l-1.586 1.586a1 1 0 0 1-1.414 0l-3.356-3.356a1 1 0 0 1-.242-1.023L9.5 10.5 3.793 4.793a1 1 0 0 0-.707-.293h-.071a1 1 0 0 1-.814-.419L0 1zm11.354 9.646a.5.5 0 0 0-.708.708l3 3a.5.5 0 0 0 .708-.708l-3-3z"/>
                                    <path fill-rule="evenodd"
                                          d="M15.898 2.223a3.003 3.003 0 0 1-3.679 3.674L5.878 12.15a3 3 0 1 1-2.027-2.027l6.252-6.341A3 3 0 0 1 13.778.1l-2.142 2.142L12 4l1.757.364 2.141-2.141zm-13.37 9.019L3.001 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z"/>
                                </svg>
                            </a>
                            <form method="post">
                                <input type="submit" value="Remove" className="btn btn-danger"/>
                            </form>
                        </div>
                    </div>

        )
    })
}

const Main = () => {
    return (


    <div className="container-fluid text-center">
    <div className="row">
    <div/>
    <div/>
    <DisplayAllFoods/>
    </div>
    <footer/>
    <script src="CatalogFunctions.js"></script>
    </div>
    )
}
export default Main;