import PropTypes from "prop-types";
import React from "react";
import Form from "./form.js"
import Header from "./header";


function Layout({ children }) {



  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <Header />

      <main className="Main">
        {children}
      </main>

      <Form />

    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
