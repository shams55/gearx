import React from "react";

import productBanner from "../../../assets/images/product/1.png"

export default function BannerLeft(){
    return(
        <div className="banner-image-content banner-bottom-right">
            <div className="parallelogram"></div>
            <img  src={productBanner} alt="" />
            <div className="product-item-content">
                <span className="product-price">$35</span>
                <a href=""><p>AUTO PARTS</p></a>
            </div>
        </div>
    )
}