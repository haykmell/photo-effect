import React, { useState } from 'react'
import Header from './header'
import { MdCloudUpload } from 'react-icons/md';
import ImageEffect from 'react-image-effects'

const Home = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedFilter, setSelectedFilter] = useState('none');

    function handleChange(event) {
        setSelectedFile(
            URL.createObjectURL(event.target.files[0])
        )
    }

    const filter = [
        { effect: "night-vision" },
        { effect: "selective-color" },
        { effect: "hallucination" },
        { effect: "collage" },
    ];


    return (
        <>
            <div className="home">
                <Header />
                <section className="home-block">
                    {selectedFile ?
                        <div className="filter">
                            <div className="img-container">
                                <div className="img">
                                    <ImageEffect
                                        url={selectedFile}
                                        effect={selectedFilter}
                                        width="700"
                                    />
                                </div>
                                <div className="img-buttons">
                                    <a
                                        className="download-btn"
                                        href={selectedFile}
                                        download
                                    >
                                        DOWNLOAD
                                    </a>
                                </div>
                            </div>
                            <div className="filter-block">
                                {filter.map((effect, index) => {
                                    return <div onClick={() => setSelectedFilter(effect.effect)} className="filter-img-container" key={index}>
                                        <ImageEffect
                                            url={selectedFile}
                                            effect={effect.effect}
                                            width="700"
                                        />
                                    </div>
                                })}
                            </div>
                        </div>

                        :
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
                    }
                </section>
            </div>
        </>
    )
}

export default Home
