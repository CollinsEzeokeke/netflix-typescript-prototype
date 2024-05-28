import React, { useEffect, useRef, useState } from 'react';

interface CarouselingProps {
  images: string[];
}

const Carouseling: React.FC<CarouselingProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [images]);

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transition = 'transform 0.5s ease-in-out';
      slideRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <div className="carousel">
      <div className="slide-container" ref={slideRef}>
        {images.map((picture, index) => (
          <div key={index} className="slide">
            <img src={picture} alt={`Carousel image number ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carouseling;
