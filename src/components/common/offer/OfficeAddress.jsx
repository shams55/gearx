
import React from "react";
import { EnvironmentOutlined } from '@ant-design/icons';


export default function OfficeAddress(){
    return(
        <div className="parent-parallelogram">
            <div className="parallelogram">
                <div className="icon">
                    <EnvironmentOutlined />
                </div>
            </div>
            <div className="location">
            <p>OFFICE</p>
            <span>North paragon state, USA</span>
            </div>
        </div>
    )
}


