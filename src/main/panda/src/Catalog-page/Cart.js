import React from 'react';


export class Cart {
    list=[]
    constructor() {

    }

    get getList() {
        return this.list;
    }

    addProduct(OrderProductDto) {
        let exists=false;
            for (let i = 0; i < this.list.length; i++) {
                if (this.list[i].foodId === OrderProductDto.foodId) {
                    exists=true;
                    this.list[i].quantity += 1;
                    break;
                }
            }
         if(!exists) {
            this.list.push(OrderProductDto);
        }
    }

    removeProduct(OrderProductDto) {
            for (let i = 0; i < this.list.length; i++) {
                if (this.list[i].foodId === OrderProductDto.foodId) {
                    if (this.list[i].quantity > 1) {
                        this.list[i].quantity -= 1;
                        break;
                    } else {
                        this.list.splice(i, 1);
                    }
                }
        }
    }

    set setList(list) {
        this.list = list;
    }
     setListFromOutside(list) {
        this.list = list;
    }

}

export class OrderProductDto {
    foodId;
    quantity;
    price;
    image_url

    constructor(id, quantity,price,image_url) {
        this.foodId = id;
        this.quantity = quantity;
        this.price = price;
        this.image_url = image_url;
    }

    get getFoodId() {
        return this.foodId;
    }

    set setFoodId(id) {
        this.foodId = id;
    }

    get getQuantity() {
        return this.quantity;
    }

    set setQuantity(quantity) {
        this.quantity = quantity;
    }

}
