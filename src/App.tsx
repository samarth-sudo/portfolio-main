import React, { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cursor } from './components/Cursor';
import { Section } from './components/Section';
import TypewriterComponent from 'typewriter-effect';
import { CertificationSwiper } from './components/CertificationSwiper';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white cursor-none">
      <Cursor />
      
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/50 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-light"
          >
            Samarth Singh
          </motion.h1>
          <nav className="hidden md:flex gap-8">
            {['about', 'education', 'experience', 'projects', 'contact'].map((item, i) => (
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
              {['about', 'education', 'experience', 'projects', 'contact'].map((item) => (
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
              Hi, I am Samarth Singh
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
                    'Python Developer'
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
                degree: "Master of Science in Robotics",
                school: "Boston University",
                location: "Boston, MA",
                date: "2023 - 2025",
                details: [
                  "Specialization in Robot Learning and Computer Vision",
                  "Research Assistant at Robotics and Autonomous Systems Teaching and Innovation Center",
                  "Relevant Coursework: Robot Learning, Computer Vision, Deep Learning"
                ]
              },
              {
                degree: "Bachelor of Technology in Electronics and Communication",
                school: "Amity University",
                location: "New Delhi, India",
                date: "2019 - 2023",
                details: [
                  "First Class with Distinction",
                  "Technical Lead at Robotics Society",
                  "Relevant Coursework: Digital Signal Processing, Control Systems, Embedded Systems"
                ]
              }
            ].map((edu, i) => (
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
                title: "Research Intern",
                company: "Robotics And Autonomous Systems Teaching and Innovation Center",
                date: "Jun 2024 – Aug 2024",
                location: "Boston, USA",
                description: [
                  "Spearheaded building of software wherein students can provide path planning algorithm for Tiny Whoop drones (5 cm - 10cm in length).",
                  "Developed an end-to-end solution using Server-Side deployment of algorithms using relevant APIs for ease of access to required personnel."
                ]
              },
              {
                title: "Graduate Teaching Assistant",
                company: "Boston University",
                date: "Jan 2024 - May 2024",
                location: "Boston, USA",
                description: [
                  "Guided students on hands-on course for introducing Arduino along with various sensors.",
                  "Instructed students in CAD building, Arduino programming and soldering for room temperature monitoring."
                ]
              },
              {
                title: "Internship Trainee",
                company: "Noida Metro Rail Corporation",
                date: "Jun 2022 - Jul 2022",
                location: "Noida, India",
                description: [
                  "Gained valuable experience in strategic planning and operational techniques required to launch and manage a metro network in a metropolitan city.",
                  "Developed knowledge in signaling and telecommunication systems over a 30 km metro network, including signal processing, data communication, and centralized control of interconnected stations and trains."
                ]
              }
            ].map((exp, i) => (
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
                title: "Living Rat Cells Segmentation",
                description: "Advanced segmentation methodology for living rat cells using image processing techniques.",
                link: "https://github.com/WalnutEagle/CAS-CS-585-Project"
              },
              {
                title: "Prostate Cancer Grade Assessment",
                description: "Deep learning solution to classify severity of prostate cancer.",
                link: "https://github.com/renaik/EC-500-PandaChallenge"
              },
              {
                title: "Classical Machine Learning for Computer Configuration",
                description: "Algorithm for system designing according to PC benchmark data.",
                link: "https://github.com/Talha188344/503_PROJECT"
              },
              {
                title: "Weather Monitoring based on LoRa",
                description: "Complete automation of weather forecasting process using LoRa technology.",
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
            href="mailto:samarthssingh5@gmail.com"
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
