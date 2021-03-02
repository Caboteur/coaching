import PropTypes from "prop-types";
import React from "react";
import Header from "./header.js";
import Footer from "./footer.js";

function Layout({ children }) {



  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <Header />

      <main className="Main">
        {children}
      </main>

      <Footer />

    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
