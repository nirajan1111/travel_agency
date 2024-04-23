'use client'
import Breadcrumb from "@/components/common/Breadcrumb";
import Link from "next/link";
import React ,{useState,useEffect}from "react";
import axios from "axios";
const page = () => {  
  const [destinationData, setDestinationData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  useEffect(() => {

    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get("/api/destination");
      console.log("destination data ", response.data.data);
      setLoading(false);
      setDestinationData(response.data.data || []);
    };

    fetchData();
  }, []);
  return (
    <>
      <Breadcrumb pagename="destination" pagetitle="Destination" />
      <div className="destination-gallery-section pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-4 gy-5 mb-70">
          {
            destinationData.map((destination, index) => (
              (

                <div className="col-lg-4 col-sm-6" key={index}>
                  <div className="destination-card">
                    <img src={destination.image} alt="" />
                    <div className="overlay" />
                    <div className="card-title">
                      <h4>{destination.name}</h4>
                    </div>
                    <div className="content">
                      <h4>
                        <Link href="/destination/destination-details">
                        {destination.name}
                        </Link>
                      </h4>
                      <div className="eg-tag">
                        <span>{destination.tourCount}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            ))
          }



          </div>
          <div className="row">
            <div className="col-lg-12">
              <nav className="inner-pagination-area">
                <ul className="pagination-list">
                  <li>
                    <a href="#" className="shop-pagi-btn">
                      <i className="bi bi-chevron-left" />
                    </a>
                  </li>
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#" className="active">
                      2
                    </a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-three-dots" />
                    </a>
                  </li>
                  <li>
                    <a href="#">6</a>
                  </li>
                  <li>
                    <a href="#" className="shop-pagi-btn">
                      <i className="bi bi-chevron-right" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
