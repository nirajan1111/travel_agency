"use client";
import React, { useMemo ,useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Link from "next/link";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);
import axios from "axios";

const Banner1 = () => {
  const [landing, setLandings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/landing");
        console.log("response", response);  
        const data = response.data.data;
        console.log("landing data ", data);
        setLandings(data || []);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
        setLoading(false);
      }
    };
    fetchData();
  },[])
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 2500,
      spaceBetween: 25,
      effect: "fade", // Use the fade effect
      fadeEffect: {
        crossFade: true, // Enable cross-fade transition
      },
      autoplay: {
        delay: 3000, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".home1-banner-next",
        prevEl: ".home1-banner-prev",
      },
    };
  }, []);
  return (
    <>
      {loading ? (
        <>
        </>
      ) : error ? (
        <div>Error occurred while fetching data.</div>
      ) : (
        <div className="home1-banner-area">
          <div className="container-fluid">
            <Swiper {...settings} className="swiper home1-banner-slider">
              <div className="swiper-wrapper">
                {landing.map((item, index) => (
                  <SwiperSlide key={index} className="swiper-slide">
                    <div
                      className="home1-banner-wrapper"
                      style={{
                        borderRadius: '30px',
                        backgroundImage: `linear-gradient(180deg, rgba(16, 12, 8, 0.4) 0%, rgba(16, 12, 8, 0.4) 100%), url(${item.image})`,
                      }}
                    >
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="home1-banner-content">
                            
                              <h1>{item.heading}</h1>
                              <p>{item.paragraph}</p>
                              <div className="banner-content-bottom">
                                <Link href="/package/package-category" className="primary-btn1">
                                  Book A Trip
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner1;
