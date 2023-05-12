import React, { useState } from "react";

const images = [
  "https://picsum.photos/id/237/400/300",
  "https://picsum.photos/id/238/400/300",
  "https://picsum.photos/id/239/400/300",
  "https://picsum.photos/id/240/400/300",
];
export function Optiune1() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setCurrentImageIndex(0);
    }
  };

  const goToPreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else {
      setCurrentImageIndex(images.length - 1);
    }
  };
  return (
    <div className="container2">
      <button className="button" onClick={goToPreviousImage}>
        &#8592;
      </button>
      <img src={images[currentImageIndex]} alt="Slider" />
      <button className="button" onClick={goToNextImage}>
        &rarr;
      </button>
    </div>
  );
}
