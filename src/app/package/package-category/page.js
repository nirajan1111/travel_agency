"use client";
import Breadcrumb from "@/components/common/Breadcrumb";

import React, { useMemo, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Link from "next/link";
import Footer from "@/components/footer/Footer";
import Newslatter from "@/components/common/Newslatter";
import Header from "@/components/header/Header";
import Topbar2 from "@/components/topbar/Topbar2";
import { TourDetails } from "@/components/facilites/Home5Facilities";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Page = () => {
  const [tourData, setTourData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch("/api/package");
      const tourResponse = await response.json();

      setLoading(false);
      setTourData(tourResponse.data || []);
    };

    fetchData();
  }, []);
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 30,
      navigation: {
        nextEl: ".tour-tab-slider-next",
        prevEl: ".tour-tab-slider-prev",
      },
      breakpoints: {
        280: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        386: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 15,
        },
        1400: {
          slidesPerView: 5,
        },
      },
    };
  }, []);
  return (
    <>
      <Topbar2 />
      <Header />
      <Breadcrumb pagename="Package Category" pagetitle="Package Category" />
      <div className="package-category-nav-section">
        <div className="container">
          <div className="row mb-3 mt-3">
            <div className="col-lg-12">
              <div className="nav nav-pills" id="pills-tab" role="tablist">
                <div className="row g-4">
                  {tourData.length > 0 &&
                    tourData.map((tour) => <TourDetails data={tour} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Page;
