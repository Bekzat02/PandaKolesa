import './App.css';
import React from 'react';
import {Route} from "react-router-dom";
import Main from "./Main/Main";
import Navbar from './Navbar/Navbar';
import Example from './Main/Example';
import Add_Food from "./Add_Food/Add_Food";
import Catalog__page from "./Catalog-page/Catalog__page";
import {Provider} from "react-redux";
import store from "./store";

const App = () => {
    return (
        <Provider store={store}>
        <div>
            <Navbar/>
            <Route exact path='/addFood' component={Add_Food}/>
            <Route exact path='/main' render={()=><Main/>} />
            <Route exact path='/beka' component={Example} />
            <Route exact path='/catalog' render={()=><Catalog__page/>}/>
        </div>
        </Provider>
    )
}

export default App;
