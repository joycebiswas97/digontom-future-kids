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

const Projects = () => {
  return (
    <div id="projects" className="py-24 bg-[#020C1B] text-white relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-amber-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-600">
            Featured Projects
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Explore some of the amazing hands-on hardware and IoT projects built by our students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 group hover:-translate-y-2 shadow-xl hover:shadow-orange-500/20"
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
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/40 to-transparent opacity-90" />
              </div>
              
              <div className="p-8 bg-zinc-900">
                <h3 className="text-2xl font-bold mb-3 text-zinc-100 group-hover:text-orange-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  {project.description}
                </p>
                <button className="text-orange-500 font-semibold inline-flex items-center hover:text-amber-400 transition-colors">
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

export default Projects;
