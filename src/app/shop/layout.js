import Newslatter from "@/components/common/Newslatter";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

import Topbar2 from "@/components/topbar/Topbar2";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <Topbar2 />
      <Header />
      {children}
      <Newslatter />
      <Footer />
    </>
  );
};

export default layout;
