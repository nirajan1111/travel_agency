import Breadcrumb from "@/components/common/Breadcrumb";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";


import Home1WhyChoose from "@/components/whyChoose/Home1WhyChoose";
import Home2About from "@/components/about/Home2About";
import Topbar2 from "@/components/topbar/Topbar2";
export const metadata = {
  title: "Shuvam travels - Tour & Travel Agency ",
  description:
    "Shuvam travels is for Tour and Travel Agency purpose",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};
const page = () => {
  return (
    <>
      <Topbar2 />
      <Header />
      <Breadcrumb pagename="About Us" pagetitle="About Us" />
      <Home2About />
      <Home1WhyChoose />
      
     
      <Footer />
    </>
  );
};

export default page;
