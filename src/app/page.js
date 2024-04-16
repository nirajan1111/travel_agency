import About2 from "@/components/about/Home2About.jsx";
import Home1Activities from "@/components/activities/Home1Activities";
import Banner1 from "@/components/banner/Banner1";
import Home1Banner2 from "@/components/banner/Home1Banner2";
import Home1Blog from "@/components/blog/Home1Blog";
import Newslatter from "@/components/common/Newslatter";
import Destination1 from "@/components/destination/Destination1";
// import Home1FacilitySlide from "@/components/facilitySlide/Home1FacilitySlide";
// import Home5Fecilities2 from "@/components/facilitySlide/Home1Fecilities5";
import Home5Fecilities2 from "@/components/facilites/Home5Facilities.jsx";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
// import Home1popularTour from "@/components/popularTour/Home1popularTour";
import Home1Testimonail from "@/components/testimonial/Home1Testimonail";
import Topbar2 from "@/components/topbar/Topbar2";
import Home1TourPackage from "@/components/tourPackage/Home1TourPackage";
import Home1Vise from "@/components/visaComponents/Home1Vise";
import Home1WhyChoose from "@/components/whyChoose/Home1WhyChoose";
export const metadata = {
  title: "TripRex - Tour & Travel Agency  NextJs Template",
  description:
    "TripRex is a NextJs Template for Tour and Travel Agency purpose",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};
export default function Home() {

  return (
    <>
      <Topbar2 />
      <Header />
      <Banner1 />
      <About2 />
      <Destination1 />
    
      <Home5Fecilities2 />
      
      <Home1WhyChoose />
      {/* <Home1popularTour /> */}
      {/* <Home1Activities /> */}
      {/* <Home1Banner2 /> */}
      <Home1Testimonail />
      <Home1Blog />
      {/* <Home1Vise /> */}
      {/* <Newslatter /> */}

      <Footer />
    </>
  );
}
