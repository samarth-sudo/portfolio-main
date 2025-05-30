import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
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

export const CertificationCards = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {certifications.map((cert, i) => {
        const isExpanded = expandedIndex === i;
        return (
          <Tilt
            key={i}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareEnable={true}
            glareMaxOpacity={0.2}
            glareColor="#ffffff"
            glarePosition="all"
            className={`bg-gray-900/60 p-6 rounded-lg shadow-lg transition-all cursor-pointer ${
              isExpanded ? 'col-span-2 row-span-2 scale-105 z-10' : ''
            }`}
            onClick={() => setExpandedIndex(isExpanded ? null : i)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-300">{cert.title}</h3>
              <p className="text-sm text-gray-400 mb-1">{cert.organization} — {cert.date}</p>
              <p className="text-gray-300 text-sm mb-2">{cert.description}</p>
              <p className="text-gray-500 text-xs italic">Instructor(s): {cert.instructors}</p>
            </motion.div>
          </Tilt>
        );
      })}
    </div>
  );
};

export default CertificationCards;
