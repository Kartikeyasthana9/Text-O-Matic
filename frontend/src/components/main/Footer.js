import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className=" text-center text-white fixed-bottom"  style={{ background: "#39373b" }}>
        {/* Grid container */}
       
        {/* Grid container */}
        {/* Copyright */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
        >
          © 2022 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            Text-o-matic.com
          </a>
        </div>
        {/* Copyright */}
      </footer>
    </div>
  );
};

export default Footer;
