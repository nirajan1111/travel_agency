'use client'
import React, { useState ,useEffect} from "react";

import axios from 'axios'
const Page = () => {
  const [formData, setFormData] = useState([
   ]);
  useEffect(() => {
    const fetchData = async () => {
      try{
      const response = await axios.get("/api/contact");

      setFormData(response.data.data || []);
      }
      catch(error){
        
      }
    }
    fetchData();
  }, []);

  const handleDelete = async (id) => {

    try {
      const response = await axios.delete("/api/contact",{
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
              <h2 className="fs-30">Contact</h2>
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
                <th>Message</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {formData.map((contact, index) => (
                <tr key={contact._id}>
                  <td>{index + 1}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.message}</td>
                  <td>{contact.phone}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => handleDelete(contact._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
