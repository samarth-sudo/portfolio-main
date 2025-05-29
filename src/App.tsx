import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cursor } from './components/Cursor';
import { Section } from './components/Section';
import TypewriterComponent from 'typewriter-effect';
import { CertificationSwiper } from './components/CertificationSwiper';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-white cursor-none">
      {/* Gradient Mouse Background */}
      <motion.div
  className="fixed inset-0 -z-10 pointer-events-none transition-all duration-200"
  style={{
    background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, #0ea5e9 0%, #000000 40%)`
  }}
/>


      <Cursor />
      
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/50 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-light"
          >
            Home
          </motion.h1>
          <nav className="hidden md:flex gap-8">
            {['education', 'experience', 'projects', 'contact'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-gray-400 hover:text-white transition-colors uppercase text-sm tracking-wider"
              >
                {item}
              </motion.a>
            ))}
          </nav>
          <button className="md:hidden z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed inset-0 bg-black z-30 md:hidden flex items-center justify-center"
          >
            <nav className="flex flex-col gap-8 text-center">
              {['education', 'experience', 'projects', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl text-gray-400 hover:text-white transition-colors uppercase tracking-wider"
                >
                  {item}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <Section className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-xl mb-4 font-light"
            >
              <strong>Hi, I am Samarth Singh</strong>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-light mb-8"
            >
              <TypewriterComponent
                options={{
                  strings: [
                    'Robotics Engineer',
                    'IoT Engineer',
                    'UAV Engineer',
                    'Python Developer',
                    'Software Engineer'
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex gap-6"
            >
              {[
                { icon: Github, href: 'https://github.com/samarth-sudo' },
                { icon: Linkedin, href: 'https://linkedin.com/samarth-singh22' },
                { icon: Mail, href: 'mailto:samarthssingh5@gmail.com' }
              ].map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" className="bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light mb-12 text-center">Education</h2>
          <div className="max-w-3xl mx-auto space-y-12">
            {[
  {
    degree: "Master of Science in Robotics and Autonomous Systems",
    school: "Boston University",
    location: "Boston, MA",
    date: "Aug 2023 – Jan 2025",
    details: [
      "Specialization in Robot Learning and Computer Vision",
      "Graduate Research Intern – ROS-based drone telemetry visualization and kinematics analysis",
      "Relevant Coursework: Deep Learning, Computer Vision, Robot Kinematics"
    ]
  },
  {
    degree: "Bachelor of Technology in Electronics and Communication",
    school: "Amity University",
    location: "New Delhi, India",
    date: "Aug 2019 – May 2023",
    details: [
      "Graduated with First Class with Distinction",
      "Technical Lead at Robotics Society",
      "Relevant Coursework: Control Systems, Embedded Systems, Signal Processing"
    ]
  }
]
.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="relative pl-8 border-l border-gray-800"
              >
                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-blue-400" />
                <h3 className="text-xl mb-2">{edu.degree}</h3>
                <p className="text-gray-400 mb-2">{edu.school}</p>
                <p className="text-gray-400 mb-4">{edu.date} | {edu.location}</p>
                <ul className="text-gray-300 space-y-2">
                  {edu.details.map((detail, j) => (
                    <li key={j}>{detail}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" className="bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light mb-12 text-center">Experience</h2>
          <div className="max-w-3xl mx-auto space-y-12">
            {[
  {
    title: "Machine Learning Engineer",
    company: "Chicago Education Advocacy Cooperative (ChiEAC)",
    date: "May 2025 – Oct 2025",
    location: "Chicago, USA",
    description: [
      "Built bilingual emotion detection pipeline using DistilBERT and Hugging Face, detecting distress, confusion, and gratitude in real-time.",
      "Achieved an F1 score of 0.78 and delivered actionable integration for CARES system, enhancing staff intervention on emotional cues."
    ]
  },
  {
    title: "Graduate Research Intern",
    company: "Boston University",
    date: "May 2024 – Aug 2024",
    location: "Boston, USA",
    description: [
      "Developed ROS-based drone telemetry visualizer with RViz and Python, improving path-planning workflows by 30%.",
      "Integrated telemetry + feedback loops to improve kinematic understanding and autonomous navigation accuracy."
    ]
  },
  {
    title: "Graduate Teaching Assistant",
    company: "Boston University",
    date: "Jan 2024 – May 2024",
    location: "Boston, USA",
    description: [
      "Guided Arduino, CAD, and sensor-based embedded projects to successful prototype deployment.",
      "Provided structured feedback and mentorship to strengthen student proficiency in ML signal processing."
    ]
  },
  {
    title: "Software Engineer",
    company: "Cutso Foods LLP",
    date: "Aug 2022 – Jul 2023",
    location: "India",
    description: [
      "Engineered React.js dashboards integrated via WebSockets and Django Channels, improving real-time visibility.",
      "Streamlined MongoDB + SQL data pipelines and REST APIs to boost ingestion speed by 30%.",
      "Built multithreaded microservices for billing and analytics using AWS Lambda, IAM, and DynamoDB.",
      "Reduced latency by 30% and improved transaction reliability across financial services platforms."
    ]
  }
]
.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="relative pl-8 border-l border-gray-800"
              >
                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-blue-400" />
                <h3 className="text-xl mb-2">{exp.title}</h3>
                <p className="text-gray-400 mb-2">{exp.company}</p>
                <p className="text-gray-400 mb-4">{exp.date} | {exp.location}</p>
                <ul className="text-gray-300 space-y-2">
                  {exp.description.map((desc, j) => (
                    <li key={j}>{desc}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-light mb-12 text-center">Projects</h2>
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {[
        {
          title: "Job AI",
          description: "Automated high-volume job applications using Selenium + Playwright with CAPTCHA bypass and dynamic resume injection. Reduced manual effort by 80%.",
          link: "https://github.com/samarth-sudo/Job-AI"
        },
        {
          title: "Autonomous FPV Drone",
          description: "Built Unity-based drone simulator with real-time sensor fusion and kinematic control module to test autonomous navigation algorithms.",
          link: "https://github.com/samarth-sudo/Simulator_GOAP"
        },
        {
          title: "Living Rat Cells Segmentation",
          description: "Developed image segmentation pipeline for live rat cells using advanced filtering and edge detection techniques.",
          link: "https://github.com/WalnutEagle/CAS-CS-585-Project"
        },
        {
          title: "Prostate Cancer Grade Assessment",
          description: "Designed deep learning classifier to assess prostate cancer severity from histopathology images using CNN architectures.",
          link: "https://github.com/renaik/EC-500-PandaChallenge"
        },
        {
          title: "Computer Configuration via ML",
          description: "Optimized PC configurations using classical ML algorithms based on benchmark data and system performance.",
          link: "https://github.com/Talha188344/503_PROJECT"
        },
        {
          title: "Weather Monitoring via LoRa",
          description: "Automated real-time weather monitoring system using LoRa communication for long-range sensor data transmission.",
          link: "https://github.com/samarth-sudo/Quadcopter-for-Weather-Forcasting"
        }
      ].map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          transition={{ delay: i * 0.1 }}
          className="group relative overflow-hidden rounded-lg bg-gray-900/50 p-6"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <h3 className="text-xl mb-2 relative z-10">{project.title}</h3>
          <p className="text-gray-400 mb-4 relative z-10">{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors relative z-10"
          >
            View Project
          </a>
        </motion.div>
      ))}
    </div>
  </div>
</Section>


      {/* Certifications Section */}
      <Section id="certifications" className="bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light mb-12 text-center">Certifications</h2>
          <CertificationSwiper />
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="bg-black/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-8">Get In Touch</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Currently open to new opportunities. Feel free to reach out!
          </p>
          <motion.a
            href="mailto:samarthsb105@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-transparent border border-blue-400 text-blue-400 rounded-full hover:bg-blue-400 hover:text-black transition-all"
          >
            Say Hello
          </motion.a>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm">
        <p>&copy; Samarth Singh. All rights reserved </p>
      </footer>
    </div>
  );
}

export default App;
