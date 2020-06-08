import React, { useState, useCallback } from 'react';
import '../Extras/css/style.css';
import '../Extras/css/bootstrap.min.css';
import '../Extras/css/themify-icons.css';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./images";

function GalleryA() {
    const[currentImage, setCurrentImage] = useState(0);
    const[viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };
    function columns(containerWidth) {
        let columns = 1;
        if (containerWidth >= 500) columns = 2;
        if (containerWidth >= 900) columns = 3;
        if (containerWidth >= 1500) columns = 4;
        return columns;
      }
      
    return (
        <div>
            <div className="bradcam_area">
                <div className="single_bradcam d-flex align-items-center bradcam_bg_3 overlay">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-xl-9">
                                <div className="bradcam_text text-center">
                                    <h3>Gallery</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overlay" id="rgal">
                <Gallery photos={photos} onClick={openLightbox} columns={columns}/>
                <ModalGateway>
                    {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={photos.map(x => ({
                                    ...x,
                                    srcset: x.srcSet,
                                    caption: x.title
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </div>
        </div>
    )
}

export default GalleryA;
