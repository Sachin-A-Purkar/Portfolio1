import React, { useState } from 'react';
import { BsChevronBarRight, BsChevronBarLeft } from 'react-icons/bs';
import i1 from "../assects/images/i1.jpg"
import i2 from "../assects/images/i2.jpg"
import i3 from "../assects/images/i3.jpg"

function Project1() {
  const slides = [
    { url: i1 },
    { url: i2 },
    { url: i3},
    { url: i2 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-cover bg-center duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='absolute top-1/2 left-8 text-2xl p-2 text-white bg-black/50 rounded-full cursor-pointer' onClick={prevSlide}>
        <BsChevronBarLeft />
      </div>
      {/* Right Arrow */}
      <div className='absolute top-1/2 right-8 text-2xl p-2 text-white bg-black/50 rounded-full cursor-pointer' onClick={nextSlide}>
        <BsChevronBarRight />
      </div>
    </div>
  );
}

export default Project1;
