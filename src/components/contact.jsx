import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert("Thank you for reaching out! We'll get back to you soon.");
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section className="bg-[#0a0a0a] text-white py-24 px-6 md:px-12 relative overflow-hidden" id="contact">
            {/* Background glowing effects */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-600 rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-600 rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-sm mb-4">
                        <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                            Get In Touch
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Us</span>
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
                        Have questions about our programs or ready to enroll your child? Send us a message and we'll be in touch shortly.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Information */}
                    <div className="flex flex-col space-y-8">
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-orange-500/30 transition-colors duration-300">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-xl bg-orange-500/20 text-orange-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        Barasat, North 24 Parganas<br />
                                        West Bengal, 700125
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Email Section */}
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-amber-500/30 transition-colors duration-300">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-xl bg-amber-500/20 text-amber-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        hello@digontomkids.com<br />
                                        support@digontomkids.com
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Phone Section */}
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-orange-500/30 transition-colors duration-300">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-xl bg-orange-500/20 text-orange-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        +91 6289600599<br />
                                        Mon-Fri: 9:00 AM - 6:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-[#0a0a0a]/50 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-transparent transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-[#0a0a0a]/50 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-transparent transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 bg-[#
