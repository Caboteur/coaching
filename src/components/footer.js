import React from "react";
import linkedin from "../images/linkedin.svg";

function Footer() {



  return (
    <div className="footer">
      <p>Copyright © 2021</p>
     <a href="https://www.linkedin.com/in/bernardlafage"><img src={linkedin} /></a>
    </div>
  );
}

export default Footer;
