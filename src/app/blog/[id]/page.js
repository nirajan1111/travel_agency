"use client";
import Link from "next/link";
import Breadcrumb from "@/components/common/Breadcrumb";
import Newslatter from "@/components/common/Newslatter";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Topbar2 from "@/components/topbar/Topbar2";
import { useEffect, useState } from "react";




const page = ({ params: { id } }) => {
    console.log(id);
    console.log('this is so cool i am fine')
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(`/api/blog/${id}`);
      const landingResponse = await response.json();
      
      console.log("products data ", landingResponse.data);
      setLoading(false);
      setData(landingResponse.data || []);
    };

    fetchData();
  }, []);
  return (
    <>
      <Topbar2 />
      <Header />
      <Breadcrumb pagename="BLog Details" pagetitle="Blog Details" />
      <div className="blog-details-section pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-4 gy-5 justify-content-center">
            <div className="col-lg-8">
              <div className="post-thumb mb-30">
                <img src={data?.image} alt="" />
              </div>
              <div className="post-title mb-40">
                <h1>{data?.title}</h1>
              </div>
              <div dangerouslySetInnerHTML={{ __html: data?.paragraph }} />
            </div>
          </div>
        </div>
      </div>
      <Newslatter />
      <Footer />
    </>
  );
};

export default page;
