import React from "react";
import Header from "./../components/Header";
import ShopSection from "./../components/homeComponents/ShopSection";
import ContactInfo from "./../components/homeComponents/ContactInfo";
import CalltoActionSection from "./../components/homeComponents/CalltoActionSection";
import Footer from "./../components/Footer";
import Footerslider from "../components/homeComponents/Footerslider";
import Headerslider from "../components/homeComponents/Headerslier";
import Joblist from "../components/homeComponents/Joblist";

const HomeScreen = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <Headerslider />
      {/* <Joblist /> */}
      <ShopSection />
      <CalltoActionSection />
      {/* <ContactInfo /> */}
      <Footerslider />
      <Footer />
    </div>
  );
};

export default HomeScreen;
