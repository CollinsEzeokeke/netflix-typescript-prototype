import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

interface CarouselingProps {
  images: string[]
}
const Carouseling: React.FC <CarouselingProps> = ({images}) => {
  return (
<Swiper
        spaceBetween={50}
        slidesPerView={'auto'}
        autoplay={{ delay: 1000 }}
        loop={true}
      >
        {images.map((picture, index) => (
          <SwiperSlide key={index}>
            <img src={picture} alt={`Carousel image number ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
  );
};

export default Carouseling;
