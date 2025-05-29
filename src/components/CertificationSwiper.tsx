// components/Certifications.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

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

export const Certifications = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {certifications.map((cert, index) => {
        const isActive = activeIndex === index;

        return (
          <motion.div
            key={cert.title}
            layout
            onClick={() => setActiveIndex(isActive ? null : index)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: isActive ? 1.05 : 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className={`cursor-pointer rounded-lg bg-gray-900/50 p-6 shadow-md transition-all duration-300 overflow-hidden ${isActive ? 'z-10' : 'z-0'}`}
          >
            <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
            <p className="text-sm text-gray-400 mb-1">{cert.organization} — {cert.date}</p>
            {isActive && (
              <>
                <p className="text-sm text-gray-300">{cert.description}</p>
                <p className="text-xs text-gray-500 mt-2 italic">Instructor(s): {cert.instructors}</p>
              </>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};
