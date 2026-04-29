import React from 'react';
import rfidImage from '../assets/attendance system.jpeg';
import fireAlarmImage from '../assets/water pump.jpeg';
import robotCarImage from '../assets/robotic car.jpeg';

const projectsData = [
  {
    id: 1,
    title: 'RFID Card Attendance System',
    description: 'A smart attendance system using an RFID reader, an LCD display, and a microcontroller to track check-ins and check-outs seamlessly.',
    image: rfidImage,
  },
  {
    id: 2,
    title: 'Smart Fire Alarm & Water Pump',
    description: 'An automated safety system featuring a flame sensor, smoke sensor, buzzer alarm, and a 12V water pump controlled by a NodeMCU ESP8266.',
    image: fireAlarmImage,
  },
  {
    id: 3,
    title: 'Obstacle Avoiding Robot Car',
    description: 'A programmable Arduino-based robot car equipped with an ultrasonic sensor to detect and avoid obstacles in real-time.',
    image: robotCarImage,
  }
];

const ProjectPage = () => {
  return (
    <div id="projects-page" className="py-24 bg-[#0a0a0a] text-white relative min-h-screen">
      {/* Background Decor */}
      <div className="absolute top-[10%] left-[-10%] w-96 h-96 bg-orange-600 rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-amber-600 rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16 flex flex-col items-center">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-sm mb-4">
                <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                    Our Work
                </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Projects</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl text-lg">
                Explore some of the amazing hands-on hardware and IoT projects built by our students.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm hover:border-orange-500/30 transition-all duration-300 group hover:-translate-y-2 shadow-xl hover:shadow-[0_0_30px_rgba(234,88,12,0.15)] flex flex-col"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/600x400/27272a/f97316?text=" + encodeURIComponent(project.title);
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent opacity-90" />
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                <button className="text-orange-500 font-semibold inline-flex items-center hover:text-amber-400 transition-colors w-fit">
                  View Details 
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
