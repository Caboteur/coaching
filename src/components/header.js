import { Link } from "gatsby";
import React from "react";

function Header() {



  return (
    <header className="Header">

    <div className="Title">
    <Link to="/event">
        Théophile Lafage
    </Link>
     </div>
        <div className="onglet">
        <Link to="/event">
            Evenements
        </Link>
        </div>
        <div className="onglet">
        <Link to="/">
             Coaching
        </Link>
            </div>

    </header>
  );
}

export default Header;
