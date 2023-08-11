import React from "react";
import {Col} from "antd";
import footerLogo from "../../../assets/images/logo.png"

export default function FooterContent(){
    return(
        <Col xs={24} md={8} sm={8}>
            <div className="contact-content">
                <div className="footer-content">
                    <div className="logo">
                    <a href="index.html">
                        <img src={footerLogo} alt="Logo Img" />

                        </a>
                    </div>
                <p>House 65 Road 45<br/>
                    North Lane, Florida, United States</p>
                    <div className="address-widget">
                        <p className="number"><i className="icon-phone-call"></i>+880 28415310</p>
                        <p className="email-number"><i className="icon-e-mail-envelope"></i>support@mail.com</p>
                    </div>
                </div>
            </div>
        </Col>
    )
}