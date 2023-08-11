import React from "react";
import {Row} from "antd"
import FooterContent from "./FooterContent"
import FooterContent2 from "./FooterContent2";

export default function Footer(){
    return(
        <div className="footer-section">
            <Row>
                <FooterContent />
                <FooterContent2 />
                <FooterContent />
            </Row>
        </div>
    )
}