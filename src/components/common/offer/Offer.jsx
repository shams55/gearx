import React from "react";
import Logo from "./Logo";
import { Row, Col } from "antd";
import AddressNumber from "./AddressNumber";
import OfficeAddress from "./OfficeAddress";
import ShoppingCart from "./ShoppingCart";

export default function Offer(){
    return(
       <div className="offer-section">
            <div className="container">
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24}>
                        <div className="location-content text-center">
                            <Logo />
                            <div className="office-contact">
                                <AddressNumber />
                                <OfficeAddress />
                            </div>
                            <div className="shopping-cart-parent">
                                <ShoppingCart />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
       </div>
    )
}