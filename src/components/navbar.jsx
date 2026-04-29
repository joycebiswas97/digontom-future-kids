import { useState } from "react";
import image from "../assets/digontom.png";
import { FiMenu, FiX } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import {Link} from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);

    const navLinks = [
        { name: "Our Courses", href: "/courses" },
        { name: "Projects", href: "/projects" },
        { name: "About Us", href: "/about" },
        { name: "Reviews", href: "/reviews" },
        { name: "Contact Us", href: "/contact" }
    ];

    return (
        <header className="bg-[#000000] text-white h-[74px] flex items-center justify-between px-[12px] md:px-[24px] py-[16px] z-50 font-[550] fixed md:top-5 md:left-[50%] md:translate-x-[-50%] w-full md:w-[95%]">

            <Link to="/">
                <div className="h-[40px] flex items-center">
                    <img src={image} alt="logo" className="h-full object-contain" />
                    <h1 className="text-lg font-bold ml-1">digontom future kids</h1>
                </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
                {navLinks.map((link, index) => (
                    <div key={index} className="relative group py-6">
                        <Link to={link.href} className="text-[16px] hover:text-gray-300 transition-colors mx-[19px] hover:underline decoration-orange-500 underline-offset-8 flex items-center">
                            {link.name}
                            {link.name === "Our Courses" && (
                                <RiArrowDropDownLine className="h-7 w-7" />
                            )}
                        </Link>
                        {link.name === "Our Courses" && (
                            <div className="absolute top-[60px] left-[19px] w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                <div className="bg-white border border-gray-800 rounded-xl shadow-[0_0_30px_rgba(234,88,12,0.15)] overflow-hidden">
                                    <ul className="py-2">
                                        {['Web Development', 'Mobile App Development', 'AI & Automation', 'Game Development', 'Python Programming', 'Robotics Fundamentals'].map((course, i) => (
                                            <li key={i}>
                                                <Link to="/courses" className="block px-8 py-5 text-[15px] text-gray-700 hover:text-orange-500 hover:bg-gray-200 transition-colors border-b border-gray-800/50 last:border-0">
                                                    {course}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Desktop Enroll Button */}
            <Link to="/enroll" className="hidden lg:block">
                <button className="text-[16px] px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-500 rounded-full font-bold text-white hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(234,88,12,0.4)] w-full sm:w-auto h-[50px] flex items-center justify-center">
                    Enroll in a course
                </button>
            </Link>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-[10px]">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-[24px] focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="absolute top-[74px] left-0 w-full bg-[#FFFFFF] border-t border-gray-800 lg:hidden flex flex-col items-center py-[20px] shadow-xl">
                    {navLinks.map((link, index) => {
                        if (link.name === "Our Courses") {
                            return (
                                <div key={index} className="w-full flex flex-col items-center">
                                    <button
                                        className="w-full text-black text-center py-[12px] text-[18px] hover:bg-gray-100 border-b border-gray-800/10 transition-colors flex justify-center items-center gap-2 focus:outline-none"
                                        onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                                    >
                                        {link.name}
                                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform duration-300 ${mobileCoursesOpen ? 'rotate-180 text-orange-500' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    <div className={`w-full bg-gray-50 flex flex-col items-center overflow-hidden transition-all duration-300 ${mobileCoursesOpen ? 'max-h-[500px] border-b border-gray-800/10' : 'max-h-0'}`}>
                                        {['Web Development', 'Mobile App Development', 'AI & Automation', 'Game Development', 'Python Programming', 'Robotics Fundamentals'].map((course, i) => (
                                            <a
                                                key={i}
                                                href="#courses"
                                                className="w-full text-center py-[10px] text-[15px] text-gray-600 hover:text-orange-500 hover:bg-gray-100 transition-colors"
                                                onClick={() => {
                                                    setIsOpen(false);
                                                    setMobileCoursesOpen(false);
                                                }}
                                            >
                                                {course}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            );
                        }
                        return (
                            <a
                                key={index}
                                href={link.href}
                                className="w-full text-black text-center py-[12px] text-[18px] hover:bg-gray-100 border-b border-gray-800/10 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        );
                    })}
                    <button className="mt-[15px] bg-gradient-to-r from-orange-600 to-amber-500 px-[30px] py-[10px] rounded-full text-[16px] font-semibold hover:bg-gray-200 transition-colors w-[80%] max-w-[300px] text-white">
                        Enroll in a course
                    </button>
                </div>
            )}

        </header>
    )
}

export default Navbar;