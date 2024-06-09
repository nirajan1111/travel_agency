"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from 'axios'

const Page = () => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch("/api/blog");
      const blogResponse = await response.json();

      setLoading(false);
      setBlogData(blogResponse.data || []);
    };

    fetchData();
  }, []);
  const handleDelete = async (id) => {
  
    try {
      const response = await axios.delete("/api/blog", {
        data: { id: id }
      });
    } catch (error) {
      
    }
  }
  const BlogBody = ({ data }) => {
    return (

      <td data-label="Heading" style={{width:'80%'}}>
        <div className="product-name">
          <div className="img">
            <img src={data.image} alt=""  width={100}/>
          </div>
          <div className="product-content">
            <h6>
              <a href="#">{data.title}</a>
            </h6>
          </div>
        </div>
      </td>

    );
  };
  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="recent-listing-area">
          <div className="row mb-4">
            <div className="col-xl-6">
              <h2 className="fs-30">Blogs Info</h2>
            </div>
            <div className="col-xl-6 d-flex justify-content-end">
              <Link
                href="/admin-dashboard/blogs/new"
                className="primary-btn1 two"
              >
                Add Blogs
              </Link>
            </div>
          </div>

          <div className="recent-listing-table">
            <table style={{
              width:'100%'
            }}>
              <thead>
                <tr>
                  <th>Heading</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>

                {blogData.length > 0 && blogData.map((blog) => {
                  return (<tr>
                    <BlogBody data={blog} />
                    <td data-label="action">
                      <button onClick={() => handleDelete(blog._id)} className="btn btn-danger">Delete</button>
                    </td>
                  </tr>

                  )
                })}

              </tbody>
            </table>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
