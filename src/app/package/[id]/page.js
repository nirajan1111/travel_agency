"use client";
import React, { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import Breadcrumb from "@/components/common/Breadcrumb";
import QuantityCounter from "@/uitils/QuantityCounter";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import DatePicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Topbar from "@/components/topbar/Topbar2";
import axios from "axios";
const Page = ({ params: { id } }) => {
  const [inquiry, setInquiry] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
    id: id,
  })
  const [booking, setBooking] = useState({
    name: "",
    email: "",
    passport: "",
    phone: "",
    persons: "",
    arrival: "",
    for_: "",
    id: id,
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking(prevBooking => ({
      ...prevBooking,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (booking.name && booking.email && booking.passport) {
      const response = axios.post("/api/booking", booking);
      
      setBooking({
        name: "",
        email: "",
        passport: "",
        phone: "",
        persons: "",
        arrival: "",
        for_: "",
        id: id,
      })
    } else {
    }
  };
  const handleSubmitInquiry = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inquiry),
      });
      const data = await response.json();
      
    } catch (error) {
      
    }
  };

  const [isOpen, setOpen] = useState(false);
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });
  const images = [
    {
      id: 1,
      imageBig: "/assets/img/innerpage/package-01.jpg",
    },
    {
      id: 2,
      imageBig: "/assets/img/innerpage/package-02.jpg",
    },
    {
      id: 3,
      imageBig: "/assets/img/innerpage/package-03.jpg",
    },
    {
      id: 4,
      imageBig: "/assets/img/innerpage/package-04.jpg",
    },
    {
      id: 5,
      imageBig: "/assets/img/innerpage/package-05.jpg",
    },
    {
      id: 6,
      imageBig: "/assets/img/innerpage/package-06.jpg",
    },
  ];
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(`/api/package/${id}`);
      const landingResponse = await response.json();
      
      setLoading(false);
      setData(landingResponse.data || []);
    };

    fetchData();
  }, []);

  return (
    <>
      <Topbar />
      <Header />
      <Breadcrumb pagename="Package Details" pagetitle="Package Details" />
      <div className="package-details-area pt-120 mb-120 position-relative">
        <div className="container">
          <div className="others-image-wrap d-none">
            <a
              href="assets/img/innerpage/package-01.jpg"
              data-fancybox="images"
            >
              <img src="/assets/img/innerpage/blog-grid-img3.jpg" alt="" />
            </a>
            <a
              href="assets/img/innerpage/package-02.jpg"
              data-fancybox="images"
            >
              <img src="/assets/img/innerpage/blog-grid-img3.jpg" alt="" />
            </a>
            <a
              href="assets/img/innerpage/package-03.jpg"
              data-fancybox="images"
            >
              <img src="/assets/img/innerpage/blog-grid-img3.jpg" alt="" />
            </a>
            <a
              href="assets/img/innerpage/package-04.jpg"
              data-fancybox="images"
            >
              <img src="/assets/img/innerpage/blog-grid-img3.jpg" alt="" />
            </a>
            <a
              href="assets/img/innerpage/package-05.jpg"
              data-fancybox="images"
            >
              <img src="/assets/img/innerpage/blog-grid-img3.jpg" alt="" />
            </a>
          </div>
          <div className="row g-xl-4 gy-5">
            <div className="col-xl-8">
              <h2>{data?.heading}</h2>
              <div className="tour-price">
                <h3>${data?.price}/</h3>
                <span>per person</span>
              </div>
              <ul className="tour-info-metalist">
                <li>
                  <svg
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14C5.14348 14 3.36301 13.2625 2.05025 11.9497C0.737498 10.637 0 8.85652 0 7C0 5.14348 0.737498 3.36301 2.05025 2.05025C3.36301 0.737498 5.14348 0 7 0C8.85652 0 10.637 0.737498 11.9497 2.05025C13.2625 3.36301 14 5.14348 14 7ZM7 3.0625C7 2.94647 6.95391 2.83519 6.87186 2.75314C6.78981 2.67109 6.67853 2.625 6.5625 2.625C6.44647 2.625 6.33519 2.67109 6.25314 2.75314C6.17109 2.83519 6.125 2.94647 6.125 3.0625V7.875C6.12502 7.95212 6.14543 8.02785 6.18415 8.09454C6.22288 8.16123 6.27854 8.2165 6.3455 8.25475L9.408 10.0048C9.5085 10.0591 9.62626 10.0719 9.73611 10.0406C9.84596 10.0092 9.93919 9.93611 9.99587 9.83692C10.0525 9.73774 10.0682 9.62031 10.0394 9.50975C10.0107 9.39919 9.93982 9.30426 9.842 9.24525L7 7.62125V3.0625Z"></path>
                  </svg>
                  Duration : {data?.duration} days
                </li>
                <li>
                  <svg
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 7C7.92826 7 8.8185 6.63125 9.47487 5.97487C10.1313 5.3185 10.5 4.42826 10.5 3.5C10.5 2.57174 10.1313 1.6815 9.47487 1.02513C8.8185 0.368749 7.92826 0 7 0C6.07174 0 5.1815 0.368749 4.52513 1.02513C3.86875 1.6815 3.5 2.57174 3.5 3.5C3.5 4.42826 3.86875 5.3185 4.52513 5.97487C5.1815 6.63125 6.07174 7 7 7ZM14 12.8333C14 14 12.8333 14 12.8333 14H1.16667C1.16667 14 0 14 0 12.8333C0 11.6667 1.16667 8.16667 7 8.16667C12.8333 8.16667 14 11.6667 14 12.8333Z"></path>
                  </svg>
                  Activity: {data?.activity}
                </li>
                <li>
                  <svg
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14 0.43748C14 0.372778 13.9856 0.308889 13.9579 0.250418C13.9302 0.191947 13.8898 0.140348 13.8398 0.0993396C13.7897 0.0583312 13.7312 0.0289339 13.6684 0.0132656C13.6057 -0.00240264 13.5402 -0.00395173 13.4768 0.00872996L9.1875 0.86623L4.89825 0.00872996C4.84164 -0.00258444 4.78336 -0.00258444 4.72675 0.00872996L0.35175 0.88373C0.252608 0.903546 0.163389 0.957088 0.099263 1.03525C0.0351366 1.11342 6.10593e-05 1.21138 0 1.31248L0 13.5625C3.90711e-05 13.6272 0.0144289 13.6911 0.0421328 13.7495C0.0698367 13.808 0.110165 13.8596 0.160212 13.9006C0.210259 13.9416 0.268779 13.971 0.331556 13.9867C0.394332 14.0024 0.459803 14.0039 0.52325 13.9912L4.8125 13.1337L9.10175 13.9912C9.15836 14.0025 9.21664 14.0025 9.27325 13.9912L13.6482 13.1162C13.7474 13.0964 13.8366 13.0429 13.9007 12.9647C13.9649 12.8865 13.9999 12.7886 14 12.6875V0.43748ZM4.375 12.3287V0.97123L4.8125 0.88373L5.25 0.97123V12.3287L4.89825 12.2587C4.84165 12.2474 4.78335 12.2474 4.72675 12.2587L4.375 12.3287ZM8.75 13.0287V1.67123L9.10175 1.74123C9.15836 1.75254 9.21664 1.75254 9.27325 1.74123L9.625 1.67123V13.0287L9.1875 13.1162L8.75 13.0287Z"
                    ></path>
                  </svg>
                  Destination: {data?.destination}
                </li>
              </ul>
              <h4>Overview</h4>
              <div dangerouslySetInnerHTML={{ __html: data?.overview }} />

              <h4>Included and Excluded</h4>
              <div className="includ-and-exclud-area mb-20">
                <ul>
                  {data?.included.map((dat) => (
                    <li>
                      <i className="bi bi-check-lg" />
                      {dat}
                    </li>
                  ))}
                </ul>
                <ul className="exclud">
                  {data?.excluded.map((dat) => (
                    <li>
                      <i className="bi bi-x-lg" /> {dat}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="highlight-tour mb-20">
                <h4>Highlights of the Tour</h4>
                <ul>
                  {data?.highlights.map((dat) => (
                    <li>
                      <span>
                        <i className="bi bi-check" />
                      </span>{" "}
                      {dat}
                    </li>
                  ))}
                </ul>
              </div>
              <h4>Itinerary</h4>
              <div className="accordion tour-plan" id="tourPlan">
                {data?.itinerary.map((dat, index) => (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header" id={`heading${index}`}>
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <span>Day {index + 1} :</span> {dat.title}
                      </button>
                    </h2>
                    <div
                      id={`collapse${index}`}
                      className="accordion-collapse collapse show"
                      aria-labelledby={`heading${index}`}
                      data-bs-parent="#tourPlan"
                    >
                      <div
                        className="accordion-body"
                        dangerouslySetInnerHTML={{ __html: dat.paragraph }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>


            </div>
            <div className="col-xl-4">
              <div className="booking-form-wrap mb-40">
                <h4>Book Your Tour</h4>
                <p>
                  Reserve your ideal trip early for a hassle-free trip; secure
                  comfort and convenience!
                </p>
                <div className="nav nav-pills mb-40" role="tablist">
                  <button
                    className="nav-link show active"
                    id="v-pills-booking-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-booking"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-booking"
                    aria-selected="true"
                  >
                    Online Booking
                  </button>
                  <button
                    className="nav-link"
                    id="v-pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-contact"
                    aria-selected="false"
                  >
                    Inquiry Form
                  </button>
                </div>
                <div className="tab-content" id="v-pills-tabContent2">
                  <div
                    className="tab-pane fade active show"
                    id="v-pills-booking"
                    role="tabpanel"
                    aria-labelledby="v-pills-booking-tab"
                  >
                    <div className="sidebar-booking-form">
                      <div className="tour-date-wrap mb-50">
                        <h6>Select Your Booking Date:</h6>
                        <form onSubmit={handleSubmit}>
                          <div className="form-inner mb-20">
                            <label>
                              Full Name <span>*</span>
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={booking.name}
                              onChange={handleChange}
                              placeholder="Enter your full name"
                              required
                            />
                          </div>
                          <div className="form-inner mb-20">
                            <label>
                              Email Address <span>*</span>
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={booking.email}
                              onChange={handleChange}
                              placeholder="Enter your email address"
                              required
                            />
                          </div>
                          <div className="form-inner mb-20">
                            <label>
                              Passport Id <span>*</span>
                            </label>
                            <input
                              type="text"
                              name="passport"
                              value={booking.passport}
                              onChange={handleChange}
                              placeholder="Enter your passport ID"
                              required
                            />
                          </div>
                          <div className="form-inner mb-20">
                            <label>
                              Phone Number <span>*</span>
                            </label>
                            <input
                              type="text"
                              name="phone"
                              value={booking.phone}
                              onChange={handleChange}
                              placeholder="Enter your phone number"

                            />
                          </div>
                          <div className="form-inner mb-20">
                            <label>
                              Number of persons:<span>*</span>
                            </label>
                            <input
                              type="number"
                              name="persons"
                              value={booking.persons}
                              onChange={handleChange}
                              placeholder="Enter number of persons"

                            />
                          </div>
                          <div className="form-inner mb-20">
                            <label>
                              Arrival date<span>*</span>
                            </label>
                            <input
                              type="date"
                              name="arrival"
                              value={booking.arrival}
                              onChange={handleChange}
                              placeholder="Arrival Date"

                            />
                          </div>
                          <div className="form-inner mb-20">
                            <label>
                              For date<span>*</span>
                            </label>
                            <input
                              type="date"
                              name="for_"
                              value={booking.for_}
                              onChange={handleChange}
                              placeholder="For Date"

                            />
                          </div>
                          <div className="total-price">
                            <span>Total Price:</span> $470
                          </div>
                          <button type="submit" className="primary-btn1 two">
                            Book Now
                          </button>
                        </form>

                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-contact"
                    role="tabpanel"
                    aria-labelledby="v-pills-contact-tab"
                  >
                    <div className="sidebar-booking-form">
                      <form onSubmit={handleSubmitInquiry}>
                        <div className="form-inner mb-20">
                          <label>
                            Full Name <span>*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter your full name"
                            value={inquiry.name}
                            onChange={(e) =>
                              setInquiry({ ...inquiry, name: e.target.value })
                            }
                            required
                          />
                        </div>
                        <div className="form-inner mb-20">
                          <label>
                            Email Address <span>*</span>
                          </label>
                          <input
                            type="email"
                            placeholder="Enter your email address"
                            value={inquiry.email}
                            onChange={(e) =>
                              setInquiry({ ...inquiry, email: e.target.value })
                            }
                          />
                        </div>
                        <div className="form-inner mb-20">
                          <label>
                            Phone Number <span>*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter your phone number"
                            value={inquiry.number}
                            onChange={(e) =>
                              setInquiry({ ...inquiry, number: e.target.value })
                            }
                          />
                        </div>
                        <div className="form-inner mb-30">
                          <label>
                            Write Your Massage <span>*</span>
                          </label>
                          <textarea
                            placeholder="Write your quiry"
                            defaultValue={""}
                            value={inquiry.message}
                            onChange={(e) =>
                              setInquiry({ ...inquiry, message: e.target.value })
                            }
                          />
                        </div>
                        <div className="form-inner">
                          <button type="submit" className="primary-btn1 two">
                            Submit Now
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Lightbox
          className="img-fluid"
          open={isOpenimg.openingState}
          plugins={[Fullscreen]}
          index={isOpenimg.openingIndex}
          close={() => setOpenimg(false)}
          styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
          slides={images.map(function (elem) {
            return { src: elem.imageBig };
          })}
        />
        <React.Fragment>
          <ModalVideo
            channel="youtube"
            onClick={() => setOpen(true)}
            isOpen={isOpen}
            animationSpeed="350"
            videoId="r4KpWiK08vM"
            ratio="16:9"
            onClose={() => setOpen(false)}
          />
        </React.Fragment>
      </div>
      <Footer />
    </>
  );
};

export default Page;
