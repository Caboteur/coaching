import { Link } from "gatsby";
import React from "react";


function Header() {



  return (
    <header className="Header">

    <div className="Title">
    <Link to="/">
        Cabinet BL Conseil
    </Link>
     </div>

          <Link to="/contact">
              <div className="onglet">
              Contact
              </div>
          </Link>


          <Link to="/about">
              <div className="onglet">
               A propos
                   </div>
          </Link>

        <Link to="/event">
          <div className="onglet">
            Ateliers
          </div>

        </Link>
        <Link to="/nosprestations">
          <div className="onglet">

             Nos prestations
           </div>

        </Link>

    </header>
  );
}

export default Header;
