import React from "react"
import {Row} from "antd";
import RecentItemHeading from "./RecentItemHeading";
import RecentProductItem from "./RecentProductItem";

export default function RecentProduct(){
    return(
        <div className="recent-item-section">
            <div className="container">
                <RecentItemHeading />
                <Row>
                    <RecentProductItem />
                    <RecentProductItem />
                    <RecentProductItem />
                    <RecentProductItem />
                    <RecentProductItem />
                    <RecentProductItem />
                    <RecentProductItem />
                    <RecentProductItem />
                </Row>
               
            </div>
        </div>
       
    )
}