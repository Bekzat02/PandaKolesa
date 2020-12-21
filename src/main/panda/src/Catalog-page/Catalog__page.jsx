import React, {useEffect, useState} from 'react';
import axios from 'axios';
import $ from "jquery";
import Foods from "./Food";
import Categories from "./Categories";
import Footer from "./Footer";
import banana from "./banana";

const MyComponent = () => {
    return (
        <div>
            <div>

               {/* <div>
                    <div className="position-relative overflow-hidden p-2 p-md-5 m-md-3 text-left shadow rounded beka"
                    >
                        <div className="col-md-5 p-lg-5  my-5">
                            <h1 className="display-4 font-weight-normal">Drova Bar&Grill</h1>
                            <p className="lead font-weight-normal">Quickly order the food by the QR-Code or surf the
                                website ,find your chair,verification and let you pick loved ones!!!</p>
                            <a className="btn btn-outline-secondary" href="/about">Coming soon</a>
                        </div>
                        <div className="product-device shadow-sm d-none d-md-block"></div>
                        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
                    </div>
                </div>*/}

                <div className="container">
                    <div className="row p-1">
                        <Categories/>
                    </div>
                </div>

                <div className="container">
                    <div className="row" id="row">
                        <Foods/>
                        <banana/>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default MyComponent;
