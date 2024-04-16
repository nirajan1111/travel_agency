"use client";
import React from "react";

import SelectComponent from "@/uitils/SelectComponent";
const Page = () => {
  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="dashboard-profile-wrapper">
          <div className="tab-content w-100" id="pills-tabContent">
            <div
              className="tab-pane fade active show"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="dashboard-profile-tab-content">
                <div className="profile-tab-content-title">
                  <h6>Blog details</h6>
                </div>
                <form>
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="form-inner mb-30">
                        <label>Heading</label>
                        <input type="text" placeholder="Example: Beyond horizon" />
                      </div>
                    </div>
                    <div className="col-xl-12">
                    <div className="form-inner mb-30">
                        <label>Paragraph</label>
                        <textarea type="text" placeholder="Add the description /paragraph"></textarea>
                      </div>
                    </div>
              
                 
                 
                  </div>
                  <div className="upload-img-area">
                    <div className="upload-img-wrapper">
                      <div className="drag-area">
                        <button type="button" className="upload-btn">
                          <i className="bi bi-plus-lg" />
                        </button>
                        <input type="file" hidden />
                      </div>
                    </div>
                    <div className="upload-img-area-content">
                      <h6>Upload Your Image</h6>
                      <p>Image required size 1780*828, JPGE or PNG format.</p>
                    </div>
                  </div>
               
                  <div className="form-inner">
                    <button type="submit" className="primary-btn3">
                      Add Blogs
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
