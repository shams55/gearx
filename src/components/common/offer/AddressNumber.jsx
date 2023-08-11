import React from "react";
import { PhoneOutlined } from '@ant-design/icons';
export default function AddressNumber(){
    return(
        <div className="parent-parallelogram">
            <div class="parallelogram">
                <div className="icon">
                    <PhoneOutlined />
                </div>
            </div>
            <div className="phone-call">
                <span>Free Call</span>
                <p>095 356 6720</p>
            </div>
        </div>
    )
}