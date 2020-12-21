import React from 'react';

const MyComponent = () => {
    return (
        <div>
            <footer className="footer py-5 mt-auto d-none" id="korzina">
                <div className="container border border-dark rounded shadow">
                    <div className="row p-1">
                        <div className="col-3 col-xs-12">
                            <svg width="3em" height="3em" viewBox="0 0 16 16" className="bi bi-cart" fill="currentColor"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                            </svg>
                            <br/>
                            <h4 id="over" className="d-none">Overall: </h4>
                            <input type="number" name="overall" disabled value="0" min="0"
                                   className="text-center d-none"
                                   id="overall"
                                   style={{
                                       width: "75px",
                                       fontSize: "20px",
                                       backgroundColor: "white",
                                       border: "none"
                                   }}/><span
                            id="tg" className="d-none"> tg</span>
                        </div>
                        <div className="col-7 col-xs-12 border border-dark border-top-0 border-right-0 border-bottom-0">
                            <p className="text text-center" id="items">No items selected</p>
                        </div>
                        <div className="col-2 col-xs-12">
                            <div className="row">
                                <div className="col-12  options d-none"><h4>Reset</h4>
                                    <svg onClick="resetCart()" width="2em" height="2em"
                                         viewBox="0 0 16 16"
                                         className="bi bi-bag-x-fill"
                                         fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                              d="M5.5 3.5a2.5 2.5 0 0 1 5 0V4h-5v-.5zm6 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM6.854 8.146a.5.5 0 1 0-.708.708L7.293 10l-1.147 1.146a.5.5 0 0 0 .708.708L8 10.707l1.146 1.147a.5.5 0 0 0 .708-.708L8.707 10l1.147-1.146a.5.5 0 0 0-.708-.708L8 9.293 6.854 8.146z"/>
                                    </svg>
                                </div>
                                <div
                                    className="col-12 options d-none" onClick="buy()"><h4>Buy</h4>
                                    <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-bag-plus-fill"
                                         fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                              d="M5.5 3.5a2.5 2.5 0 0 1 5 0V4h-5v-.5zm6 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"/>
                                    </svg>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>

            </footer>
        </div>
    );
};

export default MyComponent;
