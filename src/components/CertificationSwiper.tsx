
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="text-center">
      <button
        onClick={() => setExpanded(!expanded)}
        className="mb-8 px-6 py-2 bg-blue-600 rounded-full hover:bg-blue-500 transition"
      >
        {expanded ? "Collapse" : "Show All"}
      </button>

      <motion.div
        layout
        className={`grid gap-6 justify-center ${expanded ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}
      >
        <AnimatePresence>
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
              className="bg-gray-900/50 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
              <p className="text-sm text-gray-400 mb-1">{cert.organization} — {cert.date}</p>
              <p className="text-sm text-gray-300">{cert.description}</p>
              <p className="text-xs text-gray-500 mt-2 italic">Instructor(s): {cert.instructors}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
