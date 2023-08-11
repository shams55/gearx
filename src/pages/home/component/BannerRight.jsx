import React from "react";
import productBanner2 from "../../../assets/images/product/2.png"

export default function BannerRight(){
    return(
        <div className="banner-image-content banner-bottom-left">
            <div className="parallelogram"></div>
            <img  src={productBanner2} alt="" />
            <div className="product-item-content">
                <span className="product-price">$35</span>
                <a href=""><p>AUTO PARTS</p></a>
            </div>
        </div>
    )
}