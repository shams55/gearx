import React from "react";
import { Row} from "antd";

import FeatureHeading from "../../../components/common/Heading/FeatureHeading";
import FeatureProductItem from "./FeatureProductItem";

export default function FeatureProduct(){
    return(
        <div className="featured-item-section">
            <div className="container">
               
                <FeatureHeading />
               
                <Row>
                    <FeatureProductItem />
                    <FeatureProductItem />
                    <FeatureProductItem />
                </Row>
            </div>
        </div>
    )
}