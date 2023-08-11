import React from "react";
import productImg from "../../../assets/images/product/cart/1.jpg"
import productImg2 from "../../../assets/images/product/cart/2.jpg"

export default function HoverCart(){
    return(
        <div class="minicart-items-wrapper">
            <div class="product">
                <div class="product-name-thumb thumb-border">
                    <div class="item-photo"><img src={productImg} alt="t-shirt" /></div>
                    <div class="item-name">
                    <p>Instrument</p>
                    <span>1 X $99</span>
                    </div>
                    <div class="remove-action">
                    <a class="cart-close" href="#">X</a>
                    </div>
                </div>
            </div>
            <div class="product">
                <div class="product-name-thumb second-thumb">
                    <div class="item-photo"><img src={productImg2} alt="t-shirt" /></div>
                    <div class="item-name">
                        <p>Instrument</p>
                    <span>1 X $59</span>
                    </div>
                    <div class="remove-action">
                    <a class="cart-close" href="#">X</a>
                    </div>
                </div>
            </div>
            <div class="total-cart">
                <span class="float-left">TOTAL:</span>
                <span class="float-right">$158</span>
                <div class="float-clear"></div>
            </div>
            <div class="cart-btn">
                <a class="gearx-btn-red" href="#">VIEW CART</a>
                <a class="gearx-btn-black float-right" href="#">CHECK OUT</a>
            </div>
        </div>
    )
}