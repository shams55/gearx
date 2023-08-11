import React from "react"
import {Col, Row} from "antd";

export default function RecentItemHeading(){
    return(
        <Row>
            <Col md={18}>
                <div className="filter-list">
                    <div className="section-heading heading-line text-left">
                       
                            <h2 className="line-title sec-title"><span>RECENT ITEM</span></h2>
                        
                    </div>
                </div>
            </Col>
            
           <Col md={6}>
                <div className="filter-list">
                    <div className="filter-option">
                        <ul>
                            <li><a href="#!" className="filter active" data-filter=".filter-dress">ALL</a></li>
                            <li><a href="#!" className="filter" data-filter=".filter-shoe">BIKE</a></li>
                            <li><a href="#!" className="filter" data-filter=".filter-accesories">CAR</a></li>
                            <li><a href="#!" className="filter" data-filter=".filter-bag">OTHER</a></li>
                        </ul>
                    </div>
                </div>
           </Col>
        </Row>
    )
}