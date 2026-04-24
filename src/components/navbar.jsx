import { useState } from "react";
import image from "../assets/image.png";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Our Courses", href: "#" },
        { name: "Projects", href: "#" },
        { name: "About Us", href: "#" },
        { name: "Reviews", href: "#" },
        { name: "Contact Us", href: "#" }
    ];

    return (
        <header className="bg-[#000000] text-white h-[74px] flex items-center justify-between px-[12px] md:px-[24px] py-[16px] relative z-50 font-[550] sticky top-0">

            <nav className="h-[50px] w-[122px] flex items-center">
                <img src={image} alt="logo" className="h-full object-contain" />
            </nav>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-[24px]">
                {navLinks.map((link, index) => (
                    <a key={index} href={link.href} className="text-[18px] hover:text-gray-300 transition-colors mx-[19px]">
                        {link.name}
                    </a>
                ))}
            </div>

            {/* Desktop Enroll Button */}
            <div className="hidden lg:block">
                <button className="text-[18px] px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-500 rounded-full font-bold text-white hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(234,88,12,0.4)] w-full sm:w-auto h-[50px] flex items-center justify-center">
                    Enroll in a course
                </button>
            </div>

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
                <div className="absolute top-[74px] left-0 w-full bg-[#000000] border-t border-gray-800 lg:hidden flex flex-col items-center py-[20px] shadow-xl">
                    {navLinks.map((link, index) => (
                        <a 
                            key={index} 
                            href={link.href} 
                            className="w-full text-center py-[12px] text-[16px] hover:bg-gray-800 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="mt-[15px] bg-gradient-to-r from-orange-600 to-amber-500 px-[30px] py-[10px] rounded-full text-[16px] font-semibold hover:bg-gray-200 transition-colors w-[80%] max-w-[300px]">
                        Enroll in a course
                    </button>
                </div>
            )}
            
        </header>
    )
}

export default Navbar;