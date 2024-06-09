'use client'
import Link from "next/link";
import React from "react";
import axios from 'axios'

const Page = () => {
  const [bookings, setBookings] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/booking")
      .then((res) => res.json())
      .then((data) => {
        setBookings(data.data);
      });
  }, []);
  const handleDelete = async (id) => {

    try {
      const response = await axios.delete("/api/booking",{
        data: { id: id }
      });
    } catch (error) {
      
    }
  }
  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="recent-listing-area">
          <div className="row mb-4">
            <div className="col-xl-6">
              <h2 className="fs-30">booking Information</h2>
            </div>
          </div>

          <div className="recent-listing-table">
            <div className="table-responsive">
              <table className="eg-table2">
                <thead>
                  <tr>
                  <th>S.N.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Passport</th>
                    <th>Phone</th>
                    <th>Persons</th>
                    <th>Arrival</th>
                    <th>For</th>
                    <th>Package</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking, index) => (
                    <tr key={index+1}>
                    <td>{index+1}</td>
                    <td data-label="name">{booking.name}</td>
                      <td data-label="email">{booking.email}</td>
                      <td data-label="passport">{booking.passport}</td>
                      <td data-label="phone">{booking.phone}</td>
                      <td data-label="persons">{booking.persons}</td>
                      <td data-label="arrival">{booking.arrival ? booking.arrival.split('T')[0] : 'N/A'}</td>
                      <td data-label="for">{booking.for_ ? booking.for_.split('T')[0] : 'N/A'}</td>
                      
                      <td data-label="package">
                        <a href={`/package/${booking.id}`}>
                          <a className="btn btn-primary">View</a>
                        </a>
                      </td>
                      <td data-label="action">
                        <button onClick={()=>handleDelete(booking._id)} className="btn btn-danger">Delete</button>
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
