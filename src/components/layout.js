import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children }) {
  return (
    <div className="flex flex-col md:flex-row font-sans min-h-screen text-gray-900">
      <Header />

      <main id="main" className="flex flex-col md:justify-center px-4 py-8 md:w-full">
        {children}
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
