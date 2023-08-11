import React from "react";
import { Row, Col } from "antd";
import BannerLeft from "./BannerLeft";
import BannerRight from "./BannerRight";

export default function Banner(){
    return(
        <div className="banner-bottom-section">
            <div className="container">
                <Row>
                    <Col xs={24} md={12} sm={12} lg={12}>
                        <div className="banner-pad-right  wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay=".1s">
                            <BannerLeft />
                        </div>
                    </Col>
                    <Col xs={24} md={12} sm={12} lg={12}>
                        <div className="banner-pad-left  wow fadeInRight" data-wow-duration="1.5s" data-wow-delay=".1s">
                            <BannerRight />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}