import React, { useState, useRef, useEffect } from "react";
import Header from "./header";
import { MdCloudUpload } from "react-icons/md";

const Home = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("none");

  const canvas = useRef("");
  const mainImage = useRef("");

  function handleChange(event) {
    setSelectedFile(URL.createObjectURL(event.target.files[0]));
  }

  const filter = [
    { effect: "blur(1px)" },
    { effect: "brightness(120%)" },
    { effect: "contrast(200%)" },
    { effect: "grayscale(100%)" },
  ];

  useEffect(() => {
    const canvasEl = canvas.current;
    const mainImageEl = mainImage.current;
    if (mainImageEl !== "") {
      let ctx = canvasEl.getContext("2d");
      console.log(mainImageEl);
      ctx.drawImage(mainImageEl, 0, 0, 1100, 1000);
    }
  }, [selectedFilter]);

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
                    ref={mainImage}
                  />
                </div>
                <div className="img-buttons">
                  <a
                    // download="filename.png"
                    // href=""
                    // onClick={}
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
                  <input type="file" onChange={(e) => handleChange(e)} />
                  UPLOAD IMAGE
                </label>
              </div>
            </>
          )}
        </section>
        <div className="canvas-container">
          <canvas ref={canvas} id="canvas"></canvas>
        </div>
      </div>
    </>
  );
};

export default Home;
