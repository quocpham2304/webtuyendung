import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Items from "./Items";


const breakPoints = [
  { width: 100, Height: 1000, itemsToShow: 1 },
 
];

function Headerslider() {
  return (
  
      <div className="Headerslider">
        <Carousel breakPoints={breakPoints}>
          <Items>One</Items>
          <Items>Two</Items>
          <Items>Three</Items>
          <Items>Four</Items>
          <Items>Five</Items>
          <Items>Six</Items>
          <Items>Seven</Items>
          <Items>Eight</Items>
        </Carousel>
      </div>
   
  );
}
export default Headerslider;