"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Link from "next/link";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Banner1 = () => {
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
      <div className="home1-banner-area" >
        <div className="container-fluid">
          <Swiper {...settings} className="swiper home1-banner-slider">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div
                  className="home1-banner-wrapper"
                  style={{
                    borderRadius: '30px',
            

                    backgroundImage:
                      "linear-gradient(180deg, rgba(16, 12, 8, 0.4) 0%, rgba(16, 12, 8, 0.4) 100%), url(assets/img/home1/home1-banner-img1.png)",
                  }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="home1-banner-content">
                          <div className="eg-tag">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={18}
                                height={18}
                                viewBox="0 0 18 18"
                              >
                                <path d="M12.005 11.8928C13.9204 8.88722 13.6796 9.2622 13.7348 9.18383C14.4322 8.20023 14.8008 7.04257 14.8008 5.83594C14.8008 2.63602 12.2041 0 9 0C5.80634 0 3.19922 2.63081 3.19922 5.83594C3.19922 7.0418 3.57553 8.22976 4.29574 9.22662L5.99491 11.8929C4.17822 12.172 1.08984 13.004 1.08984 14.8359C1.08984 15.5037 1.52571 16.4554 3.60218 17.197C5.05209 17.7148 6.96906 18 9 18C12.7978 18 16.9102 16.9287 16.9102 14.8359C16.9102 13.0037 13.8254 12.1726 12.005 11.8928ZM5.17672 8.6465C5.17093 8.63744 5.16487 8.62856 5.15855 8.61985C4.55924 7.79537 4.25391 6.81824 4.25391 5.83594C4.25391 3.19859 6.37755 1.05469 9 1.05469C11.617 1.05469 13.7461 3.19954 13.7461 5.83594C13.7461 6.81982 13.4465 7.7638 12.8796 8.56656C12.8288 8.63357 13.0939 8.22182 9 14.6457L5.17672 8.6465ZM9 16.9453C4.85177 16.9453 2.14453 15.726 2.14453 14.8359C2.14453 14.2377 3.53559 13.2541 6.61809 12.8707L8.55527 15.9104C8.60291 15.9852 8.66863 16.0467 8.74636 16.0893C8.82408 16.132 8.91131 16.1543 8.99996 16.1543C9.08862 16.1543 9.17584 16.132 9.25357 16.0893C9.3313 16.0467 9.39702 15.9852 9.44466 15.9104L11.3818 12.8707C14.4644 13.2541 15.8555 14.2377 15.8555 14.8359C15.8555 15.7184 13.1726 16.9453 9 16.9453Z" />
                                <path d="M9 3.19922C7.54611 3.19922 6.36328 4.38205 6.36328 5.83594C6.36328 7.28982 7.54611 8.47266 9 8.47266C10.4539 8.47266 11.6367 7.28982 11.6367 5.83594C11.6367 4.38205 10.4539 3.19922 9 3.19922ZM9 7.41797C8.12767 7.41797 7.41797 6.70827 7.41797 5.83594C7.41797 4.96361 8.12767 4.25391 9 4.25391C9.87233 4.25391 10.582 4.96361 10.582 5.83594C10.582 6.70827 9.87233 7.41797 9 7.41797Z" />
                              </svg>
                              United State
                            </span>
                          </div>
                          <h1>Lets Get Adventure To Life.</h1>
                          <p>Welcome To Shuvam Travels</p>
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
              <SwiperSlide className="swiper-slide">
                <div
                  className="home1-banner-wrapper"
                  style={{
                    borderRadius: '30px',
             
                    backgroundImage:
                      "linear-gradient(180deg, rgba(16, 12, 8, 0.4) 0%, rgba(16, 12, 8, 0.4) 100%), url(assets/img/home1/home1-banner-img2.png)",
                  }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="home1-banner-content">
                          <div className="eg-tag">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={18}
                                height={18}
                                viewBox="0 0 18 18"
                              >
                                <path d="M12.005 11.8928C13.9204 8.88722 13.6796 9.2622 13.7348 9.18383C14.4322 8.20023 14.8008 7.04257 14.8008 5.83594C14.8008 2.63602 12.2041 0 9 0C5.80634 0 3.19922 2.63081 3.19922 5.83594C3.19922 7.0418 3.57553 8.22976 4.29574 9.22662L5.99491 11.8929C4.17822 12.172 1.08984 13.004 1.08984 14.8359C1.08984 15.5037 1.52571 16.4554 3.60218 17.197C5.05209 17.7148 6.96906 18 9 18C12.7978 18 16.9102 16.9287 16.9102 14.8359C16.9102 13.0037 13.8254 12.1726 12.005 11.8928ZM5.17672 8.6465C5.17093 8.63744 5.16487 8.62856 5.15855 8.61985C4.55924 7.79537 4.25391 6.81824 4.25391 5.83594C4.25391 3.19859 6.37755 1.05469 9 1.05469C11.617 1.05469 13.7461 3.19954 13.7461 5.83594C13.7461 6.81982 13.4465 7.7638 12.8796 8.56656C12.8288 8.63357 13.0939 8.22182 9 14.6457L5.17672 8.6465ZM9 16.9453C4.85177 16.9453 2.14453 15.726 2.14453 14.8359C2.14453 14.2377 3.53559 13.2541 6.61809 12.8707L8.55527 15.9104C8.60291 15.9852 8.66863 16.0467 8.74636 16.0893C8.82408 16.132 8.91131 16.1543 8.99996 16.1543C9.08862 16.1543 9.17584 16.132 9.25357 16.0893C9.3313 16.0467 9.39702 15.9852 9.44466 15.9104L11.3818 12.8707C14.4644 13.2541 15.8555 14.2377 15.8555 14.8359C15.8555 15.7184 13.1726 16.9453 9 16.9453Z" />
                                <path d="M9 3.19922C7.54611 3.19922 6.36328 4.38205 6.36328 5.83594C6.36328 7.28982 7.54611 8.47266 9 8.47266C10.4539 8.47266 11.6367 7.28982 11.6367 5.83594C11.6367 4.38205 10.4539 3.19922 9 3.19922ZM9 7.41797C8.12767 7.41797 7.41797 6.70827 7.41797 5.83594C7.41797 4.96361 8.12767 4.25391 9 4.25391C9.87233 4.25391 10.582 4.96361 10.582 5.83594C10.582 6.70827 9.87233 7.41797 9 7.41797Z" />
                              </svg>
                              France
                            </span>
                          </div>
                          <h2>Achieve Mountaineering Above Horizon</h2>
                          <p>
                          A Companion Team Records Of Unexpected Success And Bravery Image Of Your Life Time
                          </p>
                          <div className="banner-content-bottom">
                            <Link href="/package/package-category" className="primary-btn1">
                              Book A Trip{" "}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
  
            </div>
          </Swiper>
          {/* <div className="slider-btn-grp">
            <div className="slider-btn home1-banner-prev">
              <i className="bi bi-arrow-left" />
            </div>
            <div className="slider-btn home1-banner-next">
              <i className="bi bi-arrow-right" />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Banner1;
