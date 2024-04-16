"use client";
import React, { useState } from "react";
// import { UploadButton } from '@uploadthing/react';
import SelectComponent from "@/uitils/SelectComponent";
import { UploadButton } from "@/uitils/uploadthing";
const Page = () => {
  const [heading, setHeading] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [file, setFile] = useState("");
  const [isComplete, setIsComplete] = useState(false);


  const handleUpload = async (e) => {
    e.preventDefault();
    // Send the selected file to the server-side for further processing
    if (!isComplete) {
      console.error("No file selected");
      return;
    }

    const bodyJson = {
      heading: heading,
      paragraph: paragraph,
      image: file,
    }

    try {
      const response = await fetch("/api/landing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyJson),
      });

      const data = await response.json();

      console.log("Upload response:", data); // Handle success/error messages
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
                  <h6>Landing details</h6>
                </div>
                <form>
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="form-inner mb-30">
                        <label>Heading</label>
                        <input
                          type="text"
                          placeholder="Example: Beyond horizon"
                          value={heading}
                          onChange={(e) => setHeading(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="form-inner mb-30">
                        <label>Paragraph</label>
                        <textarea
                          type="text"
                          placeholder="Add the description /paragraph"
                          value={paragraph}
                          onChange={(e) => setParagraph(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="upload-img-area">
                    <div className="upload-img-wrapper">
                      <div className="drag-area">
                        <button type="button" className="upload-btn">
                          <i className="bi bi-plus-lg" />
                        </button>
                        <UploadButton
                          endpoint="imageUploader"
                          onClientUploadComplete={(res) => {
                            // Do something with the response
                            console.log("Files: ", res);
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
                      <p>Image required size 1780*828, JPGE or PNG format.</p>
                    </div>
                  </div>

                  <div className="form-inner">
                    {/* <UploadButton  disabled={!file} className='primary-btn3 h-12 w-12'/> */}
                    <button
                      type="submit"
                      className="primary-btn3"
                      onClick={handleUpload}
                    >
                      Add landing
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
