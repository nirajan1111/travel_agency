"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [packageData, setPackageData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch("/api/package");
      const packageResponse = await response.json();
      
      setLoading(false);
      setPackageData(packageResponse.data || []);
    };

    fetchData();
  }, []);
  const PackageBody = ({ data }) => {
    return (
      <tr>
        <td data-label="Heading">
          <div className="product-name">
            <div className="product-content">
              <h6>{data.heading}</h6>
            </div>
          </div>
        </td>
        <td data-label="Paragraph">{data.price}</td>
        <td data-label="Paragraph">{data.duration}</td>
        <td data-label="Paragraph">{data.activity}</td>
      </tr>
    );
  };
  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="recent-listing-area">
          <div className="row mb-4">
            <div className="col-xl-6">
              <h2 className="fs-30">Tour Information</h2>
            </div>
            <div className="col-xl-6 d-flex justify-content-end">
              <Link
                href="/admin-dashboard/tours/new"
                className="primary-btn1 two"
              >
                Add Tours
              </Link>
            </div>
          </div>

          <div className="recent-listing-table">
            <table className="eg-table2">
              <thead>
                <tr>
                  <th>Heading</th>
                  <th>Price</th>
                  <th>duration</th>
                  <th>activity</th>
                </tr>
              </thead>
              <tbody>
                {packageData.map((pack) => (
                  <PackageBody data={pack} />
                ))}
              </tbody>
            </table>
            <div className="pagination-area">
              <ul className="paginations">
                <li className="page-item active">
                  <a href="#">1</a>
                </li>
                <li className="page-item">
                  <a href="#">2</a>
                </li>
                <li className="page-item">
                  <a href="#">3</a>
                </li>
              </ul>
              <ul className="paginations-buttons">
                <li>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={7}
                      height={14}
                      viewBox="0 0 7 14"
                    >
                      <path d="M0 7.00008L7 0L2.54545 7.00008L7 14L0 7.00008Z" />
                    </svg>
                    Prev
                  </a>
                </li>
                <li>
                  <a href="#">
                    Next
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={7}
                      height={14}
                      viewBox="0 0 7 14"
                      fill="none"
                    >
                      <path d="M7 7.00008L0 0L4.45455 7.00008L0 14L7 7.00008Z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
