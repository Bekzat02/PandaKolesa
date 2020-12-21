import {NavLink} from "react-router-dom";
import React from 'react';
import a from './Navbar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {getOverall} from "../jquery";


const Navbar = () => {
    let overall=getOverall();
    return (
        <nav>
            <div
                className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm"
            >
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <img className="mean-fruit-gradient my-0 mr-md-auto"
                     src='https://img.icons8.com/ios/452/react-native.png'
                />
                <nav className=" mx-auto navFlex">
                    <NavLink to='/addFood'> AddFood</NavLink>
                    <NavLink to='/main'> Main</NavLink>
                    <NavLink to='/catalog'> Catalog</NavLink>

                    <NavLink to='/beka'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-basket" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                  d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                        <input type="number" name="overall" disabled value={overall} min="0"
                               className="text-center"
                               id="overall"
                               style={{
                                   width: "75px",
                                   fontSize: "20px",
                                   backgroundColor: "white",
                                   border: "none"
                               }}/>
                    </NavLink>

                </nav>

            </div>
        </nav>
    )
}
export default Navbar;