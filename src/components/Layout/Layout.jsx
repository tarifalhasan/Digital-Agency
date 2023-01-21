import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
const Layout = ({ children }) => {
  return (
    <main className=" container mx-auto">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
