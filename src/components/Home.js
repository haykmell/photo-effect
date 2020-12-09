import React, { useState } from "react";
import Header from "./header";
import { MdCloudUpload } from "react-icons/md";
import screenshot from "image-screenshot";

const Home = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("none");

  function handleChange(event) {
    setSelectedFile(URL.createObjectURL(event.target.files[0]));
  }

  const filter = [
    { effect: "blur(1px)" },
    { effect: "brightness(120%)" },
    { effect: "contrast(200%)" },
    { effect: "grayscale(100%)" },
  ];

  //handle download
  const handleDownload = () => {
    const img = document.getElementById("ava-image");
    //image name
    const imgName = `img${Date.now()}`;
    screenshot(img).download(imgName);
  };

  return (
    <>
      <div className="home">
        <Header />
        <section className="home-block">
          {selectedFile ? (
            <div className="filter">
              <div className="img-container">
                <div className="img">
                  <img
                    src={selectedFile}
                    id="ava-image"
                    style={{ filter: `${selectedFilter}` }}
                    alt=""
                  />
                </div>
                <div className="img-buttons">
                  <a
                    //handles download, and takes user back to homepage
                    href="/"
                    onClick={handleDownload}
                    className="download-btn"
                  >
                    DOWNLOAD
                  </a>
                </div>
              </div>
              <div className="filter-block">
                {filter.map((effect, index) => {
                  return (
                    <div
                      onClick={() => {
                        setSelectedFilter(effect.effect);
                      }}
                      className="filter-img-container"
                      key={index}
                    >
                      <img
                        src={selectedFile}
                        style={{ filter: `${effect.effect}` }}
                        alt=""
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <>
              <div className="home-block-upload">
                <div className="upload-icon">
                  <MdCloudUpload />
                </div>
                <label className="custom-file-upload">
                  <input
                    type="file"
                    accept="image/x-png,image/jpeg"
                    onChange={(e) => handleChange(e)}
                  />
                  UPLOAD IMAGE
                </label>
              </div>
            </>
          )}
        </section>
      </div>
    </>
  );
};

export default Home;
