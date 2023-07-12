import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import "./Welcome.css";



const Welcome = () => {
 

 

  return (
   
      <div className="launchcontainer" id="imahe">
        <div className="launchcontainertitle">
          <h1 className="launchcontainerh1">GoodsbyGrey.</h1>
          <h5 className="launchcontainerh5">Tokyo, Japan</h5>

          <Link to = "/">
          <button className="launchcontainerbutton" 
           > 
           SHOP
           
          </button>
          </Link>
        </div>
      </div>

 
  
  );
};

export default Welcome;
