"use client";
import React, { useState } from "react";
import { UploadButton } from "@/uitils/uploadthing";
import SelectComponent from "@/uitils/SelectComponent";
const Page = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!isComplete) {
      console.error("No file selected");
      return;
    }

    const bodyJson = {
      name: name,
      image: file,
    };
    

    try {
      const response = await fetch("/api/destination", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyJson),
      });

      const data = await response.json();
      

      
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
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
                  <h6>Destination details</h6>
                </div>
                <form>
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="form-inner mb-30">
                        <label>Name</label>
                        <input
                          type="text"
                          placeholder="Example: Beyond horizon"
                          value={name}
                          onChange={(e)=>setName(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="upload-img-area">
                    <div
                      className="upload-img-wrapper"
                      style={{ marginRight: "20px" }}
                    >
                      <div className="drag-area">
                        {/* <button type="button" className="upload-btn">
                          <i className="bi bi-plus-lg" />
                        </button> */}
                        <UploadButton
                          endpoint="imageUploader"
                          onClientUploadComplete={(res) => {
                            // Do something with the response
                            
                            setFile(res[0].url);
                            setIsComplete(true);
                          }}
                          onUploadError={(error) => {
                            // Do something with the error.
                            alert(`ERROR! ${error.message}`);
                          }}
                        />
                      </div>
                    </div>
                    <div className="upload-img-area-content">
                      <h6>Upload Your Image</h6>
                      <p>Image required size 648*792, JPGE or PNG format.</p>
                    </div>
                  </div>

                  <div className="form-inner">
                    <button
                      type="submit"
                      className="primary-btn3"
                      onClick={handleUpload}
                    >
                      Add Destination
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
