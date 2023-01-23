import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
