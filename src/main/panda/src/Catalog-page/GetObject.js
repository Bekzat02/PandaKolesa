import axios from "axios";
import {Cart} from "./Cart";

export const getObject = () => {
    const promise = axios.get('http://localhost:8081/getCategories');
    const takeData = promise.then((res) => res.data);
    return takeData;         //Returns categories and list of food
}

export const getFoodsByName = (list) => {
    let names = [];

    for (let i = 0; i < list.length; i++) {
        names.push(list[i].foodId);
    }


    return axios({
        method: 'GET',
        url: 'https://localhost:8081/getAllFoodsByName',
        data: {
            "names":names
        }
    })
}
