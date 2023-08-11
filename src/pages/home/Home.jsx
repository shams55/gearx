import React from "react";
import TopBar from "../../components/common/topbar/TopBar";
import Offer from "../../components/common/offer/Offer";
import HomeSlider from "./component/HomeSlider";
import Banner from "./component/Banner";
import FeatureProduct from "./component/FeatureProduct";
import RecentProduct from "./component/RecentProduct";
import Footer from "../../components/common/footer/Footer";

export default function Home(){
    return(
       <>
         <TopBar />
          <Offer />
          <HomeSlider />
          <Banner />
          <FeatureProduct />
          <RecentProduct />
          <Footer />
       </>
    )
}