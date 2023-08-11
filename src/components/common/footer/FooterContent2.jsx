import React from "react";
import {Col} from "antd";

export default function FooterContent2(){
    return(
        <Col xs={24} sm={24} md={8} lg={8}>
            <div className="middle-content">
                <div className="footer-content">
                    <h4>ABOUT US</h4>
                    <ul>
                        <li><a href="#">Shopping Info</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Store Locator</a></li>
                        <li><a href="#">Delivery Information</a></li>
                        <li><a href="#">Refunds Policy</a></li>
                    </ul>
                </div>
            </div>
        </Col> 
    )
}