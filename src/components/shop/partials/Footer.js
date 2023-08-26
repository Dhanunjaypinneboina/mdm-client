import React from "react";
// import moment from "moment";
// import { FaFacebookSquare } from "react-icons/fa";
// import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import mdmlogo from "../../../images/mdmLogo.png";

const Footer = (props) => {
  return (
    <footer
      style={{
        background: "#051120",
        color: "#fff",
      }}
    >
      <div
        style={{
          background: "#123962",
          height: "7px",
        }}
      ></div>
      {/* remove here and replace here */}
      <div className="object-cover flex flex-row justify-center">
        <img
          src={mdmlogo}
          alt="logo"
          style={{
            minHeight: "100px",
            height: "80px",
            maxHeight: "200px",
          }}
        />
      </div>
      <div className="text-center mb-2 m-1">
        Copyright © 2018 MDM HERBAL PRODUCTS. All Rights Reserved
      </div>
      <div
        style={{
          background: "#123962",
          height: "7px",
        }}
      ></div>
    </footer>
  );
};

export default Footer;
