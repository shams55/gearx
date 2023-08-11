import React from "react";
import LogoImg from "../../../assets/images/main-logo.png";


export default function MainLogo(){
    return(
        <div className="main-logo">
            <img src={LogoImg} alt="" />
        </div>
    )
}