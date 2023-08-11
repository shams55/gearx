
import React from "react";
import {Col} from "antd"
import recentImg from "../../../assets/images/product/recent/1.jpg";

export default function RecentProductItem(){
    return(
        <Col xs={24} md={6} sm={6} lg={6}>
            <div className="mix filter-dress filter-shoe filter-perfume">
                <div className="product-box pr">
                    <div className="product-item text-center">
                        <img className="img-fluid" src={recentImg} alt="" />
                        <div className="product-item-content">
                            <div className="product-subname">meter</div>
                            <h3>Speed Meter</h3>
                            <span className="product-price">$30</span>
                            <a className="addcart-item" href="#">ADD TO CART</a>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    )
}
