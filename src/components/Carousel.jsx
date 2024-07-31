// src/Carousel.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../carousel.css';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1);

  

  // Function to update itemsToShow based on window width
  const updateItemsToShow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1200) {
      setItemsToShow(4); // Desktop
    } else if (screenWidth >= 992) {
      setItemsToShow(3); // Tablet
    } else if (screenWidth >= 768) {
      setItemsToShow(2); // Medium
    } else {
      setItemsToShow(1); // Small
    }
  };

  useEffect(() => {
    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
    return () => window.removeEventListener('resize', updateItemsToShow);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data?.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data?.length) % data?.length);
  };

  return (
    <div className="main-carousel">
      <div className="main-carousel-items" style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}>
        {data?.map((item) => {
          const {id, title, image} = item
          
          return (
            <motion.div
            key={id}
            className="main-carousel-item"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ flex: `0 0 calc(100% / ${itemsToShow})` }}
          >
              <Link to={`/recipe/${id}`} className='shadow-lg rounded-lg pb-1 '>
                <img src={`${image}`} alt={title} />
                <div className='pt-2 px-2 flex items-center justify-between'>
                  <div>
                    <h3 className='text-white text-lg lg:text-xl tracking-wide poppins-medium '>{title}</h3>
                  </div>
                </div>
            </Link>
          </motion.div>
          )
        })}
      </div>
      <button className="prev-button" onClick={prevSlide}><FaAngleLeft size={27} /></button>
      <button className="next-button" onClick={nextSlide}><FaAngleRight size={27} /></button>
    </div>
  );
};

export default Carousel;
