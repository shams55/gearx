import React from "react";
import { Col, Row } from 'antd';
import LeftContent from "./LeftContent";
import Language from "./Language";
import Account from "./Account";


export default function TopBar(){
    return(
        <div className="gearx-topbar">
            <div className="container">
                <Row>
                    <Col xs={24} sm={12} md={12} lg={12}>
                        <LeftContent />
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12}>
                        <div className="topbar-list text-right">
                            <ul>
                                <li>
                                    <div className="language-area">
                                       <Language />
                                    </div>
                                </li>
                                <li>
                                    <div className="useroption">
                                        <Account />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
