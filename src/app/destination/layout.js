import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Topbar2 from "@/components/topbar/Topbar2";
import React from "react";
export const metadata = {
  title: "TripRex - Tour & Travel Agency  NextJs Template",
  description:
    "TripRex is a NextJs Template for Tour and Travel Agency purpose",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};
const layout = ({children}) => {
  return (
    <>
      <Topbar2 />
      <Header />
      {children}
=      <Footer/>
    </>
  );
};

export default layout;
