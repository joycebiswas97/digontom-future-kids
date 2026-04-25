import React from 'react';
import image from "../assets/digontom.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-[#020617] text-white pt-10 md:pt-20 pb-10 px-5 md:px-5 relative border-t border-white/5">
            <div className="max-w-7xl mx-5 md:mx-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    
                    {/* Brand Section */}
                    <div className="flex flex-col space-y-6">
                        <img src={image} alt="Digontom Logo" className="h-18 object-contain self-start" />
                        <p className="text-[#B3B3B3] text-lg leading-relaxed max-w-xs">
                            World-class solution for Websites, Mobile Apps, Automations, AI Agents, and Games.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-[#B3B3B340] flex items-center justify-center text-[#B3B3B3] hover:text-white hover:bg-orange-600 transition-colors text-lg bg-[#FFFFFF0D] transition-transform duration-300 hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:-translate-y-0.5">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-[#B3B3B340] flex items-center justify-center text-[#B3B3B3] hover:text-white hover:bg-orange-600 transition-colors text-lg bg-[#FFFFFF0D] transition-transform duration-300 hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:-translate-y-0.5">
                                <FaTwitter />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-[#B3B3B340] flex items-center justify-center text-[#B3B3B3] hover:text-white hover:bg-orange-600 transition-colors text-lg bg-[#FFFFFF0D] transition-transform duration-300 hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:-translate-y-0.5">
                                <FaInstagram />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-[#B3B3B340] flex items-center justify-center text-[#B3B3B3] hover:text-white hover:bg-orange-600 transition-colors text-lg bg-[#FFFFFF0D] transition-transform duration-300 hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:-translate-y-0.5">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Company</h3>
                        <ul className="space-y-4 text-lg">
                            <li><a href="#" className="text-[#B3B3B3] hover:text-orange-500 transition-colors">About Us</a></li>
                            <li><a href="#" className="text-[#B3B3B3] hover:text-orange-500 transition-colors">Pricing</a></li>
                            <li><a href="#" className="text-[#B3B3B3] hover:text-orange-500 transition-colors">Customers</a></li>
                            <li><a href="#" className="text-[#B3B3B3] hover:text-orange-500 transition-colors">Careers</a></li>
                            <li><a href="#" className="text-[#B3B3B3] hover:text-orange-500 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Services</h3>
                        <ul className="space-y-4 text-lg">
                            <li><a href="#" className="text-[#B3B3B3] hover:text-orange-500 transition-colors">Website Development</a></li>
                            <li><a href="#" className="text-[#B3B3B3] hover:text-orange-500 transition-colors">Mobile Apps</a></li>
                            <li><a href="#" className="text-[#B3B3B3] hover:text-orange-500 transition-colors">AI Automation</a></li>
                            <li><a href="#" className="text-[#B3B3B3] hover:text-orange-500 transition-colors">Workflow Automation</a></li>
                        </ul>
                    </div>

                    {/* Stay Updated */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Stay Updated</h3>
                        <p className="text-[#B3B3B3] text-lg mb-6">
                            Subscribe to our newsletter for the latest AI trends.
                        </p>
                        <form className="flex" onSubmit={(e) => e.preventDefault()}>
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="bg-[#0f172a] text-white text-sm px-4 py-3 rounded-l-lg border border-gray-800 focus:outline-none focus:border-orange-500 w-full"
                            />
                            <button 
                                type="submit" 
                                className="bg-[#ea580c] hover:bg-[#f97316] px-5 py-3 rounded-r-lg text-white transition-colors flex items-center justify-center"
                            >
                                <FaPaperPlane />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-lg text-[#B3B3B3]">
                    <p>© 2026 Digontom. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>

            {/* WhatsApp Floating Button */}
            <a 
                href="#" 
                className="fixed bottom-6 right-6 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center text-3xl shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300 z-50"
                aria-label="Chat on WhatsApp"
            >
                <FaWhatsapp />
            </a>
        </footer>
    );
}

export default Footer;
