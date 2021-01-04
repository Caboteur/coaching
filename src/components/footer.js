import React from "react";
import linkedin from "../images/linkedin.svg";
import fb from "../images/fb.svg";

function Footer() {



  return (
    <div className="footer">
     <img style={{padding:"0.2em"}} src={fb} />
     <img src={linkedin} />
    </div>
  );
}

export default Footer;
