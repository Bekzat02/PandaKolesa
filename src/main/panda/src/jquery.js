import $ from "jquery";
import {AddCookie} from "./Main/Example";
import {cartName} from "./Main/Example";


export function action(classname) {
    $("." + classname).removeClass("d-none");
    $('#row > *').not($('.' + classname)).addClass('d-none');
}

export function minus(idd) {
    let value = parseInt($("input[name='count']#" + idd).val());
    if (value > 0) {
        $('input#' + idd).val(value - 1);
    }
}

export function plus(idd) {
    let value = parseInt($("input[name='count']#" + idd).val());
    if (value < 10) {
        $('input#' + idd).val(value + 1);
    }
}
export function updateViewPlus(amount){
        $('#overall').val(parseInt($('#overall').val()) + amount);
}

export function updateViewMinus(amount){
        if (getOverall() >= amount) {
            $('#overall').val(parseInt($('#overall').val()) - amount);
        }
        else{
            $('#overall').val(0);
        }
}

export function amountValue(OrderProductDto){
    let price = parseInt($("input." + OrderProductDto.foodId).val());
    let count = parseInt(OrderProductDto.quantity);
    let amount=price*count;
    updateViewMinus(amount);
}

export function assToCart(OrderProductDto) {
    let price = parseInt($("input." + OrderProductDto.foodId).val());
    let count = parseInt(OrderProductDto.quantity);
    let item = $('#items').text();
    if (item === 'No items selected') {
        $('#items').text("");
    }

    $('#items').append('<span id="cart-item ' + OrderProductDto.foodId + '" ><b>' + OrderProductDto.foodId + '</b> x ' + count + ' dana : <b>' + count * price + '</b> tg' + '<br></span>');
    updateViewPlus(count*price);
    $('#overall').removeClass("d-none");
    $('#over').removeClass("d-none");
    $('#tg').removeClass("d-none");
    $('.options').removeClass("d-none");
    $('#korzina').removeClass("d-none");
}

export function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

export function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

export const AddToCart = (OrderProductDto, Cart) => {
    Cart.addProduct(OrderProductDto);
    plus(OrderProductDto.foodId);
    assToCart(OrderProductDto);
    AddCookie(Cart);
}

export const RemoveFromCart = (OrderProductDto, Cart) => {
    Cart.removeProduct(OrderProductDto);
    AddCookie(Cart);
    minus(OrderProductDto.foodId);
    amountValue(OrderProductDto);
}

export const getCart = () => {
    if(readCookie(cartName)!=null) {
        return JSON.parse(readCookie(cartName));
    }
    return null;
}
export function currentQuantity(OrderProductDto) {
    let idd=OrderProductDto.foodId;
    let defaultt = parseInt($("input[name='count']#" + idd).val());
    let value = parseInt(OrderProductDto.quantity);
    $("input#" + idd).val(defaultt+value);
}

export function checkQuantity(Cart){
    for(let i=0;i<Cart.length;i++){
        currentQuantity(Cart[i]);
    }
}

export function gym(name,list){
    for(let i=0;i<list.length;i++){
        if(name===list[i].foodId){
            return parseInt(list[i].quantity);
        }
    }
    return 0;
}
export function getOverall(){
    let sum=0;
    let cart=getCart();
    if(cart!=null) {
        for (let i = 0; i < cart.list.length; i++) {
            sum +=cart.list[i].price *cart.list[i].quantity;
        }
        return sum;
    }
    return 0;
}


