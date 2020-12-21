import React from 'react';
import axios from 'axios';
import {GET_ERRORS} from "./types";

const AddFoodTask = (object, history) => async r => {
    await axios.post('http://localhost:8081/food/ass', object);
    history.push("/main");
};

export default AddFoodTask;
