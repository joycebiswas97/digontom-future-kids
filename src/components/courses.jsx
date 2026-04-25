import webDevImg from '../assets/webdev.jpg';
import mobileDevImg from '../assets/appdev.jpg';
import aiAutoImg from '../assets/ai.jpg';
import gameDevImg from '../assets/game.jpg';
import pythonImg from '../assets/python.jpg';
import roboticsImg from '../assets/robotics.jpg';

const courses = [
    {
        title: "Web Development",
        description: "Learn to build stunning websites from scratch using HTML, CSS, and React.",
        ageGroup: "10-15 Years",
        image: webDevImg
    },
    {
        title: "Mobile App Development",
        description: "Create your own iOS and Android apps and publish them to the world.",
        ageGroup: "12+ Years",
        image: mobileDevImg
    },
    {
        title: "AI & Automation",
        description: "Dive into the future with Artificial Intelligence and learn to build smart tools.",
        ageGroup: "13+ Years",
        image: aiAutoImg
    },
    {
        title: "Game Development",
        description: "Design, code, and play your own 2D and 3D games.",
        ageGroup: "9-14 Years",
        image: gameDevImg
    },
    {
        title: "Python Programming",
        description: "Master the basics of coding with one of the most popular languages in the world.",
        ageGroup: "10+ Years",
        image: pythonImg
    },
    {
        title: "Robotics Fundamentals",
        description: "Get hands-on with electronics and program your own robots.",
        ageGroup: "8-14 Years",
        image: roboticsImg
    }
];

function Courses() {
    return (
        <section className="bg-[#0F0518] text-white py-20 px-6 md:px-12 relative overflow-hidden" id="courses">
            {/* Subtle background glow */}
            <div className="absolute top-[20%] left-[-10%] w-72 h-72 bg-orange-600 rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-amber-600 rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                            Our Premium Courses
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Empower your child with future-ready skills. Our curriculum is designed to be engaging, hands-on, and incredibly fun.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className="bg-[#111111] border border-white/10 rounded-2xl p-6 hover:bg-[#1a1a1a] hover:border-orange-500/50 hover:-translate-y-2 transition-all duration-300 group shadow-lg flex flex-col"
                        >
                            {/* Course Image & Icon Badge */}
                            <div className="w-full h-48 mb-6 rounded-xl overflow-hidden relative">
                                <div className="absolute inset-0 bg-orange-500/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-300"></div>
                                <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            
                            {/* Course Content */}
                            <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
                            <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-orange-400 mb-4 self-start">
                                Ages {course.ageGroup}
                            </div>
                            <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                                {course.description}
                            </p>
                            <button className="w-full py-3 bg-white/5 hover:bg-gradient-to-r hover:from-orange-600 hover:to-amber-500 rounded-xl font-semibold transition-all duration-300 border border-white/10 hover:border-transparent mt-auto">
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Courses;
