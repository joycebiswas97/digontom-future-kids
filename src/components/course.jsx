import webDevImg from '../assets/webdev.jpg';
import mobileDevImg from '../assets/appdev.jpg';
import aiAutoImg from '../assets/ai.jpg';
import gameDevImg from '../assets/game.jpg';
import pythonImg from '../assets/python.jpg';
import roboticsImg from '../assets/robotics.jpg';
import { Link } from 'react-router-dom';

const coursesData = [
    {
        title: "Web Development",
        description: "Learn to build stunning websites from scratch using HTML, CSS, and React.",
        ageGroup: "10-15 Years",
        image: webDevImg,
        subProjects: ["Personal Portfolio Website", "Interactive Quiz Application"]
    },
    {
        title: "Mobile App Development",
        description: "Create your own iOS and Android apps and publish them to the world.",
        ageGroup: "12+ Years",
        image: mobileDevImg,
        subProjects: ["Daily To-Do List App", "Live Weather Application"]
    },
    {
        title: "AI & Automation",
        description: "Dive into the future with Artificial Intelligence and learn to build smart tools.",
        ageGroup: "13+ Years",
        image: aiAutoImg,
        subProjects: ["Custom Chatbot Creation", "Face Recognition System"]
    },
    {
        title: "Game Development",
        description: "Design, code, and play your own 2D and 3D games.",
        ageGroup: "9-14 Years",
        image: gameDevImg,
        subProjects: ["2D Platformer Game", "Space Shooter Arcade"]
    },
    {
        title: "Python Programming",
        description: "Master the basics of coding with one of the most popular languages in the world.",
        ageGroup: "10+ Years",
        image: pythonImg,
        subProjects: ["Smart Calculator Script", "Data Analysis Dashboard"]
    },
    {
        title: "Robotics Fundamentals",
        description: "Get hands-on with electronics and program your own robots.",
        ageGroup: "8-14 Years",
        image: roboticsImg,
        subProjects: ["Line Following Robot", "Automated Smart Lights"]
    }
];

function CoursePage() {
    return (
        <section className="bg-[#0a0a0a] text-white py-24 px-6 md:px-12 relative overflow-hidden min-h-screen" id="courses-page">
            {/* Background effects */}
            <div className="absolute top-[10%] left-[-10%] w-96 h-96 bg-orange-600 rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-amber-600 rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16 flex flex-col items-center">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-sm mb-4">
                        <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                            Our Programs
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Courses</span>
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-2xl text-lg">
                        Empower your child with future-ready skills. Each course includes exciting hands-on sub-projects they will build from scratch!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {coursesData.map((course, index) => (
                        <div
                            key={index}
                            className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm hover:bg-white/10 hover:border-orange-500/30 hover:-translate-y-2 transition-all duration-300 group shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(234,88,12,0.15)] flex flex-col"
                        >
                            {/* Course Image & Icon Badge */}
                            <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden relative">
                                <div className="absolute inset-0 bg-orange-500/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-300"></div>
                                <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            
                            {/* Course Content */}
                            <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
                            <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-orange-400 mb-4 self-start">
                                Ages {course.ageGroup}
                            </div>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                {course.description}
                            </p>
                            
                            {/* Sub Projects Section */}
                            <div className="mb-6 flex-grow bg-[#0a0a0a]/50 p-4 rounded-xl border border-white/5">
                                <h4 className="text-sm font-semibold text-amber-500 mb-2 uppercase tracking-wider">What They'll Build:</h4>
                                <ul className="space-y-2">
                                    {course.subProjects.map((project, i) => (
                                        <li key={i} className="flex items-start text-gray-400 text-sm">
                                            <svg className="w-4 h-4 text-orange-500 mr-2 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            {project}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link to="/enroll" className="w-full py-3 bg-gradient-to-r from-orange-600 to-amber-500 rounded-xl font-bold text-white hover:scale-[1.02] transition-transform duration-300 shadow-[0_0_20px_rgba(234,88,12,0.3)] mt-auto flex justify-center items-center">
                                Enroll Now
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CoursePage;
