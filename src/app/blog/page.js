import Breadcrumb from "@/components/common/Breadcrumb";
import blogData from "../../data/blog.json";
import Link from "next/link";
import Newslatter from "@/components/common/Newslatter";
import Footer from "@/components/footer/Footer";

import Header from "@/components/header/Header";
import Topbar2 from "@/components/topbar/Topbar2";
import Home1Blog from "@/components/blog/Home1Blog";
export const metadata = {
  title: "TripRex - Tour & Travel Agency  NextJs Template",
  description:
    "TripRex is a NextJs Template for Tour and Travel Agency purpose",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};

const page = () => {
  return (
    <>
      <Topbar2 />
      <Header />
      <Breadcrumb pagename="Blog Grid" pagetitle="Blog Grid" />
      <div className="blod-grid-section pt-120 mb-120">
        <Home1Blog/>
      </div>
     
      <Footer />
    </>
  );
};

export default page;
