import About2 from "@/components/about/Home2About.jsx";
import Banner1 from "@/components/banner/Banner1";
import Home1Blog from "@/components/blog/Home1Blog";
import Destination1 from "@/components/destination/Destination1";
import Home5Fecilities2 from "@/components/facilites/Home5Facilities.jsx";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Home1Testimonail from "@/components/testimonial/Home1Testimonail";
import Topbar2 from "@/components/topbar/Topbar2";
import Home1WhyChoose from "@/components/whyChoose/Home1WhyChoose";
export const metadata = {
  title: "Shuvam Travels - Tour & Travel Agency ",
  description:
    "Shuvam Travels is a travel agency that provides the best tour packages and travel services. We offer the best travel packages for your dream vacation.",
  icons: {
    icon: "/assets/img/rsz_logobg.png",
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
      <Home1Testimonail />
      <Home1Blog />
      <Footer />
    </>
  );
}
