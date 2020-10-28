import { Link } from "gatsby";
import React from "react";

function Header() {



  return (
    <header className="Header">
      <div >
        <Link to="/">
          <h1 >

            <span className="Title">
             Théophile Lafage
            </span>
          </h1>
        </Link>


      </div>
    </header>
  );
}

export default Header;
