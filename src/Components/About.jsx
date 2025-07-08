import React from "react";
import { motion } from "framer-motion";
import { 
  FaCode, FaServer, FaCloud, FaDatabase, FaTools, FaLaptopCode,
  FaDownload, FaGraduationCap, FaTrophy, FaCertificate, FaUser, 
  FaMapMarkerAlt, FaBriefcase, FaEnvelope, FaLinkedin, FaGithub
} from "react-icons/fa";
import profile from "../Pics/Sanket.jpg";

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Skills data with proficiency levels
  const skillsData = {
    languages: [
      { name: "JavaScript", level: 90 },
      { name: "Java", level: 85 },
      { name: "Python", level: 80 },
      { name: "C++", level: 75 },
      { name: "TypeScript", level: 85 },
    ],
    frontend: [
      { name: "React", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Redux", level: 80 },
      { name: "HTML5/CSS3", level: 95 },
      { name: "Framer Motion", level: 75 }
    ],
    backend: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 85 },
      { name: "RESTful APIs", level: 90 },
      { name: "JWT Authentication", level: 80 },
    ],
    databases: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "Mongoose", level: 80 }
    ],
    tools: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 85 },
      {name:"Cursor", level: 90},
    ]
  };

  return (
    <section className="text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16 md:space-y-20">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6 sm:mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-violet-500 mb-4 sm:mb-6">About Me</h2>
          <div className="w-16 sm:w-24 h-1 bg-violet-500 mx-auto rounded-full"></div>
        </motion.div>
        
        {/* Personal Snapshot Section - Improved for mobile */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-black bg-opacity-40 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-800 shadow-xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
            {/* Photo - Full width on mobile, 1/3 on desktop */}
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-violet-900/40 to-indigo-900/40 p-6 sm:p-8 flex items-center justify-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-violet-500">
                <img src={profile} alt="Sayan Das" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            
            {/* Quick bio - Full width on mobile, 1/3 on desktop */}
            <motion.div variants={itemVariants} className="p-6 sm:p-8 flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Sanket</h3>
              <p className="text-violet-400 text-base sm:text-lg mb-3 sm:mb-4">Computer Science Engineer</p>
              <div className="space-y-2 text-gray-300 text-sm sm:text-base">
                <p className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-violet-400 flex-shrink-0" /> 
                  <span className="truncate">KIIT University, Bhubaneswar</span>
                </p>
                <p className="flex items-center gap-2">
                  <FaBriefcase className="text-violet-400 flex-shrink-0" /> 
                  <span className="truncate">Full-Stack Developer</span>
                </p>
                <p className="flex items-center gap-2">
                  <FaEnvelope className="text-violet-400 flex-shrink-0" /> 
                  <span className="truncate">sanketprasad2004@gmail.com</span>
                </p>
              </div>
              <div className="flex gap-3 mt-3 sm:mt-4">
                <a href="https://www.linkedin.com/in/sanket-321za" target="_blank" rel="noopener noreferrer" className="bg-violet-600 p-2 rounded-full hover:bg-violet-500 transition-colors">
                  <FaLinkedin className="text-white text-sm sm:text-base" />
                </a>
                <a href="https://github.com/Sanket33221" target="_blank" rel="noopener noreferrer" className="bg-violet-600 p-2 rounded-full hover:bg-violet-500 transition-colors">
                  <FaGithub className="text-white text-sm sm:text-base" />
                </a>
              </div>
            </motion.div>
            
          </div>
        </motion.div>
        
        {/* Profile Section - Improved grid for mobile */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-violet-400 border-l-4 border-violet-500 pl-4">
              Professional Profile
            </h3>
            
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I'm <span className="text-white font-semibold">Sanket</span>, a dedicated 
              <span className="text-white font-semibold"> Computer Science Engineer</span> with expertise in 
              full-stack development and a passion for creating innovative technology solutions.
            </p>
            
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Currently pursuing my B.Tech in Computer Science & Engineering at 
              <span className="text-white font-semibold"> KIIT University</span>, I specialize in 
              building scalable web applications, cloud infrastructure, and efficient API solutions.
            </p>
            
            <div className="mt-4 sm:mt-6 bg-black bg-opacity-30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-gray-800">
              <h4 className="text-lg sm:text-xl font-semibold text-violet-400 mb-2 sm:mb-3 flex items-center gap-2">
                <FaGraduationCap className="flex-shrink-0" /> Education
              </h4>
              <div className="ml-2 sm:ml-4 border-l-2 border-violet-500 pl-3 sm:pl-4 text-sm sm:text-base">
                <p className="text-white font-medium">B.Tech in Computer Science & Engineering</p>
                <p className="text-gray-400">KIIT University, Bhubaneswar, Odisha</p>
                <p className="text-gray-400">2022 - 2026</p>
                <p className="text-white font-medium mt-2 sm:mt-3">Senior Secondary Examination (CBSE Boards)</p>
                <p className="text-gray-400">Guru Gobind Public School, Bokaro, Jharkhand</p>
                <p className="text-gray-400">2020-2022</p>
                <p className="text-white font-medium mt-2 sm:mt-3">Secondary Examination (CBSE Boards)</p>
                <p className="text-gray-400">Guru Gobind Public School, Bokaro, Jharkhand</p>
                <p className="text-gray-400">2015-2020</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-violet-400 border-l-4 border-violet-500 pl-4">
              My Vision
            </h3>
            
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I aim to leverage cutting-edge technologies to develop solutions that address real-world challenges. My goal is to contribute to high-impact projects that push the boundaries of what's possible in web development and cloud computing.
            </p>
            
            <div className="mt-4 sm:mt-6 bg-black bg-opacity-30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-gray-800">
              <h4 className="text-lg sm:text-xl font-semibold text-violet-400 mb-2 sm:mb-3">Professional Goals</h4>
              <ul className="space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2 flex-shrink-0">▹</span>
                  Master advanced full-stack development methodologies
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2 flex-shrink-0">▹</span>
                  Explore AI integration in web applications
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2 flex-shrink-0">▹</span>
                  Contribute to open-source projects in web technologies
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Technical Skills Section - Better mobile layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="pt-2 sm:pt-4"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-violet-400 mb-4 sm:mb-8 border-l-4 border-violet-500 pl-4">
            Technical Expertise
          </h3>
          
          <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {Object.entries(skillsData).map(([category, skills]) => (
                <motion.div key={category} variants={itemVariants} className="space-y-3 sm:space-y-4">
                  <h4 className="flex items-center text-lg sm:text-xl font-semibold text-violet-400 mb-2 sm:mb-4">
                    {category === 'languages' && <FaCode className="mr-2 flex-shrink-0" />}
                    {category === 'frontend' && <FaLaptopCode className="mr-2 flex-shrink-0" />}
                    {category === 'backend' && <FaServer className="mr-2 flex-shrink-0" />}
                    {category === 'databases' && <FaDatabase className="mr-2 flex-shrink-0" />}
                    {category === 'cloud' && <FaCloud className="mr-2 flex-shrink-0" />}
                    {category === 'tools' && <FaTools className="mr-2 flex-shrink-0" />}
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </h4>
                  
                  {skills.map((skill, index) => (
                    <div key={index} className="mb-2 sm:mb-3">
                      <div className="flex justify-between mb-1">
                        <span className="text-white text-sm sm:text-base">{skill.name}</span>
                        <span className="text-gray-400 text-xs sm:text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 sm:h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.1 * index }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* What I Do Section - Better responsive grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="pt-4 sm:pt-8"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-violet-400 mb-4 sm:mb-8 border-l-4 border-violet-500 pl-4">
            Professional Services
          </h3>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: "Full-Stack Development",
                description: "End-to-end web application development with modern frontend frameworks and scalable backend solutions.",
                icon: <FaLaptopCode className="text-2xl sm:text-3xl text-violet-400" />
              },
              {
                title: "API Development",
                description: "Creation of robust RESTful APIs that enable secure and efficient data exchange between services.",
                icon: <FaServer className="text-2xl sm:text-3xl text-violet-400" />
              },
              {
                title: "Database Design",
                description: "Structured database architecture that supports efficient data operations and maintains data integrity.",
                icon: <FaDatabase className="text-2xl sm:text-3xl text-violet-400" />
              },
              {
                title: "Technical Consultation",
                description: "Expert guidance on technology stack selection and implementation strategies for web projects.",
                icon: <FaTools className="text-2xl sm:text-3xl text-violet-400" />
              },
              {
                title: "Code Optimization",
                description: "Performance enhancement of existing applications through algorithmic improvements and code refactoring.",
                icon: <FaCode className="text-2xl sm:text-3xl text-violet-400" />
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur"></div>
                <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-800 group-hover:border-violet-500 rounded-xl p-4 sm:p-6 transition-all duration-300 h-full">
                  <div className="bg-gray-800/50 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-violet-600/20 transition-colors">
                    {service.icon}
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold text-violet-400 mb-2 sm:mb-3">{service.title}</h4>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        
       {/* Call to Action - ENHANCED + RESPONSIVE */}
<motion.div 
  variants={itemVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="pt-10 px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col items-center"
>
  <div className="max-w-2xl text-center mb-10">
    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
      Ready to Bring Your Ideas to Life?
    </h3>
    <p className="text-sm sm:text-base text-gray-300">
      Let's discuss how we can work together to create innovative technology solutions for your projects.
    </p>
  </div>
  <a
    href="#contact"
    className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-white bg-violet-600 rounded-full shadow-2xl overflow-hidden"
  >
    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600"></span>
    <span className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 mb-24 sm:mb-32 mr-4 transition-all duration-500 origin-bottom-left transform rotate-45 translate-x-16 sm:translate-x-24 bg-violet-400 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
    <span className="relative flex items-center">
      Let's Collaborate
      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </span>
  </a>
</motion.div>

      </div>
    </section>
  );
};

export default About;
