"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const CKEditor = dynamic(
  () => import("@ckeditor/ckeditor5-react").then((mod) => mod.CKEditor),
  { ssr: false } // This ensures it won't be server-side rendered
);

const ClassicEditor = dynamic(
  () => import("@ckeditor/ckeditor5-build-classic"),
  { ssr: false }
);

// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { UploadButton } from "@/uitils/uploadthing";
const Page = () => {
  const [overview, setOverview] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isComplete) {
      console.error("No file selected");
      return;
    }
    const jsonData = {
      image: file,
      title: title,
      paragraph: overview
    };
    try {
      const response = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jsonData),
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
                  <h6>Blog details</h6>
                </div>
                <form>
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="form-inner mb-30">
                        <label>Heading</label>
                        <input
                          type="text"
                          placeholder="Example: Beyond horizon"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="form-inner mb-30">
                        <label>Paragraph</label>
                        <CKEditor
                          editor={ClassicEditor}
                          data={overview}
                          onReady={(editor) => {
                            // You can store the "editor" and use when it is needed.
                          }}
                          onChange={(event, editor) => {
                            const data = editor.getData();

                            setOverview(data);
                          }}
                        />
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
                    <button
                      type="submit"
                      className="primary-btn3"
                      onClick={onSubmit}
                    >
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
