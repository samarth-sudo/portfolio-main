import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

const certifications = [
  {
    title: "OpenCV Bootcamp",
    organization: "OpenCV University",
    date: "Sep 2024",
    description: "Concluded with 94% grade, gaining expertise in image processing and computer vision algorithms.",
    instructors: "Satya Mallick and Gary Bradski"
  },
  {
    title: "Artificial Intelligence A-Z",
    organization: "Udemy",
    date: "Sep 2022",
    description: "Mastered AI, LLM, and ChatGPT applications through comprehensive coursework.",
    instructors: "Hadelin de Ponteves, Kirill Eremenko"
  },
  {
    title: "Python For Data Science and ML Bootcamp",
    organization: "Udemy",
    date: "Sep 2022",
    description: "Gained proficiency in Python, data science, and machine learning fundamentals.",
    instructors: "Jose Portilla"
  },
  {
    title: "Basic Image Classification with TensorFlow",
    organization: "Coursera",
    date: "Aug 2022",
    description: "Mastered foundational skills in image classification and deep learning.",
    instructors: "Amit Yadav"
  }
];

export const CertificationSwiper = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-[300px] h-[400px]"
      >
        {certifications.map((cert, index) => (
          <SwiperSlide key={index} className="bg-gray-900/90 rounded-xl p-6 flex flex-col">
            <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
            <p className="text-blue-400 mb-2">{cert.organization}</p>
            <p className="text-gray-400 text-sm mb-4">{cert.date}</p>
            <p className="text-gray-300 flex-grow mb-4">{cert.description}</p>
            <p className="text-gray-400 text-sm mt-auto">
              Instructed by: {cert.instructors}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};