import React from "react";
import HoverCart from "./HoverCart";

import {SearchOutlined, ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons';

export default function ShoppingCart(){
    return(
       
        <>
        <div class="shopping-cart">
            <div class="search-cart">
                <div class="search-icon">
                    <SearchOutlined />
                </div>
                
            </div>
        </div>
        <div class="shopping-cart">
            <HeartOutlined />
        </div>
        <div className="shopping-cart">
            <a class="cart-title" href="#"><ShoppingCartOutlined /><span class="add-item">2</span></a>
            <HoverCart />
        </div>
        </>
        
    )
}