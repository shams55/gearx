
import React from "react";
import {Col, Row} from "antd"
import featuredImg from "../../../assets/images/product/featured/1.jpg";

export default function FeatureProductItem(){
    return(
       
        <Col xs={24} md={8} sm={8} lg={8}>
            <div className="product-box pr">
                <div className="star-review">
                    <div className="parallelogram ml-auto"><span className="rating">4.9</span></div>
                </div>
                <div class="product-item text-center">
                    <img src={featuredImg} alt="" />
                    <div className="product-item-content">
                        <div className="product-subname">spring</div>
                        <h3>OBI Springs</h3>
                        <span className="product-price">$30</span>
                        <a className="addcart-item" href="#">ADD TO CART</a>
                    </div>
                </div>
            </div>
        </Col>
       
    )
}
