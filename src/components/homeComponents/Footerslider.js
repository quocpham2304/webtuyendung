import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Itemsfooter from "./Itemsfooter ";


const breakPoints = [
  { width: 100, itemsToShow: 1 },
 
];

function Footerslider() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1>
      <div className="Footerslider">
        <Carousel breakPoints={breakPoints}>
          <Itemsfooter>One</Itemsfooter>
          <Itemsfooter>Two</Itemsfooter>
          <Itemsfooter>Three</Itemsfooter>
          <Itemsfooter>Four</Itemsfooter>
          <Itemsfooter>Five</Itemsfooter>
          <Itemsfooter>Six</Itemsfooter>
          <Itemsfooter>Seven</Itemsfooter>
          <Itemsfooter>Eight</Itemsfooter>
        </Carousel>
      </div>
    </>
  );
}
export default Footerslider;