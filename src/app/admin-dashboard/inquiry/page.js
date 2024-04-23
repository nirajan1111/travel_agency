'use client'
import Link from "next/link";
import React from "react";

const Page = () => {
  const [inquiries, setInquiries] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/inquiry")
      .then((res) => res.json())
      .then((data) => {
        setInquiries(data.data);
      });
  }, []);
  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="recent-listing-area">
          <div className="row mb-4">
            <div className="col-xl-6">
              <h2 className="fs-30">Inquiry Information</h2>
            </div>
          </div>

          <div className="recent-listing-table">
            <div className="table-responsive">
              <table className="eg-table2">
                <thead>
                  <tr>
                  <th>S.N.</th>
                    <th>name</th>
                    <th>email</th>
                    <th>number</th>
                    <th>message</th>
                    <th>package</th>
                  </tr>
                </thead>
                <tbody>
                  {inquiries.map((inquiry, index) => (
                    <tr key={index+1}>
                    <td>{index}</td>
                    <td data-label="name">{inquiry.name}</td>
                      <td data-label="email">{inquiry.email}</td>
                      <td data-label="number">{inquiry.number}</td>
                      <td data-label="message" className="wrap-text">{inquiry.message}</td>
                      <td data-label="package">
                        <a href={`/package/${inquiry.id}`}>
                          <a className="btn btn-primary">View</a>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
