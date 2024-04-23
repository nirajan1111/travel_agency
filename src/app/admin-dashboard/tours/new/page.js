"use client";
import React, { useEffect, useState } from "react";

import SelectComponent from "@/uitils/SelectComponent";
import { UploadButton } from "@/uitils/uploadthing";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const Page = () => {
  const [destination, setDestination] = useState([]);
  const [heading, setHeading] = useState('');
  const [price, setPrice] = useState('');
  const [duration, setDuration] = useState('');
  const [activity, setActivity ] = useState('');
  const [dest, setDest] = useState('');
  const [overview, setOverview] = useState('');
  const [featureInclude, setFeatureInclude] = useState('');
  const [featureExclude, setFeatureExclude] = useState('');
  const [highlights, setHighlights] = useState('');
  const [items, setItems] = useState([
    {
      title: "",
      paragraph: "",
    },
  ]);
  const [file,setFile] = useState('');
  const [isComplete, setIsComplete] = useState(false);



  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedItems = [...items];
    updatedItems[index][name] = value;
    setItems(updatedItems);
  };

  const addNewItem = () => {
    setItems([...items, { title: "", paragraph: "" }]);
  };
  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/destination");
      const destinationResponse = await response.json();

      console.log(destinationResponse);
      setDestination(destinationResponse.data || []);
    };

    fetchData();
  }, []);
  const onSubmit = async(e) =>{
    e.preventDefault();
    if (!isComplete) {
      console.error("No file selected");
      return;
    }
    const jsonData = {
      heading: heading,
      price: price,
      duration: duration,
      activity: activity,
      destination: dest,
      overview: overview,
      included: featureInclude.split(",,"),
      excluded: featureExclude.split(',,'),
      highlights: highlights.split(',,'),
      itinerary: items,
      image: file,
    }
    try {
      const response = await fetch("/api/package", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jsonData),
      });

      const data = await response.json();

      console.log("Upload response:", data); // Handle success/error messages
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  }
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
                  <h6>Tour details</h6>
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
                          onChange={(e)=>setHeading(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-xl-3">
                      <div className="form-inner mb-30">
                        <label>price</label>
                        <input
                          type="text"
                          placeholder="Example: Beyond horizon"
                          value={price}
                          onChange={(e)=>setPrice(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-xl-3">
                      <div className="form-inner mb-30">
                        <label>duration</label>
                        <input
                          type="text"
                          placeholder="Example: Beyond horizon"
                          value={duration}
                          onChange={(e)=>setDuration(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-xl-3">
                      <div className="form-inner mb-30">
                        <label>activity</label>
                        <input
                          type="text"
                          placeholder="Example: Beyond horizon"
                          value={activity}
                          onChange={(e)=>setActivity(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-xl-3">
                      <div className="form-inner mb-30">
                        <label>Destination</label>
                        <SelectComponent
                          type="name"
                          options={destination}
                          placeholder={["Select Visa"]}
                          setValue={setDest}
                        />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="form-inner mb-30">
                        <label>Overview</label>
                        <CKEditor
                          editor={ClassicEditor}
                          data={overview}
                          onReady={(editor) => {
                            // You can store the "editor" and use when it is needed.
                          }}
                          onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log('data is ',data)
                            // console.log({ event, editor, data })
                            setOverview(data);
                          }}
                
                        />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="form-inner mb-30">
                        <label>Features Included</label>
                        <textarea
                          type="text"
                          placeholder="Example: Beyond horizon"
                          value={featureInclude}
                          onChange={(e)=>setFeatureInclude(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="form-inner mb-30">
                        <label>Features Excluded</label>
                        <textarea placeholder="Example: Beyond horizon" value={featureExclude} onChange={(e)=>setFeatureExclude(e.target.value)}></textarea>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="form-inner mb-30">
                        <label>Highlights</label>
                        <textarea placeholder="Example: Beyond horizon" value={highlights} onChange={(e)=>setHighlights(e.target.value)}></textarea>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="form-inner mb-30">
                        <label>Itinerary</label>
                        {items.map((item, index) => (
                          <div key={index}>
                            <label htmlFor={`title-${index}`}>Title:</label>
                            <input
                              type="text"
                              id={`title-${index}`}
                              name="title"
                              value={item.title}
                              onChange={(e) => handleChange(index, e)}
                            />
                            <label htmlFor={`paragraph-${index}`}>
                              Paragraph:
                            </label>
                            <textarea
                              id={`paragraph-${index}`}
                              name="paragraph"
                              value={item.paragraph}
                              onChange={(e) => handleChange(index, e)}
                            />
                            <button
                              type="button"
                              onClick={() => removeItem(index)}
                            >
                              Remove Item
                            </button>
                          </div>
                        ))}
                        <button type="button" onClick={addNewItem}>
                          Add Item
                        </button>
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
                    <button type="submit" className="primary-btn3" onClick={onSubmit}>
                      Add Tours
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
