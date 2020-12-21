import React, {Component, useState} from 'react';
import axios from 'axios';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import classNames from "classnames";
import AddFoodTask from "../actions/AddFoodTask";

class Add_Food extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            category:"",
            image_url:"",
            size:"",
            price:"",
            description:"",
            errors:{},
        };
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        const newObject={
            name: this.state.name,
            category:this.state.category,
            image_url:this.state.image_url,
            size:this.state.size,
            price:this.state.price,
            description:this.state.description,
        }
        this.props.AddFoodTask(newObject,this.props.history);
        /*axios.post('http://localhost:8081/food/ass',
            newObject)
            .then(function (response){
                alert(response.data);
            });
*/
    }

    render() {
        return (
            <div>
                <form method="post">
                    <input type="text"
                           name="name"
                           required
                           value={this.state.name}
                           onChange={this.onChange}
                           placeholder="name"/>

                    <br/>
                    <input type="text"
                           name="category"
                           onChange={this.onChange}
                           value={this.state.category}
                           placeholder="category"/>
                    <br/>
                    <input type="text"
                           name="image_url"
                           onChange={this.onChange}
                           value={this.state.image_url}
                           placeholder="image_url"/>
                    <br/>
                    <input type="text"
                           placeholder="size"
                           name="size"
                           onChange={this.onChange}
                           value={this.state.size}
                    />
                           <br/>
                    <input type="number"
                           placeholder="price"
                           name="price"
                           onChange={this.onChange}
                           value={this.state.price}
                    />
                    <br/>
                    <input type="text"
                           placeholder="description"
                           name="description"
                           onChange={this.onChange}
                           value={this.state.description}
                    />
                    <br/>
                    <button onClick={this.onSubmit}>Add</button>
                </form>
            </div>
        );
    }
}
Add_Food.propTypes={
    AddFoodTask:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired
}


const mapStateToProps=state=>({
    errors:state.errors
})

export default connect (mapStateToProps,{AddFoodTask}) (Add_Food);