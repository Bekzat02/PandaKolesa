import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";
import {action} from "../jquery";
import {getObject} from "./GetObject";



const Categories = () => {
    const [categories, setCategories] = useState([]);

    const getCategories = () => {
        getObject().then(data=>{
            setCategories(data.categories);
        })
    }

    useEffect(() => {
            getCategories();
        }
        , []);
    return categories.map((category)=>{
        return (
                    <button
                        id={category}
                        className={'col col-xl-1 col-md-3 btn btn-outline-danger m-1 border border-primary kel'}
                            onClick={()=>action(category)} >{category}</button>

        )})
}
export default Categories;