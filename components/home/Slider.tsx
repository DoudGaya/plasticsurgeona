"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { StaticImageData } from 'next/image';

interface SliderImage {
  src: StaticImageData;
  alt: string;
  caption: string;
}

interface ImageSliderProps {
  images: SliderImage[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <motion.div style={{backgroundImage: `url(${images[currentIndex].src.src})`}} className="flex h-screen bg-cover bg-no-repeat  items-center justify-center w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
      >

        {/* <motion.Image/> */}
        <div className="absolute z-10 flex items-center justify-between w-full px-4">
          <button onClick={handlePrev} className="p-2 bg-red-400 rounded-full shadow-md">
            {/* Add left arrow icon here */}
          </button>
          <button onClick={handleNext} className="p-2 bg-red-400 rounded-full shadow-md">
            {/* Add right arrow icon here */}
          </button>
        </div>
      </motion.div>
      <div className="p-4">
        <h3 className="text-lg font-semibold ">{images[currentIndex].caption}</h3>
      </div>
    </div>
  );
};

export default ImageSlider;
