import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./Gallery.css";

import img4 from "../images/Manfred Schmelzer 2.jpg";
import img5 from "../images/Manfred Schmelzer 3.jpg";
import img6 from "../images/Martin Bogus 1.jpg";
import img7 from "../images/Martin Bogus 3.jpg";
import img8 from "../images/Martin Bogus 4.jpg";
import img9 from "../images/P1032259.jpg";
import img10 from "../images/P1032280.jpg";
import img11 from "../images/P1032301.jpg";
import img12 from "../images/P1032320.jpg";
import img13 from "../images/P1032325.jpg";
import img14 from "../images/P1032352.jpg";
import img15 from "../images/Sara Baerend 5.jpg";
import imgEnd from "../images/Wolfgang von Wieding1.jpg";
import img17 from "../images/Wolgang von Wieding 2.jpg";
import img18 from "../images/Sara Baerend.jpg";

const galleryImages = [
  {
    img: img7,
  },
  {
    img: img4,
  },
  {
    img: img5,
  },
  {
    img: img6,
  },
  {
    img: img8,
  },
  {
    img: img9,
  },
  {
    img: img10,
  },
  {
    img: img11,
  },
  {
    img: img12,
  },
  {
    img: img13,
  },
  {
    img: img14,
  },
  {
    img: img15,
  },
  {
    img: img18,
  },
  {
    img: img17,
  },
  {
    img: imgEnd,
  },
];

const Gallery = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <div>
      {openModal && (
        <div className="sliderWrap">
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="btnClose"
            onClick={handleCloseModal}
          />
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            className="btnPrev"
            onClick={prevSlide}
          />
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            className="btnNext"
            onClick={nextSlide}
          />
          <div className="fullScreenImage">
            <img src={galleryImages[slideNumber].img} alt="" />
          </div>
        </div>
      )}

      <div className="galleryWrap">
        {galleryImages.map((slide, index) => {
          return (
            <div
              className="single"
              key={index}
              onClick={() => handleOpenModal(index)}
            >
              <img src={slide.img} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
